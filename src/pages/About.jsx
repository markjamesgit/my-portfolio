import React, { useState, useEffect, useRef } from "react";
import { FaUsers, FaPalette } from "react-icons/fa";
import { motion } from "framer-motion"; // Importing framer-motion
import Profile from "../assets/profile2.jpg";

const About = () => {
  const [inView, setInView] = useState(false); // Track if section is in view
  const sectionRef = useRef(null); // Reference to the About section

  // Intersection Observer to trigger animation when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.5, // Trigger animation when 50% of the section is visible
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
    <section
      id="about"
      className="bg-background py-16 md:py-24"
      ref={sectionRef} // Attach ref to the About section
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-12 md:space-x-12 md:space-y-0">
          {/* Left Column - Image Section */}
          <motion.div
            className="w-full md:w-5/12 relative"
            initial={{ opacity: 0, x: -50 }} // Start hidden and off-screen to the left
            animate={{
              opacity: inView ? 1 : 0, // Fade in based on inView state
              x: inView ? 0 : -50, // Slide in from left
            }}
            transition={{
              duration: 1,
              delay: 0.2, // Delay for the image animation
            }}
          >
            <div className="w-full h-full rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-accent to-secondary">
              <motion.img
                src={Profile}
                alt="Profile"
                className="w-full h-[62vh] object-cover transform scale-110 transition-transform duration-500 hover:scale-125"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }} // Hover effect to scale the image
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-center text-white">
              <h3 className="text-2xl font-bold">Mark James</h3>
              <p className="text-sm italic">4th Year IT Student</p>
            </div>
          </motion.div>

          {/* Right Column - Text Section */}
          <motion.div
            className="w-full md:w-7/12 space-y-8"
            initial={{ opacity: 0, y: 50 }} // Start hidden and below the normal position
            animate={{
              opacity: inView ? 1 : 0, // Fade in based on inView state
              y: inView ? 0 : 50, // Slide up to normal position
            }}
            transition={{
              duration: 1,
              delay: 0.4, // Delay for the text section
            }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-accent mb-6">
              About Me
            </h2>

            <motion.p
              className="text-lg md:text-xl text-text leading-relaxed"
              initial={{ opacity: 0, y: 20 }} // Start hidden and below
              animate={{
                opacity: inView ? 1 : 0, // Fade in based on inView state
                y: inView ? 0 : 20, // Slide up to normal position
              }}
              transition={{
                duration: 1,
                delay: 0.6, // Delay for the paragraph
              }}
            >
              Hi, I'm Mark James, a 4th-year IT student at Bulacan State
              University. 21 years old, I'm passionate about coding and design,
              and I'm continuously learning new programming languages and
              frameworks to enhance my skills. My goal is to build impactful
              digital solutions that combine functionality with visually
              appealing interfaces.
            </motion.p>

            {/* Soft Skills and Design Skills Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="p-6 bg-white rounded-lg shadow-md border-2 border-text"
                initial={{ opacity: 0, scale: 0.9 }} // Start hidden and slightly smaller
                animate={{
                  opacity: inView ? 1 : 0, // Fade in based on inView state
                  scale: inView ? 1 : 0.9, // Scale to normal size
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.8, // Delay for soft skills section
                }}
              >
                <h3 className="text-xl font-bold text-text mb-3 flex items-center">
                  <FaUsers className="mr-2" />
                  Soft Skills
                </h3>
                <h4 className="text-lg font-semibold text-text mb-2">
                  Collaboration
                </h4>
                <motion.ul
                  className="list-none pl-4 space-y-2 text-sm text-text"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: inView ? 1 : 0, // Fade in based on inView state
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 1, // Delay for collaboration list
                  }}
                >
                  <li>
                    Strong team player with experience working in Agile teams
                  </li>
                  <li>Ability to receive and act on constructive feedback</li>
                </motion.ul>
              </motion.div>

              <motion.div
                className="p-6 bg-white rounded-lg shadow-md border-2 border-text"
                initial={{ opacity: 0, scale: 0.9 }} // Start hidden and slightly smaller
                animate={{
                  opacity: inView ? 1 : 0, // Fade in based on inView state
                  scale: inView ? 1 : 0.9, // Scale to normal size
                }}
                transition={{
                  duration: 0.8,
                  delay: 1.2, // Delay for adaptability list
                }}
              >
                <h3 className="text-xl font-bold text-text mb-3 flex items-center">
                  <FaPalette className="mr-2" />
                  Design Skills
                </h3>
                <h4 className="text-lg font-semibold text-text mb-2">
                  Design Principles
                </h4>
                <motion.ul
                  className="list-none pl-4 space-y-2 text-sm text-text"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: inView ? 1 : 0, // Fade in based on inView state
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 1.4, // Delay for design list
                  }}
                >
                  <li>Proficient in Figma and design principles</li>
                  <li>Responsive Design and Design Systems</li>
                  <li>Prototyping and Design Collaboration</li>
                </motion.ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;