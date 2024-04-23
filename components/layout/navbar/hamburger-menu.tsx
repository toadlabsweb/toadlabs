import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";
import { IconMenu } from "@tabler/icons-react";
import Link from "next/link";
import { options } from "#site/content";

export default function HamburgerMenu() {
  return (
    <div className="block md:hidden">
      <Sheet>
        <SheetTrigger className="fixed right-4 top-4 z-30">
          <IconMenu className="h-8 w-8" />
        </SheetTrigger>
        <SheetContent>
          <ThemeToggle />
          <div className="flex flex-col items-center space-y-10 mt-10">
            {options.links.map((navItem: any, idx: number) => (
              <Link
                key={idx}
                href={navItem.link}
                className={cn("dark:text-neutral-50 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500")}>
                <SheetClose> {navItem.name}</SheetClose> 
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
