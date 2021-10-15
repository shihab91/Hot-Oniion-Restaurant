import React from 'react';
import { BsGoogle } from "react-icons/bs";
const Register = () => {
    return (
        <div className="sign-in mt-5">
            <input className="item" type="text" placeholder="Name" />
            <input className="item" type="email" name="" id="" placeholder="Email" />
            <input className="item" type="password" name="" id="" placeholder="Password" />
            <input className="item" type="password" name="" id="" placeholder="Re-enter Password" />
            <button className="item sign-in-btn">Sign in</button>
            <p>-----OR-----</p>
            <button className="item sign-in-btn mt-0"><BsGoogle className="fs-4" /> Sigh In With Google</button>
        </div>
    );
};

export default Register;