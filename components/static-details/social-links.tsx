import {Heading} from "@/components/styled/heading-global"; 
import {
  IconBrandFacebook,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import Link from "next/link"; 

export const items = [
  {
    title: "Facebook",
    link: "https://www.facebook.com/toadlabs",
    icon: <IconBrandFacebook stroke={1} className="w-10 h-10" />,
  },
  {
    title: "Youtube",
    link: "https://www.youtube.com/channel/UCOpRzSwbHON9NGsmvr2yjoA",
    icon: <IconBrandYoutube stroke={1} className="w-10 h-10" />,
  },

  {
    title: "Instagram",
    link: "https://www.instagram.com/toadlabs_technology_inc/",
    icon: <IconBrandInstagram stroke={1} className="w-10 h-10" />,
  },

  {
    title: "aedin",
    link: "https://www.aedin.com/in/toadlabs-technology-inc-376593226/",
    icon: <IconBrandLinkedin stroke={1} className="w-10 h-10" />,
  },
];

export default function SocialLinks() { 
  return (
    <div>
    <Heading size="md" className="mb-5">Follow us on</Heading> 
      <div className="relative z-10 flex justify-start space-x-5">
        {items.map((item, index) => (
          <p key={index} className="w-fit">
            <Link
              className="hover:text-gray-500 transition-all duration-200 ease-linear"
              data-bs-toggle="tooltip"
              title={item.title}
              href={item.link!}
              target="_blank"
            > 

              {item.icon}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
}
