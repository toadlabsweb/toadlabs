import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

export function SolutionsList({items}: any) {
  return (
    <BentoGrid className="max-w-7xl mx-auto">
      {items.map((item: any, i: number) => (
        <BentoGridItem
          key={i}
          title={item.title}
          subtitle={item.subtitle}
          image={item.image}
          href={item.slug}
        />
      ))}
    </BentoGrid>
  );
}