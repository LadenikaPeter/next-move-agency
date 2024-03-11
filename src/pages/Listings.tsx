import { useNavigate } from "react-router-dom";
import FindHome from "../components/Find-home";
import Footer from "../components/Footer";
import { LISTINGS } from "../constants/Listings";

export default function Listings() {
  const navigate = useNavigate();
  return (
    <>
      <section className="pt-[192px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-[#054738] lg:text-[88px] lg:leading-[105.6px] lg:-tracking-[2.4px] text-[48px] leading-[57px] -tracking-[1.6px]">
            Properties for sale
          </h1>
          <p className="text-[#054738]">
            Selling some of the nicest houses money can buy.
          </p>
          <div className="min-[1263px]:flex flex-wrap gap-[24px] my-10 hidden">
            {LISTINGS.map((item) => {
              return (
                <div
                  style={{
                    backgroundImage: `url('/listings/${item.image}.jpg')`,
                  }}
                  onClick={() => navigate(`/listing/${item.location}`)}
                  className={`h-[50vh] w-[49%] bg-no-repeat bg-cover bg-[50%] relative `}
                >
                  <div className="bg-[linear-gradient(transparent,rgba(0,0,0,.55))] z-[1] absolute top-0 bottom-0 left-0 right-0"></div>
                  <div className="flex w-full h-full items-end justify-between px-8 pb-8 text-[#fffcf8] z-[99] relative">
                    <div>
                      <p className="text-[24px] -tracking-[1.6px] leading-[33.6px]">
                        {item.amount}
                      </p>
                      <h2 className="text-[40px] -tracking-[1.6px] leading-[46px]">
                        {item.location}
                      </h2>
                    </div>
                    <div className="w-1/4 flex flex-col gap-2">
                      {item.quality.map((item) => {
                        return (
                          <div className="flex  justify-between border-solid border-b-[1px] pb-1 border-b-[#fffcf8]">
                            <p>{item.amount1}</p>
                            <p>{item.text}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="max-[1262px]:block hidden my-10">
            {LISTINGS.map((item) => {
              return (
                <div
                  className="my-[60px]"
                  onClick={() => navigate(`/listing/${item.location}`)}
                >
                  <div className="h-[250px]">
                    <img
                      src={`/listings/${item.image}.jpg`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="text-right mt-4">
                    <p className="text-[20px] -tracking-[1.6px] leading-[26px] text-[#054738]">
                      {item.amount}
                    </p>
                    <p className="text-[24px] -tracking-[0.8px] leading-[36px] text-[#054738]">
                      {item.location}
                    </p>
                  </div>
                  <div className="mt-8">
                    {item.quality.map((item) => {
                      return (
                        <div className="flex text-[#054738] justify-between border-solid border-b-[1px] py-[9px] border-b-[#054738]">
                          <p className="text-[20px]">{item.amount1}</p>
                          <p className="text-[16px]">{item.text}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
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
