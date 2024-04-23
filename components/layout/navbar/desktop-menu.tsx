"use client";
import React from "react";
import { FloatingNav } from "../../ui/floating-navbar";
import { options } from "#site/content";

export default function DesktopMenu() { 
  return (
    <div className="relative w-full hidden md:block">
      <FloatingNav navItems={options.links} />
    </div>
  );
}
