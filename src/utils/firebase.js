
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD8pp-wx1gDUzMM9aLu2X_xI_y5u1QLqoc",
    authDomain: "netflixgpt-b5cb5.firebaseapp.com",
    projectId: "netflixgpt-b5cb5",
    storageBucket: "netflixgpt-b5cb5.appspot.com",
    messagingSenderId: "7824488164",
    appId: "1:7824488164:web:085fd74be568eca387def1",
    measurementId: "G-J0RCF2KDET"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()