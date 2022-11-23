import Home from "../pages/Home/Home/Home";

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
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
    {
        path: '*',
        element: <img className="error404" src="https://miro.medium.com/max/1400/1*zE2qnVTJehut7B8P2aMn3A.gif" alt="" />
    }
]);
