import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion"; // Importing framer-motion
import Javascript from "../assets/js.png";
import Html from "../assets/html.webp";
import Css from "../assets/css.webp";
import ReactJS from "../assets/reactjs.webp";
import MySql from "../assets/mysql.png";
import Php from "../assets/php.png";
import Node from "../assets/expressjs.png";
import Git from "../assets/git.png";
import Tailwind from "../assets/tailwind.png";
import Laravel from "../assets/laravel.png";
import Python from "../assets/python.png";
import Figma from "../assets/figma.webp";
import NodePic from "../assets/node.png";
import Postman from "../assets/postman.svg";
import Jquery from "../assets/jquery.png";

const skillsData = [
  { src: Html, alt: "HTML", label: "HTML" },
  { src: Css, alt: "CSS", label: "CSS" },
  { src: Tailwind, alt: "Tailwind CSS", label: "Tailwind CSS" },
  { src: Javascript, alt: "JavaScript", label: "JavaScript" },
  { src: ReactJS, alt: "React", label: "React" },
  { src: NodePic, alt: "Node", label: "Node" },
  { src: MySql, alt: "MySQL", label: "MySQL" },
  { src: Php, alt: "PHP", label: "PHP" },
  { src: Jquery, alt: "Jquery", label: "Jquery" },
  { src: Laravel, alt: "Laravel", label: "Laravel" },
  { src: Python, alt: "Python", label: "Python" },
  { src: Git, alt: "Git", label: "Git" },
  { src: Postman, alt: "Postman", label: "Postman" },
  { src: Figma, alt: "Figma", label: "Figma" },
];

const Skills = () => {
  const [inView, setInView] = useState(false); // State to track visibility
  const sectionRef = useRef(null); // Reference for the skills section

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Set inView to true when the section is in view
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.5, // Trigger animation when 50% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Observe the skills section
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Clean up observer
      }
    };
  }, []);

  return (
    <section
      id="skills"
      className="bg-background py-16"
      ref={sectionRef} // Attach ref to the section element
    >
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-accent text-center mb-12">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="group relative flex flex-col items-center justify-center p-6 transition-transform hover:scale-105"
              initial={{
                opacity: 0, // Initially hidden
                y: 30, // Start position (below the normal position)
              }}
              animate={{
                opacity: inView ? 1 : 0, // Fade in when in view
                y: inView ? 0 : 30, // Slide up to normal position
              }}
              transition={{
                opacity: { duration: 0.5 },
                y: { duration: 0.5, ease: "easeOut", delay: index * 0.1 }, // Slide up effect with delay
              }}
            >
              <motion.img
                src={skill.src}
                alt={skill.alt}
                className="w-24 h-24 transition-transform duration-300 group-hover:translate-y-4 object-contain"
              />
              <motion.p className="absolute bottom-0 opacity-0 text-lg font-semibold text-text group-hover:opacity-100 group-hover:translate-y-4 transition-all duration-300">
                {skill.label}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
