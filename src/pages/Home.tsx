import { HEROIMAGE } from "../constants/home";
export default function HomePage() {
  return (
    <>
      <div className="">
        <section id="hero__Section">
          <div
            className={`bg-[url('${HEROIMAGE}')] h-screen bg-no-repeat bg-cover bg-[50%]`}
          >
            <div className="bg-[linear-gradient(transparent,rgba(0,0,0,.55))] z-[1] absolute top-0 bottom-0 left-0 right-0"></div>
          </div>
        </section>
      </div>
    </>
  );
}
