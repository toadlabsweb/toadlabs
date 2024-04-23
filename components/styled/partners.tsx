import { HoverEffect } from "../ui/card-hover-effect";
import { options } from "#site/content";

export default function Partners() {
  return (
    <>
      <section className="my-20">
        <h2 className="text-center font-bold text-4xl">OUR PARTNERS</h2>
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={options.partners} />
        </div>
      </section>
    </>
  );
}
