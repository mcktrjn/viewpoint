import { useEffect, useState } from "react";
import { useWindowSize } from "../hooks";

export const useElementSize = (ref: any, size: "width" | "height") => {
  const { windowWidth } = useWindowSize();
  const [elementSize, setElementSize] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setElementSize(size === "width" ? rect.width : rect.height);
    }
  }, [windowWidth]);

  return elementSize;
};
