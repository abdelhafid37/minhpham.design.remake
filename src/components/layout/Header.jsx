import { navigation } from "../../content";
import { Magnet } from "../../utils/animations/Magnet";
import { Logo } from "../common/icons";

export default function Header() {
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
        <ul className="flex flex-col items-end justify-center gap-1">
          {navigation.menu.map(link => (
            <li key={link.label}>
              <a href={link.href}>
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
