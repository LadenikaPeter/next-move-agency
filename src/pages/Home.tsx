import ArrowLink from "../components/Arrow-link";
import { SECOND_SECTION, THIRD_SECTION } from "../constants/home";

export default function HomePage() {
  return (
    <>
      <section id="hero__Section">
        <div
          className={`bg-[url('/home/hero-img.jpg')] h-screen bg-no-repeat bg-cover bg-[50%] px-16`}
        >
          <div className="bg-[linear-gradient(transparent,rgba(0,0,0,.55))] z-[1] absolute top-0 bottom-0 left-0 right-0"></div>
          <div className="p-4 z-[99] relative justify-end flex flex-col h-full">
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
          <div className="flex gap-20">
            <div className="w-2/4 py-28">
              <h1 className="text-[88px] -tracking-[2.4px] leading-[105px] text-[#054738]">
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
            <div className="w-2/4 flex flex-col justify-end items-end gap-8">
              <p className="w-2/4 text-[#054738]">
                We specialize in selling high-end luxury residential properties
                all across beautiful Los Angeles.
              </p>

              <div className="flex w-full justify-between">
                {SECOND_SECTION.map((item) => {
                  return (
                    <div key={item.key}>
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
            className={`bg-[url('/home/home-bedroom.jpg')] h-screen bg-no-repeat bg-cover bg-[50%] relative`}
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
        </section>
        <section id="FOURTH__SECTION" className="py-[128px]">
          <div className="flex gap-20">
            <div className="w-[70%]">
              <img
                className="w-[48px] h-[48px]"
                src="/quote-icon.svg"
                alt="quoute-icon"
              />
              <h1 className="text-[64px] leading-[73px] -tracking-[1.6px] text-[#054738] mt-5">
                Joe Louis made the process of buying my dream home easy and
                stress-free. Their professionalism and attention to detail are
                unparalleled.
              </h1>
            </div>
            <div className="w-[30%] flex justify-end items-end  ">
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
      </div>
    </>
  );
}
