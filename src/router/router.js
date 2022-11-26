import Admin from "../pages/Admin/Admin/Admin";
import AllSellers from "../pages/Admin/AllSellers/Allsellers";
import Buyers from "../pages/Admin/Buyers/Buyers";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home/Home";
import Products from "../pages/Products/Products/Products";
import AddProduct from "../pages/Seller/AddProduct/AddProduct";
import Seller from "../pages/Seller/Seller/Seller";
import SignUp from "../pages/SignUp/SignUp";
import AdminRouter from "./AdminRouter";
import PrivetRouter from "./PrivetRouter";
import SellerRouter from "./SellerRouter";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Login } = require("../pages/Login/Login");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/products/:companyName',
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.companyName}`),
                element: <PrivetRouter><Products></Products></PrivetRouter>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
        ]
    },
    {
        path: '/seller',
        element: <SellerRouter><Seller></Seller></SellerRouter>,
        children: [
            {
                path: '/seller/add-product',
                element: <AddProduct></AddProduct>
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminRouter><Admin></Admin></AdminRouter>,
        children: [
            {
                path: '/admin',
                element: <Buyers></Buyers>
            },
            {
                path: '/admin/all-seller',
                element: <AllSellers></AllSellers>
            },
        ]
    },
    {
        path: '*',
        element: <img className="error404" src="https://miro.medium.com/max/1400/1*zE2qnVTJehut7B8P2aMn3A.gif" alt="" />
    }
]);
