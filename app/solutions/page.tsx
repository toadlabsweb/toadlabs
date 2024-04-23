import Bounded from "@/components/styled/bounded";
import { SolutionsList } from "@/components/styled/solutions-list";
import { Heading } from "@/components/styled/heading-global";
import { solutions, options } from "#site/content";
import { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: "/images/icon.ico",
  },
  title: `Solutions | ${options.name}`,
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


export default function SolutionsPage() {
  const publishedSolutions = solutions.filter((solution) => solution.published);
  const filteredSolution = publishedSolutions.sort((solution1, solution2) =>
    solution1.weight > solution2.weight ? 1 : -1
  );

  return (
    <Bounded width="marginxy">
      <div className="text-center mb-10">
        <Heading
          size="xl"
          fontstyle="black"
          variant="gradient"
          className="uppercase"
        >
          Solutions
        </Heading>
      </div>
      {filteredSolution?.length > 0 ? (
        <SolutionsList items={filteredSolution} />
      ) : (
        <p>No Solutions yet!</p>
      )}
    </Bounded>
  );
}
