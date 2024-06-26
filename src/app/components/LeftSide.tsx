import React from "react";
import PhotoProfile from "./PhotoProfile";
import { FaLinkedin, FaGithubSquare, FaJava, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiSpringboot } from "react-icons/si";
import Link from "next/link";
import { robotoWeighed, robotoLight } from "../utils/font";
import { motion, animate } from "framer-motion";

const LeftSide = () => {
  return (
    <div className="md:w-1/3 w-full justify-center items-center  text-gray-50 p-5 md:p-0 md:h-screen    md:flex-col flex-row flex md:items-center md:justify-center ">
      <motion.section
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 300 }}
        transition={{
          duration: 1,
          type: "spring",
          damping: 20,
        }}
      >
        <PhotoProfile />
        <h1 className={`text-3xl ${robotoWeighed.className} font-sans`}>
          Leonardo Schmitt
        </h1>
        <p className={`${robotoLight.className} font-sans opacity-30`}>
          Software developer
        </p>
        <div className="icons flex flex-row justify-between pt-2">
          <div className="flex flex-row gap-1">
            <Link href="https://www.linkedin.com/in/leonardo-schmittk/">
              <FaLinkedin size={20} />
            </Link>
            <Link href="https://github.com/LeonardoSchmittK">
              <FaGithubSquare size={20} />
            </Link>
          </div>

          <div className="flex flex-row gap-1">
            <SiSpringboot size={20} className="text-gray-400" />
            <RiJavascriptFill size={20} className="text-gray-400" />
            <FaReact size={20} className="text-gray-400" />
            <FaJava size={20} className="text-gray-400" />
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default LeftSide;
