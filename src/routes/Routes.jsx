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
import Dashboard from "./dashboard/Dashboard";
import MyProfile from "./dashboard/user/MyProfile";
import AddProduct from "./dashboard/user/AddProduct";
import MyProducts from "./dashboard/user/MyProducts";
import PrivateRoute from "./PrivateRoute";
import Payment from "./dashboard/user/Payment";

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
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[

            //user routes
            {
                path: 'myProfile',
                element:<MyProfile></MyProfile>
            },
            {
                path:'addProduct',
                element:<AddProduct></AddProduct>
            },
            {
                path:'myProducts',
                element:<MyProducts></MyProducts>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            }
        ]
    }
]);