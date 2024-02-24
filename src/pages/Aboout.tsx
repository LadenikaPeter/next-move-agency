import ArrowLink from "../components/Arrow-link";
import { ABOUT_TRAITS } from "../constants/about";

export default function About() {
  return (
    <>
      <section>
        <div
          className={`bg-[url('/listings/home3.jpg')] h-screen bg-no-repeat bg-cover bg-[50%] `}
        >
          <div className="bg-[linear-gradient(transparent,rgba(0,0,0,.55))] z-[1] absolute top-0 bottom-0 left-0 right-0"></div>
          <div className="z-[99] relative justify-end flex flex-col h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full flex justify-end">
              <p className=" text-white mb-10 w-fit">
                For over 20 years we've been helping potential
                <br />
                buyers find the home of their dreams.
              </p>
            </div>

            <h1 className=" text-white text-[clamp(44px,6vw,88px)] -tracking-[2.4px] lg:leading-[105px] mb-12">
              Experience that you need with an agency you can trust.
            </h1>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-20 lg:flex-nowrap flex-wrap py-32">
            <div className="flex lg:w-1/2 gap-12 lg:flex-nowrap flex-wrap">
              <div>
                <p className="leading-[27px] text-[#054738]">
                  With over twenty years of experience selling luxury
                  properties, we have developed a deep understanding of the
                  luxury real estate market and the needs of high-end clientele.
                </p>
              </div>
              <div className="flex flex-col justify-between">
                <p className="text-[#054738]">
                  We have a proven track record of successfully selling high-end
                  properties at top prices and can provide our clients with
                  unparalleled service and expertise throughout the buying or
                  selling process.
                </p>
                <div className="flex gap-4 items-center mt-[25px] ">
                  <span className="text-[#054738]">Reach out</span>
                  <ArrowLink
                    currentColor={"#054738"}
                    activeColor={"#ffffff"}
                    backgroundColor={"#054738"}
                  />
                </div>
              </div>
            </div>
            <div className="flex lg:w-1/2">
              <h1 className="text-[#054738] lg:text-[88px] lg:leading-[105.6px] lg:-tracking-[2.4px] text-[48px] leading-[57px] -tracking-[1.6px] ">
                Los Angeles based Realtor.
              </h1>
            </div>
          </div>
          <div className="py-32">
            <div className="flex gap-[40px] flex-wrap lg:flex-nowrap">
              <div className="lg:w-[42%] w-full flex">
                <div className="flex flex-col text-[#054738] justify-end">
                  <div>
                    <h3 className="text-[clamp(32px,6vw,64px)] md:leading-[73.6px] md:-tracking-[1.6px]">
                      Why I do what I do
                    </h3>
                    <p className="leading-[27px] mt-5">
                      Here at Nextmove, we are passionate about helping our
                      clients find their dream home and achieve their real
                      estate goals. We believe that everyone deserves to
                      experience the luxury and exclusivity that high-end
                      residential properties can offer.
                    </p>
                  </div>
                  <div className="flex p-[6px] items-center gap-4">
                    <p>view our listings</p>
                    <ArrowLink
                      currentColor={"#054738"}
                      activeColor={"#ffffff"}
                      backgroundColor={"#054738"}
                    />
                  </div>
                </div>
              </div>
              <div className="lg:w-[57%] w-full md:block hidden">
                <div className="h-[582px]">
                  <img
                    className="w-full h-full object-cover object-center"
                    src="/about/about-man.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="py-32">
            <div className="flex justify-end">
              <div className="max-w-[960px] w-full">
                {ABOUT_TRAITS.map((item) => {
                  return (
                    <div className="text-[#054738] flex md:flex-nowrap flex-wrap md:gap-16 gap-4 py-8 border-b-2 border-solid border-b-[#054738]">
                      <div className="md:w-[55%] w-full h-fit">
                        <p className="text-[clamp(32px,6vw,64px)] md:leading-[73.6px] md:-tracking-[1.6px]">
                          {item.title}
                        </p>
                      </div>
                      <div className="md:w-[45%] w-full">
                        <p className="md:leading-[27.2px]">{item.content}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="py-32">
            <div className="text-[#054738]">
              <h1 className="text-[clamp(32px,6vw,64px)] md:leading-[73.6px] md:-tracking-[1.6px]">
                The numbers don't lie
              </h1>
              <div className="w-full flex">
                <p className="my-5 w-fit">
                  For over 20 years we've been helping potential
                  <br />
                  buyers find the home of their dreams.
                </p>
              </div>
              <div className="flex items-center gap-4 py-2">
                <p>Reach out</p>
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
    </>
  );
}
