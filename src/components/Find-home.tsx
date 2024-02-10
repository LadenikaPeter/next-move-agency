import ArrowLink from "./Arrow-link";

export default function FindHome() {
  return (
    <div className="bg-[#054738] flex justify-center text-white ">
      <div className="py-[128px] flex flex-col max-w-[800px] text-center gap-3">
        <h1 className="text-[88px] -tracking-[2.4px] leading-[105px] ">
          Let's find your dream home.
        </h1>
        <div className="flex justify-center items-center gap-2">
          <p>Get in touch</p>
          <ArrowLink />
        </div>
      </div>
    </div>
  );
}
