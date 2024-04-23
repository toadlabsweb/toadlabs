import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import React from "react";

const headingVariants = cva("text-primary tracking-wider font-sans", {
  variants: {
    variant: {
      default: " ",
      pagetitle: " ",
      cardtitle: "font-semibold leading-none tracking-tight",
      gradient:
        "inline-block bg-clip-text text-transparent bg-[linear-gradient(266deg,rgba(0,167,231,1)25%,rgba(118,226,68,1)50%,rgba(241,228,0,1)75%,rgba(255,0,0,1)100%)]",
    },
    size: {
      xxxl: "text-6xl md:text-9xl", 
      xxl: "text-5xl md:text-8xl",
      xl: "text-4xl md:text-7xl",
      lg: "text-3xl md:text-5xl",
      md: "text-2xl md:text-4xl",
      sm: "text-xl md:text-2xl",
      xs: "text-md md:text-lg",
    },
    fontstyle: {
      black: "font-black",
      bold: "font-bold",
      semibold: "font-semibold",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "lg",
    fontstyle: "bold",
  },
});

export interface HeadingProps
  extends React.ButtonHTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  asChild?: boolean;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      children,
      className,
      variant,
      size,
      fontstyle,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "h2";
    return (
      <Comp
        className={cn(headingVariants( { variant, size, fontstyle, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Heading.displayName = "Heading";

export { Heading, headingVariants };
