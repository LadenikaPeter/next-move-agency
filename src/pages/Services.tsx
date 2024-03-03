import ArrowLink from "../components/Arrow-link";
import FindHome from "../components/Find-home";
import Footer from "../components/Footer";
import { SERVICES_PROVIDED } from "../constants/services";

export default function Services() {
  return (
    <>
      <section className="pt-[192px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#054738] pb-24">
            <h1 className="text-[clamp(44px,6vw,88px)] -tracking-[2.4px] lg:leading-[105px] max-w-[900px]">
              Unparalleled Expertise, Personalized Solutions.
            </h1>
            <p className="max-w-[510px] mt-5">
              We understand that luxury real estate demands exceptional
              expertise and a tailored approach, which is why we go above and
              beyond to deliver unparalleled service and personalized solutions
              that align perfectly with your distinct preferences and goals.
            </p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(175px,_1fr))] gap-4 py-12">
            {SERVICES_PROVIDED.map((item) => {
              return (
                <div className="flex flex-col text-[#054738] h-[271px] justify-between pr-[10px]">
                  <div>
                    <h3 className="text-[32px] leading-[44px]">{item.title}</h3>
                    <p className="leading-[27px] mt-5">{item.subtitle}</p>
                  </div>
                  <div className="flex p-[6px] items-center gap-4">
                    <p>{item.linkText}</p>
                    <ArrowLink
                      currentColor={"#054738"}
                      activeColor={"#ffffff"}
                      backgroundColor={"#054738"}
                      route={`${item.link}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="py-32">
            <div className="flex gap-[40px] flex-wrap lg:flex-nowrap">
              <div className="lg:w-[42%] w-full flex">
                <div className="flex flex-col text-[#054738] justify-end">
                  <div>
                    <h3 className="text-[clamp(32px,6vw,64px)] md:leading-[73.6px] md:-tracking-[1.6px]">
                      Why us
                    </h3>
                    <p className="leading-[27px] mt-5">
                      Gain access to our extensive knowledge and experience in
                      the high-end market, ensuring that you make informed
                      decisions and navigate the complex process with
                      confidence. Additionally, we have a personalized approach
                      that guarantees that your unique needs and preferences are
                      prioritized, resulting in a seamless and enjoyable real
                      estate experience tailored to your specific requirements.
                    </p>
                  </div>
                  <div className="flex p-[6px] items-center gap-4">
                    <p>view our listings</p>
                    <ArrowLink
                      currentColor={"#054738"}
                      activeColor={"#ffffff"}
                      backgroundColor={"#054738"}
                      route="/listings"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:w-[57%] w-full md:block hidden">
                <div className="h-[582px]">
                  <img
                    className="w-full h-full object-cover object-center"
                    src="/services/services-1.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="py-[128px]">
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
                    luxury real estate market and the needs of high-end
                    clientele.
                  </p>
                  <div className="flex gap-4 items-center mt-[25px]">
                    <span className="text-[#054738]">About us</span>
                    <ArrowLink
                      currentColor={"#054738"}
                      activeColor={"#ffffff"}
                      backgroundColor={"#054738"}
                      route="/about"
                    />
                  </div>
                </div>
              </div>
              <div className="flex lg:w-1/2">
                <h1 className="text-[#054738] lg:text-[88px] lg:leading-[105.6px] lg:-tracking-[2.4px] text-[48px] leading-[57px] -tracking-[1.6px] ">
                  The team need you.
                </h1>
              </div>
            </div>
            <div className="pt-16">
              <img src="/home/home-2.jpg" />
            </div>
          </div>
        </div>
        <FindHome />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Footer />
        </div>
      </section>
    </>
  );
}
