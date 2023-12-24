import "./index.css";
import AuthProvider from "./AuthProvider/AuthProvider";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Route";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <QueryClientProvider client={queryClient}>

        <AuthProvider>

          <Toaster />
          <RouterProvider router={routes} />

        </AuthProvider>

      </QueryClientProvider>
    </DndProvider>
  </React.StrictMode >,
)
