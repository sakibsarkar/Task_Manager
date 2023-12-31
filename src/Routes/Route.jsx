import Contact from "../Contact/Contact";
import CreateTask from "../Dashboard/CreateTask/CreateTask";
import DashboardLayout from "../Layout/DashboardLayout";
import FAQ from "../FAQ/FAQ";
import Home from "../Home/Home";
import Login from "../Components/Login/Login";
import MainLayout from "../Layout/MainLayout";
import ManageTask from "../Dashboard/ManageTask/ManageTask";
import MyCompleted from "../MyCompleted/MyCompleted";
import MyOngoings from "../MyOngoings/MyOngoings";
import MyTodos from "../Dashboard/MyTodos/MyTodos";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Profile from "../Profile/Profile";
import Register from "../Components/Register/Register";
import UpdateTask from "../Components/UpdateTask/UpdateTask";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/faq",
                element: <FAQ />
            }

        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: "/dashboard/createTask",
                element: <PrivateRoute><CreateTask />  </PrivateRoute>
            },
            {
                path: "/dashboard/manageTask",
                element: <PrivateRoute><ManageTask />  </PrivateRoute>
            },
            {
                path: "/dashboard/toDo",
                element: <PrivateRoute><MyTodos /></PrivateRoute>
            },
            {
                path: "/dashboard/ongoing",
                element: <PrivateRoute><MyOngoings /></PrivateRoute>
            },
            {
                path: "/dashboard/completed",
                element: <PrivateRoute><MyCompleted /></PrivateRoute>
            },
            {
                path: "/dashboard/profile",
                element: <PrivateRoute><Profile /></PrivateRoute>

            }
        ]
    },
    {
        path: "/update/:id",
        element: <PrivateRoute><UpdateTask /></PrivateRoute>
    }



])