import React from "react";
import VideoCard from "./video-card";
import Bounded from "./bounded";
import { P } from "../styled-tags/p";
import { options } from "#site/content";

export default function Process() {
  return (
    <Bounded width="fluidmy">
      <div className="grid md:grid-cols-2">
        <div className="px-10">
          <h2 className="font-bold text-4xl mb-5">{options.process.title}</h2>
          <ul>
            {options.process.steps.map((item: any, index: number) => (
              <li className="mb-5" key={index}>
                <h4 className="font-bold text-2xl mb-2">{item.title}</h4>
                <P>{item.text} </P>
              </li>
            ))}
          </ul>
        </div>
        <VideoCard video={options.process.video} />
      </div>
    </Bounded>
  );
}
