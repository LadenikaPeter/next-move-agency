import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./layout/Root";
import Listings from "./pages/Listings";
import ListingDetails, {loader as ListingDetailsLoader} from "./pages/Listing-Details";
import Services from "./pages/Services";
import About from "./pages/Aboout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/listings", element: <Listings /> },
      { path: "/listing/:listingID", element: <ListingDetails />, id: 'listing-detail', loader: ListingDetailsLoader },
      {path: "/services", element: <Services />},
      {path: "/about", element: <About />}
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
