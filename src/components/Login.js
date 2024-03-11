import React, {useState} from 'react';
import Header from "./Header";


function Login(props) {

    const [isSignIn , setIsSignIn] = useState(true)

    return (
        <div >
            <Header/>
            {/*Banner*/}
            <div className="absolute  w-screen h-screen">
                <img  className="w-full h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="banner"/>
            </div>

        {/*     form  */}
            <form className="p-12 bg-black absolute md:w-6/12 sm:w-6/12 lg:w-3/12 my-36  mx-auto text-white right-0 left-0 bg-opacity-65 ">

                {/* sign in or sign up text*/}

                <h1 className="text-3xl font-bold py-4">{isSignIn ? 'Sign in' : 'Sign up'}</h1>

                {/*If user is signing up show him username input*/}
                {
                    !isSignIn ? <input type="text" placeholder="User Name"
                                       className="p-4 rounded-md my-2 w-full bg-gray-700"/> : ''
                }

                {/* email */}
                <input type="email" placeholder="Email Address" className="p-3 rounded-md my-2 w-full bg-gray-700"/>

                {/* pasword*/}

                <input type="password" placeholder="Password" className="p-4 my-2 w-full  bg-gray-700 rounded-md"/>

                {/* sign in*/}

                <button className="p-4 my-3 bg-red-700 w-full rounded-full">{isSignIn ? 'Sign In' : 'Sign Up'}</button>


                <p className="py-4 cursor-pointer" onClick={()=>{
                    setIsSignIn(prev => !prev)
                }}>{isSignIn ? 'New to this app? Sign Up Now' : 'Already a User? Sign In Now' }</p>







            </form>


        </div>
    );
}

export default Login;