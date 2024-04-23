"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { Heading } from "./heading-global";
import { MediaController } from "media-chrome/dist/react"; 
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { motion } from "framer-motion";

export default function Hero() {
  const words = [
    {
      text: "HOLOGRAPHIC",
      className: "text-gray-100 dark:text-gray-200",
    },
    {
      text: "SOLUTIONS",
      className: "text-gray-100 dark:text-gray-200",
    },
  ];
  return (
    <div className="h-screen relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <div className="absolute object-cover w-screen h-[100%]">
        <MediaController>
          <video
            className="hidden md:block"
            slot="media"
            src="/videos/tl2.mp4"
            preload="auto"
            muted
            crossOrigin=""
            autoPlay
            loop
          />
          <video
            className="block md:hidden"
            slot="media"
            src="/videos/tl2-mobile.mp4"
            preload="auto"
            muted
            crossOrigin=""
            autoPlay
            loop
          />
        </MediaController>
      </div>
      <Boxes />

      <motion.div 
        initial={{ opacity: 0.2, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          ease: "linear",
        }} 
        className="z-20"
      >
        <Heading
          asChild={true}
          fontstyle="black"
          variant="gradient"
          size="xxl"
          className="uppercase z-20"
        >
          <h1>Toadlabs</h1> 
        </Heading>
      </motion.div> 
      <div className="z-20">
        <TypewriterEffectSmooth words={words} />
      </div>
    </div>
  );
}
