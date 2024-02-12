import SubmitButton from "./Submit-button";

export default function Footer() {
  return (
    <>
      <section id="FOOTER" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col pt-16 pb-8">
          <div>
            <div className="max-w-[320px]">
              <p className="text-[#054738]">
                Stay up-to-date on my latest listings and market trends.
              </p>
              <div className="flex gap-3 items-center mt-5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border-b-[#054738] border-b h-12 w-full text-[#054738] outline-none"
                />
                <SubmitButton />
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
}
