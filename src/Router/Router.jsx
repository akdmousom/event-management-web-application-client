import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import PrivetRoute from "./PrivetRoute/PrivetRoute";
import OurSeervices from "../Pages/OurService/OurSeervices";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Support from "../Pages/Support/Support";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/service',
                element: <PrivetRoute><OurSeervices></OurSeervices></PrivetRoute>
            },
            {
                path: '/support',
                element: <Support/>
            }
        ]
        
    }
])

export default Router;