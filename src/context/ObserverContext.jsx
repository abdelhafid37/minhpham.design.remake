/* eslint-disable react-hooks/refs */
/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect, useRef } from "react";
import { createContext } from "react";

export const ObserverContext = createContext(undefined);

export default function ObserverProvider({ children }) {
  const [activeId, setActiveId] = useState("");
  const observeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setActiveId(entry.target.id);
      });
    });

    observeRef.current = element => observer.observe(element);

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return <ObserverContext.Provider value={{ activeId, observe: observeRef.current }}>{children}</ObserverContext.Provider>;
}
