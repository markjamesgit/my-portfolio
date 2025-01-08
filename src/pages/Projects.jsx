import React from "react";
import ProjectCard from "../components/ProjectCard";
import GrabRescue from "../assets/grab-rescue.png";
import BhenzMark from "../assets/bhenzmark.png";
import ReactPic from "../assets/reactjs.webp";
import Tailwind from "../assets/tailwind.png";
import NodePic from "../assets/node.png";
import Express from "../assets/exp.webp";
import Postgre from "../assets/postgresql.webp";
import Firebase from "../assets/firebase.png";
import Jquery from "../assets/jquery.png";
import Php from "../assets/php.png";
import MySql from "../assets/mysql.png";
import Kapelicious from "../assets/kapelicious.png";
import Mapbox from "../assets/mapbox.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title:
        "GRAB RESCUE: EMPOWERING EMERGENCY RESPONSE WITH GPS-DRIVEN RESCUE MANAGEMENT",
      description:
        "Grab Rescue addresses these limitations by leveraging real-time GPS tracking, automated notifications, and streamlined workflows. The system connects citizens in emergencies with trained rescuers, providing a faster, more efficient, and notably user-friendly solution for handling emergency requests.",
      image: GrabRescue,
      link: "https://grab-rescue.onrender.com/",
      languages: [
        {
          name: "React",
          logo: ReactPic,
        },
        {
          name: "Tailwind CSS",
          logo: Tailwind,
        },
        {
          name: "Node.js",
          logo: NodePic,
        },
        {
          name: "Express.js",
          logo: Express,
        },
        {
          name: "PostgreSQL",
          logo: Postgre,
        },
        {
          name: "Firebase",
          logo: Firebase,
        },
        {
          name: "MapBox API",
          logo: Mapbox,
        },
      ],
    },
    {
      id: 2,
      title: "BhenzMark: E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with payment integration. It allows the user to add, edit, update and display products. The platform also includes features for managing accounts, reports and can view the top selling items.",
      image: BhenzMark,
      link: "https://github.com/rijin0408/BhenzMhark_Project",
      languages: [
        {
          name: "MySQL",
          logo: MySql,
        },
        {
          name: "PHP",
          logo: Php,
        },
        {
          name: "JQuery",
          logo: Jquery,
        },
      ],
    },
    {
      id: 3,
      title: "Kapelicious: Online Coffee Management System",
      description:
        "An online coffee management system that allows the user to manage orders, customers and products. The system also includes features for managing accounts and reports.",
      image: Kapelicious,
      link: "https://github.com/markjamesgit/Kapelicious",
      languages: [
        {
          name: "MySQL",
          logo: MySql,
        },
        {
          name: "PHP",
          logo: Php,
        },
        {
          name: "JQuery",
          logo: Jquery,
        },
      ],
    },
  ];

  return (
    <section id="projects" className="py-10 bg-background">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-5xl font-bold text-accent text-center mb-12">
          Projects
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              languages={project.languages}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
