import ReactLenis from "lenis/react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import useResize from "./hooks/useResize";
import ObserverProvider from "./context/ObserverContext";

function App() {
  const isResizing = useResize();

  return (
    <ReactLenis root>
      <ObserverProvider>
        {isResizing && <div className="w-full h-full bg-ui-black fixed z-[100]"></div>}
        <Header />
        <Footer />
        <main className=""></main>
      </ObserverProvider>
    </ReactLenis>
  );
}

export default App;
