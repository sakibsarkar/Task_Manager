import "./index.css";
import AuthProvider from "./AuthProvider/AuthProvider";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Route";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster />
      <RouterProvider router={routes} />
    </AuthProvider>

  </React.StrictMode>,
)
