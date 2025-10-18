import { createBrowserRouter } from "react-router";
import Errorpage from "../components/Errorpage";
import Homelaout from "../components/Homelayout/Homelaout";
import Home from "../Pages/Home";
import CategoryNews from "../Layout/CategoryNews/CategoryNews";

export const router = createBrowserRouter([
    {
        path:'/',
        errorElement:<Errorpage></Errorpage>,
        element:<Homelaout></Homelaout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/category/:id',
                element:<CategoryNews></CategoryNews>,
                loader:()=> fetch('/news.json')
            }
        ]
    }
])