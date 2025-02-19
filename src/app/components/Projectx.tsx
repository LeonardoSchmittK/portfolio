import React, { Key, ReactNode, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { robotoWeighed, robotoLight } from "../utils/font";
import { useState } from "react";
import { Url } from "next/dist/shared/lib/router/router";
import { UrlObject } from "url";
import {
  FaLinkedin,
  FaGithubSquare,
  FaJava,
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaSass,
} from "react-icons/fa";
import { motion, Variants } from "framer-motion";
import { IconType } from "react-icons";

const cardVariants: Variants = {
  offscreen: {
    y: 5000 / 4,
  },
  onscreen: {
    y: 0,
    transition: { type: "spring", duration: 0.5, damping: 10 },
  },
  normal: {
    height: "100px", // Initial height
    transition: { type: "spring", duration: 2 },
  },
  appear: {
    y: 500,
  },
};

type dataType = {
  title: string;
  description: string;
  stack: string[];
  image: string;
  gitHub: UrlObject;
  icons: ReactNode[];
  link?: UrlObject;
};

function Projectx({ data, delay }: { data: dataType; delay: number }) {
  const [toggleHeight, setToggleHeight] = useState(true);
  const ref = useRef<HTMLInputElement | null>(null);

  const [isGrayscale, setIsGrayscale] = useState(true);
  const title = data.title;
  const description = data.description;
  const imageSrc = data.image;
  const gitHub = data.gitHub;
  const stackIcons = data.icons;
  const link = data.link;

  function animate() {
    const targetHeight = window.innerHeight;

    if (ref.current) {
      let currentHeight = ref.current.clientHeight;
      currentHeight += 30;

      if (currentHeight <= targetHeight) {
        ref.current.style.height = currentHeight + "px";
        requestAnimationFrame(animate);
      }
    }
  }

  function handleClick() {
    if (ref.current) {
      setToggleHeight(!toggleHeight);
      console.log(toggleHeight);

      if (toggleHeight) {
        const targetHeight = window.innerHeight;
        let currentHeight = ref.current.clientHeight;

        animate();
      }

      if (!toggleHeight) {
        const targetHeight = window.innerHeight;
        let currentHeight = Number.parseInt(ref.current.style.height);

        animateBack(); // Start the animation
      }
    }
  }

  function animateBack() {
    if (ref.current) {
      const targetHeight = window.innerHeight;

      let currentHeight = ref.current.clientHeight;

      currentHeight -= 30;

      if (currentHeight >= 96) {
        ref.current.style.height = currentHeight + "px";
        requestAnimationFrame(animateBack);
      }
    }
  }

  function handleClickSection(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  return (
    <motion.div
      className={`text-white h-24 flex mt-5 p-4 focus:outline-none transition bg-cover overflow-hidden relative rounded-md ${
        toggleHeight ? "cursor-pointer" : "cursor-auto"
      }`}
      onMouseEnter={() => setIsGrayscale(false)}
      onMouseOut={() => setIsGrayscale(true)}
      ref={ref}
      initial="offscreen"
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: delay / 10,
        type: "spring",
        damping: 10,
      }}
      variants={cardVariants}
      onClick={handleClick}
    >
      <motion.section
        className=" p-2 flex flex-col rounded-sm "
        onClick={(e: React.MouseEvent) => handleClickSection(e)}
      >
        <h1
              onMouseEnter={() => setIsGrayscale(false)}
              onMouseOut={() => setIsGrayscale(true)}
              onClick={handleClick}
        className={`${robotoWeighed.className} text-4xl`}>{title}</h1>
        <p 
              onMouseEnter={() => setIsGrayscale(false)}
              onMouseOut={() => setIsGrayscale(true)}
              onClick={handleClick}
        className="opacity-40">{description}</p>
        <div
              onMouseEnter={() => setIsGrayscale(false)}
              onMouseOut={() => setIsGrayscale(true)}
              onClick={handleClick}
        className="flex flex-row gap-1 pt-4">
          {link && (
            <button
              className={`px-3 py-1 h-8 mt-0.5 border-b-2 border-slate-500 rounded-sm ${robotoWeighed.className} bg-gray-200 text-slate-800 hover:scale-105 transition`}
            >
              {" "}
              <Link href={link}> Try it out </Link>
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
            {stackIcons.map((icon: ReactNode, key: Key) => {
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
