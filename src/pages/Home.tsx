import ArrowLink from "../components/Arrow-link";

export default function HomePage() {
  return (
    <>
      <div className="">
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

              <h4 className="text-right text-white text-[32px]">
                Luxury Residential Properties in Los Angeles.
              </h4>
              <img src="/home/exclusivity_defined.svg" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
