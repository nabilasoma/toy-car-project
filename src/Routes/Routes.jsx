import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home/Home";
import Registration from "../registration/Registration";
import Login from "../login/Login";
import AllToys from "../allToys/AllToys";
import Blog from "../blog/Blog";
import ViewDetails from "../viewDetails/ViewDetails";
import PrivateRoute from "./PrivateRoute";
import AddaToy from "../addAtoy/AddaToy";
import MyToy from "../myToy/MyToy";


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
            },
            {
                path: 'addAToy',
                element: <PrivateRoute><AddaToy></AddaToy></PrivateRoute>
                
            },
            {
                path: 'myToy',
                element: <PrivateRoute><MyToy></MyToy></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/addNew')
            },
            {
                path: 'details/:id',
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/allToys/${params.id}`)
            }
        ]
    }

])


export default router;