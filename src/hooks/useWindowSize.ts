import { useEffect, useState } from "react";

const getWindowSize = () => {
  const { innerWidth: windowWidth, innerHeight: windowHeight } = window;
  return { windowWidth, windowHeight };
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getWindowSize());
    };

    const handleOrientationChange = () => {
      setWindowSize(getWindowSize());
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);

  return windowSize;
};
