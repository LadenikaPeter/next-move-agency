import ArrowLink from "../components/Arrow-link";
import FindHome from "../components/Find-home";
import Footer from "../components/Footer";
import {
  SECOND_SECTION,
  SIXTH_SECTION,
  THIRD_SECTION,
} from "../constants/home";

export default function HomePage() {
  return (
    <>
      <section id="hero__Section">
        <div
          className={`bg-[url('/home/hero-img.jpg')] h-screen bg-no-repeat bg-cover bg-[50%] `}
        >
          <div className="bg-[linear-gradient(transparent,rgba(0,0,0,.55))] z-[1] absolute top-0 bottom-0 left-0 right-0"></div>
          <div className=" z-[99] relative justify-end flex flex-col h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-end items-center gap-4 pb-3">
              <p className="text-right text-white">Find your next home</p>
              <ArrowLink />
            </div>

            <h4 className="text-right text-white text-[32px] mb-5">
              Luxury Residential Properties in Los Angeles.
            </h4>
            <img src="/home/exclusivity_defined.svg" />
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section id="SECOND__SECTION">
          <div className="lg:flex block gap-20">
            <div className="lg:w-2/4 py-28 ">
              <h1 className="text-[clamp(44px,6vw,88px)] -tracking-[2.4px] lg:leading-[105px] text-[#054738]">
                For those that want a home that impresses.
              </h1>
              <div className="flex gap-3 items-center">
                <p>About us</p>
                <ArrowLink
                  currentColor={"#054738"}
                  activeColor={"#ffffff"}
                  backgroundColor={"#054738"}
                />
              </div>
            </div>
            <div className="lg:w-2/4 w-full flex flex-col justify-end lg:items-end gap-8">
              <p className="lg:w-2/4 text-[#054738]">
                We specialize in selling high-end luxury residential properties
                all across beautiful Los Angeles.
              </p>

              <div className="flex w-full lg:justify-between justify-end max-[560px]:flex-wrap max-[1023px]:gap-5 ">
                {SECOND_SECTION.map((item) => {
                  return (
                    <div
                      key={item.key}
                      className={` max-[1023px]:left-0  ${
                        item.key === "i1" &&
                        "max-[1160px]:relative -left-[22px]"
                      }`}
                    >
                      <h1 className="text-[128px] leading-[140px] text-[#054738]">
                        {item.title}
                      </h1>
                      <p className="text-[#054738]">{item.subTitle}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section id="THIRD__SECTION" className="py-[128px]">
          <div
            className={`bg-[url('/home/home-bedroom.jpg')] h-screen bg-no-repeat bg-cover bg-[50%] relative min-[992px]:block hidden`}
          >
            <div className="bg-[linear-gradient(transparent,rgba(0,0,0,.55))] z-[1] absolute top-0 bottom-0 left-0 right-0"></div>
            <div className="flex w-full h-full items-end justify-between px-8 pb-8 text-[#fffcf8] z-[99] relative">
              <div>
                <p className="text-[32px] -tracking-[1.6px] leading-[44.8px]">
                  $4,499,000
                </p>
                <h2 className="text-[64px] -tracking-[4px] leading-[73px]">
                  2934 Pasadena Court
                </h2>
              </div>
              <div className="w-1/4 flex flex-col gap-2">
                {THIRD_SECTION.map((item) => {
                  return (
                    <div className="flex  justify-between border-solid border-b-[1px] pb-1 border-b-[#fffcf8]">
                      <p>{item.amount}</p>
                      <p>{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="max-[991px]:block hidden">
            <div className="h-[250px]">
              <img
                src="/home/home-bedroom.jpg"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-right mt-4">
              <p className="text-[20px] -tracking-[1.6px] leading-[26px] text-[#054738]">
                $4,499,000
              </p>
              <p className="text-[24px] -tracking-[0.8px] leading-[36px] text-[#054738]">
                2934 Pasadena Court
              </p>
            </div>
            <div className="mt-8">
              {THIRD_SECTION.map((item) => {
                return (
                  <div className="flex text-[#054738] justify-between border-solid border-b-[1px] py-[9px] border-b-[#054738]">
                    <p className="text-[20px]">{item.amount}</p>
                    <p className="text-[16px]">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section id="FOURTH__SECTION" className="py-[128px]">
          <div className="flex gap-20 lg:flex-nowrap flex-wrap">
            <div className="lg:w-[70%] w-full">
              <img
                className="w-[48px] h-[48px]"
                src="/quote-icon.svg"
                alt="quoute-icon"
              />
              <h1 className="text-[clamp(32px,4vw,64px)] lg:leading-[73px] -tracking-[1.6px] text-[#054738] mt-5 leading-[55px] ">
                Joe Louis made the process of buying my dream home easy and
                stress-free. Their professionalism and attention to detail are
                unparalleled.
              </h1>
            </div>
            <div className="lg:w-[30%] flex justify-end items-end w-full  ">
              <div className="h-[80px] flex gap-[30px] items-center">
                <img
                  className="h-full rounded-[50%]"
                  src="/home/user-pic.jpg"
                  alt="user-picture"
                />
                <div>
                  <h3 className="text-[24px] leading-[36px] text-[#054738]">
                    Daniel Roberts
                  </h3>
                  <p className="text-[16px] leading-[25px]">New Homeowner</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="FIFTH__SECTION" className="py-[128px]">
          <div className="flex gap-8 md:flex-nowrap flex-wrap">
            <div className="md:w-1/2">
              <img className="h-full object-cover" src="/home/home-1.jpg" />
            </div>
            <div className="md:w-1/2 flex flex-col justify-between">
              <div className="h-[85%]">
                <img
                  className="h-full w-full object-cover"
                  src="/home/home-2.jpg"
                />
              </div>
              <div className="flex justify-between">
                <p className="w-1/2 text-[#054738]">
                  Providing extensive experience and deep understanding of
                  luxury real estate.
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-[#054738]">View listings</span>
                  <ArrowLink
                    currentColor={"#054738"}
                    activeColor={"#ffffff"}
                    backgroundColor={"#054738"}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="SIXTH__SECTION" className="py-[128px]">
          <div className="flex gap-20 lg:flex-nowrap flex-wrap">
            <div className="flex lg:w-1/2 gap-12 lg:flex-nowrap flex-wrap">
              <div>
                <p className="leading-[27px] text-[#054738]">
                  We are passionate about helping our clients find their dream
                  home and achieve their real estate goals. We believe that
                  everyone deserves to experience the luxury and exclusivity
                  that high-end residential properties can offer.
                </p>
              </div>
              <div className="flex flex-col justify-between">
                <p className="text-[#054738]">
                  With over twenty years of experience selling luxury
                  properties, we have developed a deep understanding of the
                  luxury real estate market and the needs of high-end clientele.
                </p>
                <div className="flex gap-4 items-center mt-[25px]">
                  <span className="text-[#054738]">About us</span>
                  <ArrowLink
                    currentColor={"#054738"}
                    activeColor={"#ffffff"}
                    backgroundColor={"#054738"}
                  />
                </div>
              </div>
            </div>
            <div className="flex lg:w-1/2">
              <h1 className="text-[#054738] lg:text-[88px] lg:leading-[105.6px] lg:-tracking-[2.4px] text-[48px] leading-[57px] -tracking-[1.6px]">
                A Realtor that delivers.
              </h1>
            </div>
          </div>
          <div className="flex gap-20 pt-[64px] lg:flex-nowrap flex-wrap">
            <div className="lg:w-[44%] w-full flex flex-col justify-end h-auto">
              {SIXTH_SECTION.map((item) => {
                return (
                  <div className="flex justify-between py-3 border-b-[1px] border-b-[#054738]">
                    <p className="lg:text-[128px] text-[96px] leading-[140px] text-[#054738]">
                      {item.amount}
                    </p>
                    <p className="flex items-end text-[#054738]">{item.text}</p>
                  </div>
                );
              })}
            </div>
            <div>
              <img src="/home/hero.png" />
            </div>
          </div>
        </section>
      </div>
      <FindHome />
      <Footer />
    </>
  );
}
