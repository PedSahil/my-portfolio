import React from "react";
import "./skills.css";

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
        <img src="/src/assets/html.png" alt="" />
        <img src="/src/assets/css.png" alt="" />
        <img src="/src/assets/javascript.png" alt="" />
        <img src="/src/assets/java.png" alt="" />
        <img src="/src/assets/sql.png" alt="" />
        <img src="/src/assets/figma.png" alt="" />
        <img src="/src/assets/blender.png" alt="" />
        <img src="/src/assets/git1.png" alt="" />
      </div>
    </div>
  );
};

export default Skills;
