import { useRef } from "react";
import { navigation } from "../../content";
import { useGSAP } from "@gsap/react";

export default function Audio() {
  const { sound } = navigation;

  const buttonRef = useRef(null);
  const onRef = useRef(null);
  const offRef = useRef(null);

  useGSAP(() => {
    const button = buttonRef.current;
    const on = onRef.current;
    const off = offRef.current;
    if (!button || !on || !off) return;

    function onClick() {}

    button.addEventListener("click", onClick);
    return () => {
      button.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className="uppercase fixed right-[4vw] bottom-[11vh] -rotate-90 origin-bottom-left translate-x-full space-x-1 group"
    >
      <span className="text-ui-gray group-hover:text-ui-white transition-colors duration-300">{sound.label}</span>
      <span className="inline-block *:block relative overflow-clip">
        <span ref={onRef}>{sound.on}</span>
        <span
          ref={offRef}
          className="absolute left-0 top-0 translate-y-full"
        >
          {sound.off}
        </span>
      </span>
    </button>
  );
}
