import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import ProviderComp from "./Provider/ProviderComp.jsx";
import { routes } from "./Routes/Routes.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProviderComp>
    <RouterProvider router={routes} />
  </ProviderComp>
);
