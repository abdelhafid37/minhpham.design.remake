import { Dribbble, Instagram, Linkedin, Youtube } from "./components/common/icons";

export const navigation = {
  menu: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
  socials: [
    {
      Icon: Dribbble,
      href: "http://facebook.com/",
    },
    {
      Icon: Instagram,
      href: "http://instagram.com/",
    },
    {
      Icon: Youtube,
      href: "http://youtube.com/",
    },
    {
      Icon: Linkedin,
      href: "http://linkedin.com/",
    },
  ],
  sound: {
    on: "On",
    off: "Off",
    label: "Sound",
  },
};
