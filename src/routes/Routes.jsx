import {
    createBrowserRouter,
} from "react-router-dom" ;
import Root from "./layout/Root";
import Error from "../shared/Error";
import Home from "./Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Products from "../pages/product/Products";
import ProductDetails from "../pages/product/ProductDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signUp',
                element:<SignUp></SignUp>
            },
            {
                path: 'products',
                element: <Products></Products>
            },
            {
                path: 'productDetails/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/products/${params.id}`)
            }
        ]
    },
]);