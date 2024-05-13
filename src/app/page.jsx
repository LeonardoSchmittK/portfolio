"use client";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

export default function Home() {
  return (
    <main className="w-full md:h-screen bg-slate-700 md:fixed">
      <div className="flex md:flex-row flex-col">
        <LeftSide />
        <RightSide />
      </div>
    </main>
  );
}
