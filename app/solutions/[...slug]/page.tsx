import Bounded from "@/components/styled/bounded"; 
import YouTubeCard from "@/components/styled/youtube-card";
import {Heading} from "@/components/styled/heading-global";
import { P } from "@/components/styled-tags/p";
import { MDXContent } from "@/components/mdx-components";
import { notFound } from "next/navigation"; 
import { Metadata } from "next"; 
import { solutions } from "#site/content"; 

interface SolutionPageProps {
  params: {
    slug: string[];
  };
}

async function getSolutionFromParams(params: SolutionPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = solutions.find((solution) => solution.slugAsParams === slug);

  return post;
}

export async function generateMetadata({
  params,
}: SolutionPageProps): Promise<Metadata> {
  const solution = await getSolutionFromParams(params);

  if (!solution) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", solution.title);

  return {
    title: solution.title,
    description: solution.description,
    // authors: { name: siteConfig.author },
    openGraph: {
      title: solution.title,
      description: solution.description,
      type: "article",
      url: solution.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: solution.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: solution.title,
      description: solution.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

export async function generateStaticParams(): Promise<
SolutionPageProps["params"][]
> {
  return solutions.map((solution) => ({ slug: solution.slugAsParams.split("/") }));
}

export default async function SolutionsPage({ params }: SolutionPageProps) {
  const solution = await getSolutionFromParams(params);

  if (!solution || !solution.published) {
    notFound();
  }

  return (
    <Bounded width="marginxy">
      <div className="mx-auto text-center mb-5">
      <Heading size="xl" variant='gradient'>{solution.title}</Heading>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
          <YouTubeCard
          youtubeID={solution.youtubeID!}
          title={solution.title}
          classname="w-full"
          image={solution.image!}
        />
        <div>
          
          <Heading size="sm" className="mb-5"> 
            {solution.subtitle}
          </Heading>
          <P>{solution.description}</P>
          {/* <div className="mt-5 prose">{content}</div> */}
          <MDXContent code={solution.body} />
        </div>
      </div>
    </Bounded>
  );
}; 
