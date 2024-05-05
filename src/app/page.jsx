"use client";
import { useEffect, useRef } from "react";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

export default function Home() {
  return (
    <main className="w-full h-screen bg-slate-700 fixed">
      <div className="flex flex-row ">
        <LeftSide />
        <RightSide />
      </div>
      <p className="w-20 h-40">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        culpa fugiat ducimus temporibus ipsa aspernatur pariatur dolorum
        delectus, voluptates nihil.
      </p>
    </main>
  );
}
