import { Outlet, useLocation } from "react-router-dom";
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

  const Location = useLocation();
  console.log(Location.pathname);
  const Nav: string[] = ["/", "listing"];

  const checkNavigation = () => {
    const path = location.pathname
    const firstFragment = path.split('/')[1]
    const secondFragment = path.split('/')[2]
    
    if(Nav.includes(path) || Nav.includes(firstFragment) || Nav.includes(secondFragment)){
      return 'W'
    } else {
      return 'G'
    }
  };



  return (
    <>
      <MainNavigation
        toggleMenu={toggleMobileMenu}
        closeMenu={closeMobileMenu}
        isOpen={isOpen}
        initial={isIntialRender}
        location={Location.pathname}
        navColor={checkNavigation}
      />
      <main>
        <Outlet />
      </main>
    </>
  );
}
