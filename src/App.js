import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header.js";
import Body from "./components/Body.js";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./components/About.js";
import ContactUs from "./components/ContactUs.js";
import RestaurantMenu from "./components/ResturantMenu.js";
// import Grocery from "./components/Grocery.js";
import Error from "./components/Error.js";

const Grocery = lazy(() => import("./components/Grocery.js"));
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <ContactUs />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={"loading..."}><Grocery /></Suspense>
      },
      {
        path: "/resturants/:resId",
        element: <RestaurantMenu />
      },
    ],
    errorElement: <Error />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
