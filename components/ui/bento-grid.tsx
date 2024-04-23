import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./button";
import Link from "next/link";
import { Heading } from "../styled/heading-global";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-1 grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  subtitle,
  description,
  href,
  image,
}: {
  className?: string;
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  description?: string | React.ReactNode;
  image: string;
  href: string;
}) => {
  return (
    <div
      className={cn(
        " mx-auto w-full row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="grid md:grid-cols-5 content-center gap-4 my-auto">
        <Image
          src={image}
          alt="jordans"
          height="480"
          width="480"
          className="md:col-span-2 object-cover rounded-xl "
        />
        <div className="md:col-span-3 group-hover/bento:translate-x-2 transition duration-200">
          <Heading size="sm">{title}</Heading>
          <div className="font-sans font-normal text-neutral-600 text-md dark:text-neutral-300">
            {subtitle}
          </div>
          <Link href={href}>
            <Button className="mt-5" size="sm">
              Learn more
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
