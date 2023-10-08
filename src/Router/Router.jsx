import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import PrivetRoute from "./PrivetRoute/PrivetRoute";
import OurSeervices from "../Pages/OurService/OurSeervices";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Insurance from "../Pages/Insurance/Insurance";
import Destination from "../Pages/Destination/Destination";
import Offers from "../Pages/Offers/Offers";
import EventDetails from "../Pages/EventDetails/EventDetails";

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
                path: '/insurance',
                element: <Insurance/>
            },
            {
                path: '/destination',
                element: <Destination/>
            },
            {
                path: '/offers',
                element: <Offers/>
            },
            {
                path: '/servicedetails/:id',
                element: <EventDetails/>
            }
        ]
        
    }
])

export default Router;