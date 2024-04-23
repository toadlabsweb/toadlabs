import { P } from "@/components/styled-tags/p";
import Bounded from "@/components/styled/bounded";
import { Heading } from "@/components/styled/heading-global";
import Image from "next/image";
import { products } from "#site/content"; 
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { MDXContent } from "@/components/mdx-components";


interface ProductPageProps {
  params: {
    slug: string[];
  };
}

async function getProductFromParams(params: ProductPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = products.find((product) => product.slugAsParams === slug);

  return post;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = await getProductFromParams(params);

  if (!product) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", product.title);

  return {
    title: product.title,
    description: product.description,
    // authors: { name: siteConfig.author },
    openGraph: {
      title: product.title,
      description: product.description,
      type: "article",
      url: product.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

export async function generateStaticParams(): Promise<
ProductPageProps["params"][]
> {
  return products.map((product) => ({ slug: product.slugAsParams.split("/") }));
}

export default async function ProductsPage({ params }: ProductPageProps) {
  const product = await getProductFromParams(params);

  if (!product || !product.published) {
    notFound();
  }

  return (
    <Bounded width="marginxy">
      <div className="mx-auto text-center mb-5">
        <Heading size="xl" variant="gradient">
          {product.title}
        </Heading>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <Image
          src={product.image!}
          alt={product.title}
          width={600}
          height={600}
          className="w-full"
        />
        <div>
          <Heading size="sm" className="mb-5">
            {" "}
            {product.subtitle}
          </Heading>
          <P>{product.description}</P>
          {/* <div className="mt-5 prose">{content}</div> */}
          <MDXContent code={product.body} />
        </div>
      </div>
    </Bounded>
  );
};

// export default Page;

