import React from "react";
import DesktopMenu from "./desktop-menu";
import HamburgerMenu from "./hamburger-menu";
import Logo from "../../static-details/logo";
import Link from "next/link";

export default function MainMenu() {
  return (
    <>
      <Link href="/">
        <Logo className="fixed top-4 left-4 w-20 h-20 z-30" />
      </Link>
      <DesktopMenu />
      <HamburgerMenu />
    </>
  );
}
