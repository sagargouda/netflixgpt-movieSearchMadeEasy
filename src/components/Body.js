import React, {useEffect} from 'react';
import Login from "./Login";
import Browse from "./Browse";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Error from "./Error";

function Body(props) {

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login/>
        },
        {
            path: '/browse',
            element: <Browse/>
        },
        {
            path: '*',
            element: <Error/>
        }
    ])


    return (
        <div>
        <RouterProvider router={appRouter}/>
        </div>
    );
}

export default Body;