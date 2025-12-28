import { useRef } from "react";
import { navigation } from "../../content";
import Flip from "../../utils/animations/Flip";
import Magnet from "../../utils/animations/Magnet";
import { Logo } from "../common/icons";
import useObserver from "../../hooks/useObserver";

export default function Header() {
  const linksRef = useRef([]);
  const { activeId } = useObserver();

  return (
    <header className="fixed top-0 left-0">
      <div className="fixed top-[7.2vh] left-[4vw]">
        <Magnet>
          <a href="/">
            <Logo className="size-12" />
          </a>
        </Magnet>
      </div>
      <div className="fixed top-[7.2vh] right-[4vw]">
        <ul className="flex flex-col items-end justify-center gap-3">
          {navigation.menu.map(({ href, label }, index) => (
            <li
              key={index}
              ref={element => (linksRef.current[index] = element)}
            >
              <a href={href}>
                <Flip isActive={index == 0}>{label}</Flip>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
