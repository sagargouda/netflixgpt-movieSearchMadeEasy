import React, {useEffect} from 'react';
import Login from "./Login";
import Browse from "./Browse";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Error from "./Error";
import {auth} from '../utils/firebase'
import {  onAuthStateChanged } from "firebase/auth";
import {useDispatch} from "react-redux";
import {addUser, removeUser} from "../utils/userSlice";

function Body(props) {
    //  for dispatching an action
    const dispatch = useDispatch()



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

    useEffect(() => {
        // added event listner
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // if user is signed in (if my user is present)
                const {uid , email , displayName, photoURL} = user;

            //   dispatching add user action and it will store in redux store
                dispatch(addUser({uid:uid , email:email , displayName:displayName , photoURL: photoURL}))
            } else {
               // if user is signed out
               //   dispatching remove user action which automatically makes null in redux store state
                dispatch(removeUser())
            }
        });

    }, []);


    return (
        <div>
        <RouterProvider router={appRouter}/>
        </div>
    );
}

export default Body;