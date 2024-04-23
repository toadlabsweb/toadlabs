import {Heading} from "@/components/styled/heading-global"; 
import { IconMapPin, IconPhone, IconMail } from "@tabler/icons-react";
import Link from "next/link"; 

export const items = [
  {
    text: [
      "#23, Muninarayanappa Complex,",
      "Bagaluru Main Road, Kothnur,",
      "New Airport Road",
      "Bengaluru- 560077 KA, India",
    ],
    link: "",
    icon: <IconMapPin stroke={1} className="address-icon mr-3" />,
  },
  {
    text: ["91 600 146 8694"],
    link: "tel:+916001468694",
    icon: <IconPhone stroke={1} className="address-icon mr-3" />,
  },
  {
    text: ["toadlabs@gmail.com"],
    link: "mailto:toadlabs@gmail.com",
    icon: <IconMail stroke={1} className="address-icon mr-3" />,
  },
];

export default function ContactDetails() {
  return (
    <div>
    <Heading size="md" className="mb-5">Toadlabs</Heading> 
      <div className="relative z-10 space-y-5">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.link!}
            className="w-fit flex hover:text-gray-500 transition-all duration-200 ease-linear"
            title={item.link}
          >
            {item.icon}
            <div className="">
              {item.text.map((item, index) => (
                <p className="text-left" key={index}>
                  {" "}
                  {item}{" "}
                </p>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
