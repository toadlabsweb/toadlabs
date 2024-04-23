import Bounded from "@/components/styled/bounded";
import ContactDetails from "@/components/static-details/contact-details";
import { Form } from "@/components/styled/form";
import { Heading } from "@/components/styled/heading-global";
import SocialLinks from "@/components/static-details/social-links";
import { options } from "#site/content";
import { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: "/images/icon.ico",
  },
  title: `Contact | ${options.name}`,
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
}

export default function Contact() {
  return (
    <Bounded width="marginxy">
      <div className="text-center mb-10">
        <Heading
          size="xl"
          fontstyle="black"
          variant="gradient"
          className="uppercase"
        >
          Contact
        </Heading>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-10">
          <ContactDetails />
          <SocialLinks />
        </div>
        <Form />
      </div>
    </Bounded>
  );
}
