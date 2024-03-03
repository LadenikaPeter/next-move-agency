import ArrowLink from "./Arrow-link";

export default function FindHome() {
  return (
    <div className="bg-[#054738] flex justify-center text-white ">
      <div className="py-[128px] flex flex-col max-w-[800px] text-center gap-3">
        <h1 className="text-[clamp(33px,6vw,88px)] md:-tracking-[2.4px] md:leading-[105px]  ">
          Let's find your dream home.
        </h1>
        <div className="flex justify-center items-center gap-2">
          <p>Get in touch</p>
          <ArrowLink route="/contact" />
        </div>
      </div>
    </div>
  );
}
