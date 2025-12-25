import React from "react";
import { navigation } from "../../content";

export default function Header() {
  return (
    <header className="fixed top-0 left-0">
      <div className="fixed top-[7.2vh] left-[4vw]">
        <a href="/">
          <svg
            className="size-12"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M53.4123 56.0001C59.9131 50.12 64 41.602 64 32.1258C64 14.3832 49.6731 0 32 0C14.3269 0 0 14.3832 0 32.1258C0 41.2108 3.75642 49.4151 9.79504 55.2585L21.5957 13.0511L27.5053 25.8028H31.5H35.4947L41.4043 13.0511L53.4123 56.0001Z"
              fill="#B7AB98"
            />
            <ellipse
              cx="26.1333"
              cy="37.4132"
              rx="2.13333"
              ry="2.14172"
              fill="#B7AB98"
            />
            <ellipse
              cx="37.1333"
              cy="37.4132"
              rx="2.13333"
              ry="2.14172"
              fill="#B7AB98"
            />
          </svg>
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
