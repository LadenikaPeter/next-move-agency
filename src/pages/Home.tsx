import ArrowLink from "../components/Arrow-link";
import { SECOND_SECTION } from "../constants/home";

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
      </div>
    </>
  );
}
