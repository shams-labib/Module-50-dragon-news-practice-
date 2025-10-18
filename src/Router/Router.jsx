import { createBrowserRouter } from "react-router";
import Errorpage from "../components/Errorpage";
import Homelaout from "../components/Homelayout/Homelaout";

export const router = createBrowserRouter([
    {
        path:'/',
        errorElement:<Errorpage></Errorpage>,
        element:<Homelaout></Homelaout>
    }
])