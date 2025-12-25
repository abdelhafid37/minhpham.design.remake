import React from "react";
import { navigation } from "../../content";
import { Logo } from "../../utils/icons";

export default function Header() {
  return (
    <header className="fixed top-0 left-0">
      <div className="fixed top-[7.2vh] left-[4vw]">
        <a href="/">
          <Logo className="size-12" />
        </a>
      </div>
      <div className="fixed top-[7.2vh] right-[4vw]">
        <ul className="flex flex-col items-end justify-center gap-1">
          {navigation.menu.map(link => (
            <li>
              <a
                href={link.href}
                key={link.label}
              >
                <span>
                  <span>{link.label}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
