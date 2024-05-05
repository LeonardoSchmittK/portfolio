"use client";

import React, { useRef, useState } from "react";
import Projectx from "./Projectx";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Projects() {
  const scrollRef = useRef(null);
  const [upScroll, setUpScroll] = useState(new Array());
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  function handleKeyDown(e) {
    console.log(e.keyCode);

    if (e.keyCode == "38") {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollTop - window.innerHeight + 60,

        left: 0,

        behavior: "smooth",
      });
    }
    if (e.keyCode == "40") {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollTop + window.innerHeight - 60,

        left: 0,

        behavior: "smooth",
      });
    }
  }

  // function handleScroll() {
  //   let newScroll = [...upScroll];

  //   newScroll.push(scrollRef.current.scrollTop);
  //   if (newScroll.length > 2) {
  //     newScroll.length = 2;
  //   }
  //   setUpScroll(newScroll);

  //   console.log(newScroll);

  // }

  return (
    <div
      className="flex-1 h-screen overflow-scroll hide-scrollbar"
      ref={scrollRef}
      onKeyDown={(e) => handleKeyDown(e)}
    >
      {[1, 2, 3, 4, 5].map((image, id) => (
        <div key={id} ref={ref}>
          <Projectx />
        </div>
      ))}
    </div>
  );
}

export default Projects;
