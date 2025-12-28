/* eslint-disable react-hooks/refs */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cloneElement, useRef } from "react";

export default function Magnet({ children, influence = 1, response = 0.3 }) {
  const ref = useRef(null);
  const rectRef = useRef({ left: 0, top: 0, width: 0, height: 0 });
  const mouseRef = useRef({
    late: { x: 0, y: 0 },
    current: { x: 0, y: 0 },
  });

  useGSAP(() => {
    const item = ref.current;
    if (!item) return;

    gsap.set(item, { display: "flex", willChange: "transform" });
    const late = mouseRef.current.late;
    const current = mouseRef.current.current;
    const clamp = gsap.utils.clamp;
    const lerp = gsap.utils.interpolate;
    let interactionStarted = false;
    let isTicking = false;

    function animate() {
      late.x = lerp(late.x, current.x, response);
      late.y = lerp(late.y, current.y, response);
      const { x, y } = late;
      gsap.set(item, { x, y });

      const hypot = Math.hypot(x, y);
      const hasLeft = current.x === 0 && current.y === 0;
      if (interactionStarted && hypot < 0.05 && hasLeft) {
        gsap.ticker.remove(animate);
        isTicking = false;
      }
    }

    function onEnter() {
      rectRef.current = item.getBoundingClientRect();
      interactionStarted = true;

      if (!isTicking) {
        gsap.ticker.add(animate);
        isTicking = true;
      }
    }

    function onMove(event) {
      const { clientX, clientY } = event;
      const { left, top, width, height } = rectRef.current;
      current.x = clamp(-width, width, clientX - (left + width / 2)) * influence;
      current.y = clamp(-height, height, clientY - (top + height / 2)) * influence;
    }

    function onLeave() {
      current.x = 0;
      current.y = 0;
      interactionStarted = false;
    }

    item.addEventListener("mouseenter", onEnter);
    item.addEventListener("mousemove", onMove);
    item.addEventListener("mouseleave", onLeave);

    return () => {
      item.removeEventListener("mouseenter", onEnter);
      item.removeEventListener("mousemove", onMove);
      item.removeEventListener("mouseleave", onLeave);
      gsap.ticker.remove(animate);
      gsap.killTweensOf(item);
    };
  }, []);

  return cloneElement(children, { ref });
}
