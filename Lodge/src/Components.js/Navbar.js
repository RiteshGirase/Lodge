/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Logo from '../images/logo.png'

const Navbar = () => {
    return (
        <>
            {/* <!-- header --> */}
            <div className='container-fluid  bg-light'>
                <nav class="navbar navbar-expand-lg navbar-light container">
                    <a class="navbar-brand" href="/">Lodge</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto text-left text-center nav-texts">
                            <li class="nav-item">
                                <a class="nav-link hover-text " href="Home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link hover-text" href="Brand">Brand</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link hover-text" href="Special">Special</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link hover-text" href="Contact">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link hover-text" href="About">About</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            {/* <!-- end header --> */}

        </>
    )
}
export default Navbar;
