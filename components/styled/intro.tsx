import React from "react";
import VideoCard from "./video-card";
import { P } from "../styled-tags/p";
import Bounded from "./bounded";
import { options } from "#site/content";

export default function Intro() {
  return (
    <Bounded width="fluidmy">
      <div className="grid md:grid-cols-2">
        <VideoCard video={options.intro.video} />
        <div className="px-10 grid place-content-center">
          <h2 className="font-bold text-4xl mb-5">{options.intro.title}</h2>
          <P>{options.intro.text}</P>
        </div>
      </div>
    </Bounded>
  );
}
