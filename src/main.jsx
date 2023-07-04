import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import Contact from "./Components/Home/Sections/ContactMe/Contact.jsx";
import MyServices from "./Components/Home/Sections/MyServices/MyServices.jsx";
import AboutMe from "./Components/Home/Sections/AboutMe/AboutMe.jsx";
import Services from "./Components/Home/Sections/MyServices/Services.jsx";
import AboutMeDetail from "./Components/Home/Sections/AboutMe/AboutDetail.jsx";
import ForOFor from "./Components/ForOFor/ForOFor.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/about",
        element: <AboutMeDetail></AboutMeDetail>,
      },
    ],
  },
  {
    path: "/*",
    element: <ForOFor></ForOFor>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
