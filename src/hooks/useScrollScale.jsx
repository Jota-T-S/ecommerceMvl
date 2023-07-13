import { useState, useEffect } from "react";

export const useScrollScale = (minWidth, maxWidth) => {
  const [scale, setScale] = useState(maxWidth);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowWidth = window.innerWidth;
    const maxScroll = document.body.clientHeight - windowWidth;

    const width =
      minWidth + (maxWidth - minWidth) * (1 - scrollPosition / maxScroll);
    setScale(width);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scale;
};
