import { useRouteLoaderData } from "react-router-dom";
import { LISTINGS } from "../constants/Listings";
import ArrowLink from "../components/Arrow-link";

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
        <div className={`h-[77.5vh]`}>
          <div className="h-[77.5vh] bg-[linear-gradient(transparent,rgba(0,0,0,.55))] z-[1] absolute top-0 bottom-0 left-0 right-0"></div>
          <img
            src={`/listings/${data.image}.jpg`}
            className="object-cover h-full w-full"
          />
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-20">
          <div className="w-1/2">
            <h1>{data.location}</h1>
            <p>{data.amount}</p>
            <div className="max-w-[270px]">
              {data.quality.map((item) => {
                return (
                  <div className="flex  justify-between border-solid border-b-[1px] pb-1 border-b-[#fffcf8]">
                    <p>{item.amount1}</p>
                    <p>{item.text}</p>
                  </div>
                );
              })}
            </div>
            <div>
              <div className="flex items-center justify-end gap-2">
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
          <div className="w-1/2">
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
