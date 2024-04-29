import React from "react";
import "./skills.css";
import html from "/src/assets/html.png"
import css from "/src/assets/css.png"
import javascript from "/src/assets/javascript.png"
import java from "/src/assets/java.png"
import sql from "/src/assets/sql.png" 
import figma from "/src/assets/figma.png"
import blender from "/src/assets/blender.png"
import git1 from "/src/assets/git1.png"

const Skills = () => {
  return (
    <div className="about">
      <img className="aboutme" src="/Icons/side skill.png" alt="" />
      <section className="whoiam">
        <aside className="whoiam1">My Programming Skills</aside>
        <aside className="myself">
          Proficient in Web-technology with a strong understanding of modern
          frontend frameworks like Vite React, Skilled in crafting responsive
          and accessible User Interfaces.
        </aside>
      </section>
      <div className="block2">
        <img src={html} alt="" />
        <img src={css} alt="" />
        <img src={javascript} alt="" />
        <img src={java} alt="" />
        <img src={sql} alt="" />
        <img src={figma} alt="" />
        <img src={blender} alt="" />
        <img src={git1} alt="" />
      </div>
    </div>
  );
};

export default Skills;
