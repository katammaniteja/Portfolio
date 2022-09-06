import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import { motion } from "framer-motion";

export default function Navbar() {
  const [active, setactive] = useState("About");
  const url = useLocation();

  useEffect(() => {
    const { pathname } = url;
    if (pathname.endsWith("/")) setactive("About");
    else if (pathname.endsWith("/resume")) setactive("Resume");
    else if (pathname.endsWith("/projects")) setactive("Projects");
  }, [url]);

  const navbar_variant = {
    hidden: {
      y: "-30vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.7,
        type: "spring",
      },
    },
  };

  return (
    <motion.div
      className="navbar"
      variants={navbar_variant}
      initial="hidden"
      animate="visible"
    >
      <div className="navbar-active">{active}</div>
      <div className="navbar-items">
        {active !== "About" && (
          <Link to="/">
            <div className="navbar-item" onClick={() => setactive("About")}>
              About
            </div>
          </Link>
        )}
        {active !== "Resume" && (
          <Link to="/resume">
            <div className="navbar-item" onClick={() => setactive("Resume")}>
              Resume
            </div>
          </Link>
        )}
        {active !== "Projects" && (
          <Link to="/projects">
            <div className="navbar-item" onClick={() => setactive("Projects")}>
              Projects
            </div>
          </Link>
        )}
      </div>
    </motion.div>
  );
}
