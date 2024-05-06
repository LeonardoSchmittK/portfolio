"use client";

import React, { useRef, useState } from "react";
import projects from "./projectsObject.js";
import Projectx from "./Projectx.tsx";

function Projects() {
  const ref = useRef(null);

  return (
    <div className="flex-1 h-screen overflow-scroll hide-scrollbar pb-5 px-2 md:px-0">
      {projects.map((image, id) => (
        <div key={id} ref={ref}>
          <Projectx data={projects[id]} delay={id} />
        </div>
      ))}
    </div>
  );
}

export default Projects;
