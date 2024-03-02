import Footer from "../components/Footer";
import SubmitButton from "../components/Submit-button";
import { SOCIAL_MEDIA } from "../constants/contact";

export default function Contact() {
  return (
    <>
      <section className="pt-[192px] pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex lg:gap-20 gap-10 text-[#054738] lg:flex-nowrap flex-wrap">
            <div className="lg:w-[60%] w-full flex flex-col gap-9">
              <p className="text-[clamp(44px,6vw,88px)] -tracking-[2.4px] lg:leading-[105px]">
                Let’s talk about working together.
              </p>
              <div className="flex gap-[32px] lg:flex-nowrap flex-wrap">
                <div className="lg:w-[60%] w-full flex flex-col gap-5 font-medium">
                  <p>moveG@gmail.com</p>
                  <p>123-456-7891</p>
                </div>
                <div className="lg:w-[60%] w-full flex flex-col gap-5">
                  <p className="font-medium">
                    Interested in any properties or have any questions? Then get
                    in touch today and we’ll get back to you as soon as
                    possible.
                  </p>
                  <div className="flex gap-4">
                    {SOCIAL_MEDIA.map((item) => {
                      return <a href={item.link}>{item.app}</a>;
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-[40%] w-full">
              <div className="lg:mt-[96px]">
                <div>
                  <label className="block font-semibold mt-4 mb-2 text-[#054738]">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full text-[14px] py-[11.2px] pr-4 border-b-[1px] border-b-[#054738] outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold mt-4 mb-2 text-[#054738]">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full text-[14px] py-[11.2px] pr-4 border-b-[1px] border-b-[#054738] outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold mt-4 mb-2 text-[#054738]">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    className="w-full text-[14px] py-[11.2px] pr-4 border-b-[1px] border-b-[#054738] outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold mt-4 mb-2 text-[#054738]">
                    Message
                  </label>
                  <textarea className="w-full text-[14px] py-[11.2px] pr-4 border-b-[1px] border-b-[#054738] outline-none" />
                </div>
                <div className="mt-[35px]">
                  <SubmitButton />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}
