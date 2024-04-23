import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/toadlabslogo.svg"
      alt="Toadlabs logo" 
      className={cn(" ", className)}
      width={220}
      height={220}
    />
  );
}
