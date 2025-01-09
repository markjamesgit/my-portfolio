import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Profile from "../assets/profile.jpg";
import Resume from "../assets/Villagonzalo_Mark_James_S..pdf";
const Home = () => {
  const textArray = [
    "Ciao, sono Mark James!",
    "Bonjour, je suis Mark James!",
    "Hola, soy Mark James!",
    "Hello there, I'm Mark James!",
    "Kumusta, ako si Mark James!",
  ];
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const typingSpeed = 200;
  const deletingSpeed = 100;
  const delay = 2000;

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        if (charIndex < textArray[index].length) {
          setCurrentText((prev) => prev + textArray[index][charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        if (charIndex > 0) {
          setCurrentText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % textArray.length);
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index, textArray]);

  return (
    <section id="home" className="bg-background py-16 md:py-24 mt-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          {/* Profile Section (with new transition) */}
          <motion.div
            className="w-full mb-8 md:w-1/2 md:mb-0 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <img
              src={Profile}
              alt="Profile"
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] rounded-full border-4 border-accent shadow-lg object-cover"
            />
          </motion.div>

          {/* Text Section (with staggered animation) */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
          >
            <motion.p
              className="text-lg md:text-2xl font-medium text-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {currentText}
            </motion.p>
            <motion.h1
              className="text-3xl md:text-5xl font-extrabold text-accent mt-4 md:mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Front-End Developer / Web Designer
            </motion.h1>
            <div className="mt-8">
              <motion.a
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-6 py-3 text-lg text-white bg-accent hover:bg-secondary rounded-md transition duration-300 ease-in-out shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <FaFileDownload className="mr-2" />
                Download Resume
              </motion.a>
            </div>

            {/* Social Media Icons with hover scale animation */}
            <div className="flex justify-center md:justify-start mt-8 space-x-6">
              {[
                { href: "https://github.com/markjamesgit", icon: <FaGithub /> },
                {
                  href: "https://www.facebook.com/mark.james",
                  icon: <FaFacebookF />,
                },
                {
                  href: "https://www.instagram.com/_mrkjmsv",
                  icon: <FaInstagram />,
                },
                {
                  href: "mailto:markjames.villagonzalo06@gmail.com",
                  icon: <FaEnvelope />,
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-3xl md:text-4xl text-accent hover:text-secondary transition duration-300 ease-in-out"
                  whileHover={{ scale: 1.2 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
