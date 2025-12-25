import ReactLenis from "lenis/react";
import Header from "./components/layout/Header";
import { useEffect, useState } from "react";

function App() {
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

  return (
    <ReactLenis root>
      {isResizing && <div className="w-full h-full bg-ui-black fixed z-[100]"></div>}
      <Header />
      <main className=""></main>
    </ReactLenis>
  );
}

export default App;
