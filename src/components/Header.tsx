import { useState } from "react";
import { NAV_MENU } from "../constants/nav";

export default function MainNavigation() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="pt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center flex-grow">
            <a className=" flex  xl:mr-52 mr-[5.5rem]">
              <img
                src="/home/brand-logo.png"
                alt="Logo"
                className="lg:w-[120px] w-[100px]"
              />
            </a>
            <div className="hidden flex-grow md:inline-block">
              <div className="flex justify-end">
                <div className="flex gap-8">
                  {NAV_MENU.map((menu) => {
                    return (
                      <div className="flex flex-col items-center gap-[5px] cursor-pointer hover:border-b-black border-b-[2px] border-transparent mb-0">
                        <a className="font-medium text-lg">{menu}</a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div
            className="flex items-center md:hidden px-[15px]"
            onClick={() => setToggleMenu((prevstate) => !prevstate)}
          >
            <div className="w-[20px] h-[13px] flex flex-col justify-between cursor-pointer relative z-[999] ">
              <div
                className={`w-6 h-[2px] bg-black ease-linear duration-300 ${
                  toggleMenu &&
                  `transform rotate-45 translate-x-[-1px] translate-y-[4px] ease-linear duration-300 `
                }`}
              ></div>
              <div
                className={`w-6 h-[2px] bg-black ease-linear duration-300 ${
                  toggleMenu &&
                  `transform -rotate-45 translate-x-[-1px] -translate-y-[6px] ease-linear duration-300 `
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="mobile-menu"
        className={` ${toggleMenu ? "block" : "hidden"}
           relative z-[1]`}
        // className="md:hidden block"
      >
        <div className="fixed top-0 bottom-0 right-0 z-[10] w-full">
          <div
            className={`bg-[#054738] w-[53%] h-screen absolute top-0 right-0 pt-16 pl-6`}
          >
            {NAV_MENU.map((menu) => {
              return (
                <a
                  // onClick={closeMobileMenu}
                  className="font-medium border-[2px] border-white border-solid p-[5px] rounded"
                >
                  {menu}
                </a>
              );
            })}
            <a
              // onClick={closeMobileMenu}
              className="font-medium border-[2px] border-white border-solid p-[5px] rounded"
            >
              Cart
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
