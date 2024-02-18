import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./layout/Root";
import Listings from "./pages/Listings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/listings", element: <Listings /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
