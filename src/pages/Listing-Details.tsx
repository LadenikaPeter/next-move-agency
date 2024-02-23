import { useRouteLoaderData } from "react-router-dom";
import { LISTINGS } from "../constants/Listings";
import ArrowLink from "../components/Arrow-link";
import FindHome from "../components/Find-home";
import Footer from "../components/Footer";

export default function ListingDetails() {
  const data = useRouteLoaderData("listing-detail") as {
    image: string;
    amount: string;
    location: string;
    quality: { amount1: string; text: string }[];
    showcase_images: string[];
    about: string;
  };

  // Make sure to handle the case where data is undefined
  if (!data) {
    return null;
  }

  console.log(data);

  return (
    <>
      <section>
        <div className={`h-[82vh]`}>
          <div className="h-[82vh] bg-[linear-gradient(transparent,rgba(0,0,0,.55))] z-[1] absolute top-0 bottom-0 left-0 right-0"></div>
          <img
            src={`/listings/${data.image}.jpg`}
            className="object-cover h-full w-full"
          />
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-20 pt-16 pb-24 md:flex-nowrap flex-wrap">
          <div className="md:w-1/2 w-full text-[#054738]">
            <h1 className="text-[clamp(44px,6vw,88px)] -tracking-[2.4px] lg:leading-[105px]">
              {data.location}
            </h1>
            <p className="text-[32px] leading-[44.8px] mt-5">{data.amount}</p>
            <div className="max-w-[270px] mt-[35px]">
              {data.quality.map((item) => {
                return (
                  <div className="flex  justify-between border-solid border-b-[1px] pb-1 border-b-[#054738] py-[9px]">
                    <p className="text-[20px]">{item.amount1}</p>
                    <p className="text-[16px]">{item.text}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-[35px]">
              <div className="flex items-center justify-end gap-2 mb-5">
                <p>Inquire today</p>
                <ArrowLink
                  currentColor={"#054738"}
                  activeColor={"#ffffff"}
                  backgroundColor={"#054738"}
                />
              </div>
              <div className="flex justify-end">
                <p className="max-w-[416px]">{data.about}</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            {data.showcase_images.map((item) => {
              return (
                <img
                  className="h-[358px] object-cover w-full mb-[32px]"
                  src={`/listings-details/${item}.jpg`}
                />
              );
            })}
          </div>
        </div>
      </div>
      <FindHome />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Footer />
      </div>
    </>
  );
}

export const loader = async ({ params }: any) => {
  const id = params.listingID;
  console.log(id);

  // Find the listing with the specified location
  const foundListing = LISTINGS.find((listing) => listing.location === id);

  // Return the found listing or undefined if not found
  return foundListing || undefined;
};
