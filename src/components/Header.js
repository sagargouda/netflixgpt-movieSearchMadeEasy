import React from 'react';
import { FaSignOutAlt } from "react-icons/fa";
import { signOut } from "firebase/auth";
import {auth} from '../utils/firebase'
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
function Header(props) {
    const navigate = useNavigate()


    const user = useSelector(store=>store.user)

    function handleSignOut(){
        signOut(auth).then(() => {
            // if sign out is successful navigate to "/"
            navigate('/')


        }).catch((error) => {
            // if error happens pass it to navigate('*') which is an error page
            navigate('*')
        });
    }
    return (
        <div className="absolute flex justify-between w-full px-8 py-2 bg-gradient-to-b from-black max-sm-[500px]:px-0 z-10 ">
            <img className="w-44 " src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>

        {/*    sign out button */}
            { user && (
                <div className=" flex p-2 justify-between mt-6 cursor-pointer" onClick={handleSignOut}>
                    <img className="w-12 h-12" src={user?.photoURL} alt=""/>
                    <FaSignOutAlt title="Sign out" size={20}/>
                </div>
            )

            }

        </div>
    );
}

export default Header;