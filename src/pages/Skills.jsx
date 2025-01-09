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
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Set inView to true when the section is in view
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="bg-background py-16" ref={sectionRef}>
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
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: inView ? 1 : 0,
                y: inView ? 0 : 30,
              }}
              transition={{
                opacity: { duration: 0.5 },
                y: { duration: 0.5, ease: "easeOut", delay: index * 0.1 },
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
