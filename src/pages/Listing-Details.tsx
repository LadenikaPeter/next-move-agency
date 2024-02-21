import { useRouteLoaderData } from "react-router-dom";
import { LISTINGS } from "../constants/Listings";

export default function ListingDetails() {
  const data = useRouteLoaderData("listing-detail");

  // Make sure to handle the case where data is undefined
  if (!data) {
    return null;
  }

  console.log(data);

  return (
    <>
      <h1>Lets Goo</h1>
      {/* Render your listing details using data */}
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
