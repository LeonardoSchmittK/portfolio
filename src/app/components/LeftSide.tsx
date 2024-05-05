import React from "react";
import PhotoProfile from "./PhotoProfile";
import { FaLinkedin, FaGithubSquare, FaJava, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiSpringboot } from "react-icons/si";
import Link from "next/link";
import { robotoWeighed, robotoLight } from "./font";
const LeftSide = () => {
  return (
    <div className="w-1/3 bg-gray-800 text-gray-50 h-screen flex items-center justify-center ">
      <section>
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
      </section>
    </div>
  );
};

export default LeftSide;
