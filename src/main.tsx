import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Main } from "./Componets/Main/index.tsx";
import { About } from "./Routes/index.tsx";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { productUser } from "./hooks/userProvider.tsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element:<Main />
      },
      {
        path: "/About",
        element: <About />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    <productUser>
      <RouterProvider router ={router} />
    </productUser>
  </React.StrictMode>
);
