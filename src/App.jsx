import ReactLenis from "lenis/react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import useResize from "./hooks/useResize";

function App() {
  const isResizing = useResize();

  return (
    <ReactLenis root>
      {isResizing && <div className="w-full h-full bg-ui-black fixed z-[100]"></div>}
      <Header />
      <Footer />
      <main className=""></main>
    </ReactLenis>
  );
}

export default App;
