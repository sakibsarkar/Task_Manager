import MainLayout from "../Layout/MainLayout";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />
    }
])