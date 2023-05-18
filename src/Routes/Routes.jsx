import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home/Home";
import Registration from "../registration/Registration";
import Login from "../login/Login";
import AllToys from "../allToys/AllToys";
import Blog from "../blog/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'registration',
                element: <Registration></Registration>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'allToys',
                element: <AllToys></AllToys>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            }
        ]
    }

])


export default router;