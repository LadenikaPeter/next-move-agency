import { useNavigate } from "react-router-dom";
import { FOOTER_LINKS, SOCIALS } from "../constants/Footer";
import SubmitButton from "./Submit-button";

export default function Footer() {
  const navigate = useNavigate();
  function getYear() {
    const dateObj = new Date();
    return dateObj.getFullYear();
  }
  return (
    <>
      <section id="FOOTER" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex pt-16 pb-8 justify-between flex-wrap gap-5">
          <div>
            <div className="md:max-w-[320px]">
              <p className="text-[#054738]">
                Stay up-to-date on my latest listings and market trends.
              </p>
              <div className="flex gap-3 items-center mt-5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border-b-[#054738] border-b h-12 w-full text-[#054738] outline-none"
                />
                <SubmitButton />
              </div>
            </div>
          </div>
          <div className="md:max-w-[320px] w-full">
            <ul className=" flex flex-col justify-between h-full max-[767px]: gap-3">
              {FOOTER_LINKS.map((item) => {
                return (
                  <li
                    onClick={() => {
                      navigate(`${item.link}`);
                    }}
                    className="sm:text-right text-[#054738]"
                  >
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex sm:justify-between mb-8 text-[#054738] gap-3 flex-wrap justify-center">
          <p>© copyright {getYear()}</p>
          <div className="flex gap-3">
            {SOCIALS.map((item) => {
              return (
                <a href={item.link} target="_blank">
                  {item.social}
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
