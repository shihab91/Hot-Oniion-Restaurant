import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className=" footer">
            <div className="container">
                <div className="wrapper">
                    <div>
                        <img className="logo" src="https://i.ibb.co/jr0Zdst/logo.png" alt="" />
                    </div>
                    <div>
                        <p>About Online food</p>
                        <p>Read our blog</p>
                        <p>Sigh up to deliver</p>
                        <p>Add our restaurant</p>
                    </div>
                    <div>
                        <p>Get help</p>
                        <p>Read FAQs</p>
                        <p>View all cities</p>
                        <p>Restaurants near me</p>
                    </div>
                </div>
                <p className="text-white m-0 py-3">Copyright &copy; 2020 Online Food </p>
            </div>
        </div>
    );
};

export default Footer;