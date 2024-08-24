import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { About } from "./pages/About/index.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductProvider } from "./hooks/useProduct.tsx";
import { Main } from "./pages/Main/index.tsx";

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
    <ProductProvider>
      <RouterProvider router ={router} />
    </ProductProvider>
  </React.StrictMode>
);
