import React from "react";

export default function Copyright() {
  return (
    <>
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent h-[1px] w-full" />
      <p className="py-1 text-muted-foreground text-center text-xs">
        {" "}
        Property of Toadlabs Tecnology Inc© {new Date().getFullYear()}{" "}
      </p>
    </>
  );
}
