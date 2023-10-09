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
import SupportTeam from "../Pages/SupportTeam/SupportTeam";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import MakePayment from "../Pages/MakePayment/MakePayment";

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
                path: '/supportteam',
                element:<SupportTeam/>
            },
            {
                path: '/insurance',
                element: <PrivetRoute><Insurance/></PrivetRoute>
            },
            {
                path: '/destination',
                element: <PrivetRoute><Destination/></PrivetRoute>
            },
            {
                path: '/offers',
                element:<PrivetRoute><Offers/></PrivetRoute>
            },
            {
                path: '/servicedetails/:id',
                element:<PrivetRoute><EventDetails/></PrivetRoute>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element:<Register/>
            }, 
            {
                path: '/makepayment',
                element: <PrivetRoute><MakePayment/> </PrivetRoute>
            }
        ]
        
    }
])

export default Router;