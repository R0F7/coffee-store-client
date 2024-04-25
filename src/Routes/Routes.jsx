import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import AddCoffee from "../component/AddCoffee";
import UpdateCoffee from "../component/UpdateCoffee";
import Home from "../component/Home";
import SignUp from "../component/SignUp";
import SignIn from "../component/SignIn";
import Users from "../component/Users";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch('https://coffee-store-server-jet-one.vercel.app/coffee')
            },
            {
                path:'addCoffee',
                element:<AddCoffee></AddCoffee>,
            },
            {
                path:'updateCoffee/:id',
                element: <UpdateCoffee></UpdateCoffee>,
                loader: ({params}) => fetch(`https://coffee-store-server-jet-one.vercel.app/coffee/${params.id}`)
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>,
            },
            {
                path:'/signin',
                element:<SignIn></SignIn>,
            },
            {
                path:'users',
                element:<Users></Users>,
                loader: ()=> fetch('https://coffee-store-server-jet-one.vercel.app/user'),
            }
        ]
    }
])