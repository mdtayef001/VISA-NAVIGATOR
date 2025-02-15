import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "react-tooltip/dist/react-tooltip.css";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import AuthProvider from "./Provider/AuthProvider";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <>
        <RouterProvider router={router} />
        <ToastContainer autoClose={500} position="top-center" />
      </>
    </AuthProvider>
  </StrictMode>
);
