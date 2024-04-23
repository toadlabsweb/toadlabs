import { cn } from "@/lib/utils";

export default function SvgIcon({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
    <div className={cn("h-8 w-8 bg-gray-300", className)} dangerouslySetInnerHTML={{ __html: `${children}` }} />
 

      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className={cn("h-8 w-8 bg-gray-300", className)}
      >
        {children}
      </svg> */}

      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path stroke="none" d="M0 0h24v24H0z"></path>
        <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2zm4 5v5m0-8v.01M12 16v-5"></path>
        <path d="M16 16v-3a2 2 0 00-4 0"></path>
      </svg> */}
    </>
  );
}
