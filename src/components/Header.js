import React, {useEffect} from 'react';
import { FaSignOutAlt } from "react-icons/fa";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from '../utils/firebase'
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {addUser, removeUser} from "../utils/userSlice";
import {useDispatch} from "react-redux";
import {toggleGptSearchView} from '../utils/gptSlice'
import {SUPPORTED_LANGUAGES} from "../constants/constants";
import {changeLanguage} from "../utils/configSlice";
function Header(props) {
    const navigate = useNavigate()
//  for dispatching an action
    const dispatch = useDispatch()
    const user = useSelector(store=>store.user)
    const showGptSearch  = useSelector(store=>store.gpt.showGptSearch)



    function handleSignOut(){
        signOut(auth).then(() => {
            // if sign out is successful navigate to "/"
           navigate('/')
        }).catch((error) => {
            // if error happens pass it to navigate('*') which is an error page
            navigate('*')
        });
    }

    // button click
function handleGpt(){
//          toggling gpt search , so dispatching ana action
dispatch(toggleGptSearchView())
}


    //  changed use effect here now header is in whole app also it is in router provider

    useEffect(() => {
        // added event listner
     const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // if user is signed in (if my user is present)
                const {uid , email , displayName, photoURL} = user;

                //   dispatching add user action and it will store in redux store
                dispatch(addUser({uid:uid , email:email , displayName:displayName , photoURL: photoURL}))
                navigate('/browse')

            } else {
                // if user is signed out
                //   dispatching remove user action which automatically makes null in redux store state
                dispatch(removeUser())

                navigate('/')
            }
        });

    //   this will be called when component unmounts like navigating from one page to other
        return () => unsubscribe()

    }, []);



    // handleLanguageChange function
    function handleLanguageChange(e){
        // console.log(e.target.value)
        dispatch(changeLanguage(e.target.value))
    }


    return (
        <div className="absolute flex flex-col md:flex-row justify-around w-full px-8 py-2 bg-gradient-to-b from-black max-sm-[500px]:px-0 z-10 ">
            <img className="w-44 mx-auto md:mx-0" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>

        {/*    sign out button */}
            { user && (
                <div className=" flex justify-around md:justify-between md:gap-5 " >
                    {
                        showGptSearch &&
                        <select className="p-2 bg-gray-900 text-white m-2" onChange={handleLanguageChange}>
                            {
                                SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier}
                                                                        value={lang.identifier}>{lang.name}</option>)
                            }
                        </select>
                    }


                        <button className="py-2 px-4 mx-2 my-2 rounded-md bg-purple-800 text-white"
                                onClick={handleGpt}>{showGptSearch ? 'Home Page' : 'Gpt Search'}
                        </button>
                        <div className="flex mt-3 md:gap-3">
                            <img className="hidden md:block w-12 h-12 rounded-3xl" src={user?.photoURL} alt=""/>
                            <FaSignOutAlt onClick={handleSignOut} className="cursor-pointer mt-3" title="Sign out" size={23}
                                          color="white"/>
                        </div>



                </div>
            )

            }

        </div>
    );
}

export default Header;