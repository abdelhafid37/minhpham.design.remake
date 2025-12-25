import React from "react";
import { navigation } from "../../content";

const { socials, sound } = navigation;

export default function Footer() {
  return (
    <footer>
      <ul className="block space-y-9 fixed left-[4vw] bottom-[11vh]">
        {socials.map(({ Icon, href }) => (
          <li key={href}>
            <a href={href}>{Icon && <Icon className="size-6" />}</a>
          </li>
        ))}
      </ul>
      <button className="uppercase fixed right-[4vw] bottom-[11vh] -rotate-90 origin-bottom-left translate-x-full space-x-1">
        <span className="text-ui-gray hover:text-ui-white transition-colors duration-300">{sound.label}</span>
        <span>
          <span>{sound.on}</span>
          <span>{sound.off}</span>
        </span>
      </button>
    </footer>
  );
}
