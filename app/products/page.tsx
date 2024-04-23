import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/styled/heading-global";
import Bounded from "@/components/styled/bounded";
import {
  BASE_PATH,
  SITE_TITLE,
  SITE_DESC,
  SITE_KEYWORDS,
} from "@/lib/constants";
import { products } from "#site/content";

export const metadata = {
  icons: {
    icon: "/images/favicon.png",
  },
  title: `Products | ${SITE_TITLE}`,
  description: `${SITE_DESC}`,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: `${SITE_KEYWORDS}`,
  authors: [{ name: "Rajat Bangia" }],
  creator: "Rajat Bangia",
  publisher: "Rajat Bangia",
  metadataBase: new URL(`${BASE_PATH}`),
  alternates: {
    canonical: "/",
  },
};

export default function ProductsPage() {
  const publishedProducts = products.filter((product) => product.published);
  const filteredProducts = publishedProducts.sort((product1, product2) =>
    product1.weight > product2.weight ? 1 : -1
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
          Products
        </Heading>
      </div>
      {filteredProducts?.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {filteredProducts?.map((product) => (
            <Link href={product.slug} key={product.title}>
              <BackgroundGradient className="rounded-[22px] max-w-lg p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <Image
                  src={product.image!}
                  alt={product.title}
                  height="600"
                  width="600"
                  className="object-contain"
                />
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {product.title}
                </p>

                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {product.subtitle}
                </p>
                <Button className="mt-3 "> Learn more </Button>
              </BackgroundGradient>
            </Link>
          ))}
        </div>
      ) : (
        <p> No Products yet!</p>
      )}
    </Bounded>
  );
}
