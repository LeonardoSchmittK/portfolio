import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { robotoWeighed, robotoLight } from "./font";
import { useState } from "react";
import { IoLogoJavascript } from "react-icons/io5";
import {
  FaLinkedin,
  FaGithubSquare,
  FaJava,
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaSass,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { motion, Variants } from "framer-motion";

interface Props {
  emoji: string;
  hueA: number;
  hueB: number;
}

const cardVariants: Variants = {
  offscreen: {
    y: window.innerHeight / 4,
  },
  onscreen: {
    y: 0,
    transition: { type: "spring", duration: 0.5, damping: 10 },
  },
  normal: {
    height: "100px", // Initial height
    transition: { type: "spring", duration: 2 },
  },
};

function Projectx({ data }) {
  const [toggleHeight, setToggleHeight] = useState(true);
  const ref = useRef(null);
  const [isGrayscale, setIsGrayscale] = useState(true);
  const title = data.title;
  const description = data.description;
  const imageSrc = data.image;
  const stack = data.stack;
  const gitHub = data.gitHub;
  const stackIcons = data.icons;

  function handleClick() {
    setToggleHeight(!toggleHeight);
    console.log(toggleHeight);

    if (toggleHeight) {
      const targetHeight = window.innerHeight;
      let currentHeight = ref.current.clientHeight; // Get the current height of the element

      // Define an animation function
      function animate() {
        currentHeight += 30; // Increment the height by 1 pixel

        if (currentHeight <= targetHeight) {
          // If the current height is less than or equal to the target height
          ref.current.style.height = currentHeight + "px"; // Update the element's height
          requestAnimationFrame(animate); // Call animate recursively
        }
      }

      animate(); // Start the animation
    }

    if (!toggleHeight) {
      const targetHeight = window.innerHeight;
      let currentHeight = Number.parseInt(ref.current.style.height); // Get the current height of the element

      // Define an animation function
      function animateBack() {
        currentHeight -= 30; // Increment the height by 1 pixel

        if (currentHeight >= 96) {
          // If the current height is less than or equal to the target height
          ref.current.style.height = currentHeight + "px"; // Update the element's height
          requestAnimationFrame(animateBack); // Call animate recursively
        }
      }

      animateBack(); // Start the animation
    }
  }

  function handleClickSection(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  return (
    <motion.div
      className={`text-white h-24 flex items-top justify-start mt-5 p-4 focus:outline-none transition bg-cover overflow-hidden relative rounded-md ${
        toggleHeight ? "cursor-pointer" : "cursor-auto"
      }`}
      onMouseEnter={() => setIsGrayscale(false)}
      onMouseOut={() => setIsGrayscale(true)}
      ref={ref}
      // initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.01 }}
      variants={cardVariants}
      onClick={handleClick}
    >
      <motion.section
        className=" p-2 flex flex-col rounded-sm "
        onClick={(e) => handleClickSection(e)}
      >
        <h1 className={`${robotoWeighed.className} text-4xl`}>{title}</h1>
        <p className="opacity-40">{description}</p>
        <div className="flex flex-row gap-1 pt-4">
          {data.link && (
            <button
              className={`px-3 py-1 h-8 mt-0.5 rounded-sm ${robotoWeighed.className} bg-gray-200 text-slate-800 hover:scale-105 transition`}
            >
              {" "}
              Try it out{" "}
            </button>
          )}

          <Link href={gitHub}>
            <div>
              <FaGithubSquare
                size={36}
                className="opacity-70 hover:opacity-100 transition"
              />
            </div>
          </Link>
        </div>
        <div className="flex-1 flex  flex-col justify-end align-middle ">
          <div className="flex flex-row gap-4">
            {stackIcons.map((icon, key) => {
              return <div key={key}>{icon}</div>;
            })}
          </div>
        </div>
      </motion.section>
      <Image
        src={imageSrc}
        alt={`${title} photo`}
        layout="fill"
        objectFit="cover"
        className={`opacity-30 pointer-events-none ${
          isGrayscale ? "grayscale" : "grayscale-0"
        } transition`}
      />
    </motion.div>
  );
}

export default Projectx;
