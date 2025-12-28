import { useContext } from "react";
import { ObserverContext } from "../context/ObserverContext";

export default function useObserver() {
  const ctx = useContext(ObserverContext);

  if (!ctx) {
    throw new Error("useObserver hook must be used within an ObserverProvider");
  }
  return ctx;
}
