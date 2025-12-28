import { navigation } from "../../content";
import Audio from "../../utils/animations/Audio";
import Magnet from "../../utils/animations/Magnet";

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
      <Audio />
    </footer>
  );
}
