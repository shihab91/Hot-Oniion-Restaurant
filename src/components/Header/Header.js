import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from "react-icons/md";
import logo from '../../images/logo2.png'
import './Header.css'
import useAuth from '../../hooks/useAuth';
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar expand="lg" className="header">
                <Container>
                    <Navbar.Brand href="#home"><img className="logo" src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="links">
                        <Nav className="links">
                            <Nav.Link className="cart-icon p-0"><MdShoppingCart /></Nav.Link>
                            {user?.displayName ?
                                <div className="d-flex flex-row justify-content-center align-items-center">
                                    <h4 className="m-0">{user?.displayName}</h4>
                                    <Link to="/register"><button onClick={logOut} className="signup-button ms-3">Sign Out</button></Link>
                                </div>
                                : <div> <Link className="login" to="/login">Login</Link>
                                    <Link to="/register"><button className="signup-button">Register</button></Link>
                                </div>

                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;