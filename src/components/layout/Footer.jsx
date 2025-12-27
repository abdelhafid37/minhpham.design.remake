import { navigation } from "../../content";
import { Magnet } from "../../utils/animations/Magnet";

const { socials, sound } = navigation;

export default function Footer() {
  return (
    <footer>
      <ul className="lg:block space-y-9 fixed left-[4vw] bottom-[11vh] hidden">
        {socials.map(({ Icon, href }) => (
          <Magnet key={href}>
            <li>
              <a href={href}>{Icon && <Icon className="size-6" />}</a>
            </li>
          </Magnet>
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
