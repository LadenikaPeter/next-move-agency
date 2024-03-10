import { Outlet, useLocation } from "react-router-dom";
import MainNavigation from "../components/Header";
import { useState } from "react";
import GoToTop from "../components/ScrollToTop";
import { Bounce, ToastContainer } from "react-toastify";

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
  const Nav: string[] = ["/", "listing", "about"];

  const checkNavigation = () => {
    const path = location.pathname;
    const firstFragment = path.split("/")[1];
    const secondFragment = path.split("/")[2];

    if (
      Nav.includes(path) ||
      Nav.includes(firstFragment) ||
      Nav.includes(secondFragment)
    ) {
      return "W";
    } else {
      return "G";
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
      <GoToTop />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </>
  );
}
