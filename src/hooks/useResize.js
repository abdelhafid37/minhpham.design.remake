import { useEffect, useState } from "react";

export default function useResize() {
  const [isResizing, setIsResizing] = useState(false);

  useEffect(() => {
    function onResize() {
      setIsResizing(true);
      setTimeout(() => setIsResizing(false), 500);
    }

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [isResizing]);

  return isResizing;
}
