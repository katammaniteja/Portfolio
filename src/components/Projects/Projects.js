import React, { useState } from "react";
import data_projects from "./../Data/projects_data";
import ProjectCard from "./ProjectCard";
import "./projects.css";
import { motion } from "framer-motion";

export default function Projects() {
  const [projects, setprojects] = useState(data_projects);
  const [active, setactive] = useState("all");

  const HandleFilter = (name) => {
    setprojects(
      data_projects.filter((project) => {
        return project.category.includes(name);
      })
    );
    setactive(name);
  };

  const projects_variant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.9,
      },
    },
  };

  return (
    <motion.div
      className="container projects"
      variants={projects_variant}
      initial="hidden"
      animate="visible"
    >
      <div className="projects-navbar">
        <div
          className={active === "all" && "projects-navbar-active"}
          onClick={() => {
            setprojects(data_projects);
            setactive("all");
          }}
        >
          All
        </div>
        <div
          className={active === "react" && "projects-navbar-active"}
          onClick={() => HandleFilter("react")}
        >
          React
        </div>
        <div
          className={active === "django" && "projects-navbar-active"}
          onClick={() => HandleFilter("django")}
        >
          Django
        </div>
        <div
          className={active === "vanilla" && "projects-navbar-active"}
          onClick={() => HandleFilter("vanilla")}
        >
          Vanilla JS
        </div>
      </div>
      <div className="row">
        {projects.map((project) => {
          return <ProjectCard key={project.name} project={project} />;
        })}
      </div>
    </motion.div>
  );
}
