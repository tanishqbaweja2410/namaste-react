import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";

// ------------------ Composing Components ------------------------------->

// Chunking
// Dynamic Import
// Code Splitting
// Lazy Loading
// On Demand Loading
// Dynamic Bundling
const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));
// Upon On Demand Loading -> upon render -> suspend loading

const AppLayout = () => {
  return (
    <>
      {/* i want header and footer to be present everywhere, 
      only children will update according to the route*/}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "about",
        element: <Suspense><About /></Suspense>,
        errorElement: <Error />,
        // children: [
        //   {
        //     path: "profile", // localhost:1234/about/profile   i.e. parentPath/{path}
        //     element: <Profile />
        //   }
        // ]
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
        errorElement: <Error />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
        errorElement: <Error />,
      },
    ],
  },
]);

// ------------------ Rendering ------------------------------->
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
