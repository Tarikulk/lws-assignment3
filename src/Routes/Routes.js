import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../Components/HomePage";
import CartPage from "../Components/CartPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:"/",
                element: <HomePage></HomePage>
            },
            {
                path:"/cart",
                element: <CartPage></CartPage>
            }
        ]
    }
])