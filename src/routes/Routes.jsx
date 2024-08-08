import {
    createBrowserRouter,
} from "react-router-dom" ;
import Root from "./layout/Root";
import Error from "../shared/Error";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>
    },
]);