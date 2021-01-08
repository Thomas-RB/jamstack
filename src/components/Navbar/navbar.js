import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../../font-awesome"

import './navbar.css'

const Navbar = () => {

    return (
        <>
        
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
            <FontAwesomeIcon className="fas" icon={['fas', 'user-astronaut']} />
                <a to="/" className="navbar-brand" href="/">Explore</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item mt-4">
                        <Link to="/"> <a className="nav-link" aria-current="page" href="/">HOME</a> </Link> 
                        </li>
                        <li className="nav-item mt-4">
                        <Link to="/AboutUs/"> <a className="nav-link" aria-current="page" href="/">ABOUT US</a> </Link> 
                        </li>
                        <li className="nav-item mt-4">
                        <Link to="/Products/"> <a className="nav-link" aria-current="page" href="/">PRODUCTS</a> </Link> 
                        </li>
                        <li className="nav-item mt-4">
                            <a className="nav-link" href="/">CONTACT</a>
                        </li>
                    </ul>
                </div>
                <FontAwesomeIcon className="fas" icon={['fas', 'shopping-cart']} />
                <FontAwesomeIcon className="far" icon={['fas', 'user']} />
            </div>
        </nav>

        </>
    )}

export default Navbar
