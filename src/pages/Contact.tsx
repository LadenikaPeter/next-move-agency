import { SOCIAL_MEDIA } from "../constants/contact";

export default function Contact() {
  return (
    <>
      <section className="pt-[192px] pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-20 text-[#054738]">
            <div className="w-[60%] flex flex-col gap-9">
              <p className="text-[clamp(44px,6vw,88px)] -tracking-[2.4px] lg:leading-[105px]">
                Let’s talk about working together.
              </p>
              <div className="flex gap-[32px]">
                <div className="w-[60%] flex flex-col gap-5">
                  <p>moveG@gmail.com</p>
                  <p>123-456-7891</p>
                </div>
                <div className="w-[60%] flex flex-col gap-5">
                  <p>
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
            <div className="w-[40%]"></div>
          </div>
        </div>
      </section>
    </>
  );
}
