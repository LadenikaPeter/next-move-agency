import { useEffect, useState } from "react";
import { NAV_MENU } from "../constants/nav";
import { Link, NavLink } from "react-router-dom";

type MainNavigationProps = {
  isOpen: boolean;
  initial: boolean;
  location: string;
  toggleMenu: () => void;
  closeMenu: () => void;
  navColor: () => string | undefined;
};

export default function MainNavigation({
  isOpen,
  initial,
  toggleMenu,
  closeMenu,
  navColor,
}: MainNavigationProps) {
  const [scrollBackground, setScrollBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrollBackground(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`pt-5 w-full z-[999] fixed transition-all duration-300 ${
        scrollBackground ? "bg-[#fffcf8]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center flex-grow">
            <Link to={"/"} className=" flex  xl:mr-52 mr-[5.5rem]">
              <img
                src="/home/brand-logo.png"
                alt="Logo"
                className="lg:w-[120px] w-[100px]"
              />
            </Link>
            <div className="hidden flex-grow md:inline-block">
              <div className="flex justify-end">
                <div className="flex gap-8">
                  {NAV_MENU.map((menu) => {
                    return (
                      <div className="flex flex-col items-center gap-[5px] cursor-pointer hover:border-b-white border-b-[2px] border-transparent mb-0">
                        <NavLink
                          to={"/" + menu.link}
                          className={`font-medium text-lg ${
                            navColor() === "W"
                              ? scrollBackground
                                ? "text-[#054738]"
                                : "text-white"
                              : "text-[#054738]"
                          }
                          `}
                        >
                          {menu.title}
                        </NavLink>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div
            className="flex items-center md:hidden px-[15px]"
            onClick={toggleMenu}
          >
            <div className="w-[20px] h-[13px] flex flex-col justify-between cursor-pointer relative z-[999] ">
              <div
                className={`w-6 h-[2px] bg-black ease-linear duration-300 ${
                  isOpen &&
                  `transform rotate-45 translate-x-[-1px] translate-y-[4px] ease-linear duration-300 `
                }`}
              ></div>
              <div
                className={`w-6 h-[2px] bg-black ease-linear duration-300 ${
                  isOpen &&
                  `transform -rotate-45 translate-x-[-1px] -translate-y-[6px] ease-linear duration-300 `
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="mobile-menu"
        className={`${isOpen && "block"}  ${initial && "hidden"}
           relative z-[1]`}
      >
        <div className={`fixed top-0 bottom-0 right-0 z-[10] w-full `}>
          <div
            className={`bg-[#054738] w-[53%] h-screen absolute top-0 right-0 pt-16 pl-6 animate__animated flex flex-col
            ${isOpen && "animate__slideInRight"} 
          ${!isOpen && "animate__slideOutRight"}
            `}
          >
            <p className="font-medium mt-16 mb-6 text-white">Menu</p>
            {NAV_MENU.map((menu) => {
              return (
                <a
                  onClick={closeMenu}
                  className="font-medium text-white my-2 text-2xl"
                >
                  {menu.title}
                </a>
              );
            })}
            <div className="flex flex-col gap-4 mt-6">
              <p className="font-medium text-white">123-456-7891</p>
              <p className="font-medium text-white">moveG@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
