import { P } from "@/components/styled-tags/p";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading } from "@/components/styled/heading-global";
import Bounded from "@/components/styled/bounded";
import { options } from "#site/content";
import { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: "/images/icon.ico",
  },
  title: `About Us | ${options.name}`,
  description: options.description,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: options.keywords,
  authors: [{ name: "Rajat Bangia" }],
  creator: "Rajat Bangia",
  publisher: "Rajat Bangia",
  // metadataBase: options.basepath,
  alternates: {
    canonical: "/",
  },
};

export default function About() {
  return (
    <>
      <Bounded width="marginxy">
        <div className="text-center mb-10">
          <Heading
            size="xl"
            fontstyle="black"
            variant="gradient"
            className="uppercase"
          >
            {options.about.title}
          </Heading>
        </div>
        <Card className="relative w-full md:w-2/3 lg:w-1/2 mx-auto p-5">
          <CardHeader>
            <Heading size="sm" variant="cardtitle" className="uppercase">
              {options.about.title}
            </Heading>
          </CardHeader>

          <CardContent className="text-justify">
            {options.about.text.map((item: any, index: number) => (
              <P key={index} className="indent-8 mb-5 ">
                {item}{" "}
              </P>
            ))}
          </CardContent>
        </Card>
      </Bounded>
    </>
  );
}
