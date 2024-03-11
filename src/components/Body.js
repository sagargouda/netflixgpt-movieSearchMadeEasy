import React from 'react';
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
        <>
        <RouterProvider router={appRouter}/>
        </>
    );
}

export default Body;