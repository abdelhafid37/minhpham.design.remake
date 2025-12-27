import { useEffect, useState } from "react";
export default function useMouse() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    function whileMoving(event) {
      const { clientX: x, clientY: y } = event;
      setMouse({ x, y });
    }
    window.addEventListener("mousemove", whileMoving);
    return () => window.removeEventListener("mousemove", whileMoving);
  }, []);
  return mouse;
}
