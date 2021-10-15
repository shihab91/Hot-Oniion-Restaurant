import React from 'react';
import './LogIn.css'
import { BsGoogle } from "react-icons/bs";
import useAuth from '../../hooks/useAuth';


const LogIn = () => {
    const { handleGoogleSignIn } = useAuth();
    return (
        <div className="sign-in mt-5">
            <input className="item" type="email" name="" id="" placeholder="Email" />
            <input className="item" type="password" name="" id="" placeholder="Password" />
            <button className="item sign-in-btn">Sign in</button>
            <p>-----OR-----</p>
            <button onClick={handleGoogleSignIn} className="item sign-in-btn mt-0"><BsGoogle className="fs-4" /> Sigh In With Google</button>
        </div>
    );
};

export default LogIn;