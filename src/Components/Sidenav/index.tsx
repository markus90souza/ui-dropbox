import React, { useEffect, useState } from "react";

import { Container } from "./styles";

const scrollZone = 300;

declare global {
  interface Window {
    toggleActiveMenu: (() => void) | undefined;
  }
}

const Sidenav: React.FC = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
      setIsActive(false);
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const classes = [
    isActive ? "open" : "",
    scrollY <= scrollZone ? "scrollOpen" : "",
  ];

  const className = classes.join(" ").trim();

  function toggleActiveMenu() {
    setIsActive((active) => !active);
  }

  window.toggleActiveMenu = toggleActiveMenu;

  return <Container className={className}>{children}</Container>;
};

export default Sidenav;
