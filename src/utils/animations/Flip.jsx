import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Flip({ children, isActive = false }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const cloneRef = useRef(null);

  useGSAP(() => {
    const container = containerRef.current;
    const text = textRef.current;
    const clone = cloneRef.current;
    if (!container || !text || !clone) return;

    const tl = gsap.timeline({ paused: true, defaults: { ease: "power3.inOut", duration: 0.3 } });

    tl.to(text, { yPercent: -100 }).to(clone, { yPercent: -100 }, "<");

    if (isActive) {
      tl.play();
    }

    function onEnter() {
      tl.play();
    }

    function onLeave() {
      if (!isActive) tl.reverse();
    }

    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);

    return () => {
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
      gsap.killTweensOf(text);
      gsap.killTweensOf(clone);
      tl.kill();
    };
  }, []);

  return (
    <span
      ref={containerRef}
      className="block *:block *:will-change-transform relative overflow-hidden"
      style={{
        lineHeight: 0.93,
      }}
    >
      <span
        ref={textRef}
        className="text-ui-white/50 translate-y-0"
      >
        {children}
      </span>
      <span
        ref={cloneRef}
        className="absolute left-0 top-0 translate-y-full"
      >
        {children}
      </span>
    </span>
  );
}
