import { Outlet } from "react-router-dom";
import MainNavigation from "../components/Header";
import { useState } from "react";

export default function RootLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [isIntialRender, setIsInitialRender] = useState(true);

  const toggleMobileMenu = () => {
    setIsOpen((prevState: boolean) => {
      return !prevState;
    });
    setIsInitialRender(false);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <MainNavigation
        toggleMenu={toggleMobileMenu}
        closeMenu={closeMobileMenu}
        isOpen={isOpen}
        initial={isIntialRender}
      />
      <main>
        <Outlet />
      </main>
    </>
  );
}
