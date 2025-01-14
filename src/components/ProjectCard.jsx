import React, { useState, useEffect, useRef } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, image, link, languages }) => {
  const [inView, setInView] = useState(false);
  const cardRef = useRef(null);

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="bg-gradient-to-b from-background to-primary shadow-md rounded-lg overflow-hidden flex flex-col"
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 30,
      }}
      transition={{
        opacity: { duration: 0.5 },
        y: { duration: 0.5, ease: "easeOut", delay: 0.2 },
      }}
    >
      {/* Project Image */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent bg-secondary p-3 rounded-full hover:bg-primary"
          >
            <FaExternalLinkAlt size={24} />
          </a>
        </div>
      </div>

      {/* Project Details */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-text">{title}</h3>
        <p className="mt-4 text-text text-sm text-justify flex-grow">
          {description}
        </p>

        {/* Programming Languages */}
        <div className="mt-4 flex flex-wrap gap-3">
          {languages.map((lang, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 bg-background px-3 py-1 rounded-full"
            >
              <img
                src={lang.logo}
                alt={lang.name}
                className="w-6 h-6 object-contain"
              />
              <span className="text-sm font-medium text-text">{lang.name}</span>
            </div>
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center mt-6 text-secondary hover:text-accent transition-colors"
        >
          <span className="text-lg font-medium">View Project</span>
          <FaExternalLinkAlt className="ml-2" />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
