import React from 'react'

export const Navbar = () => {
    return (
        <nav>
            <div class="nav-wrapper navbar-blue">
                <div className="container">
                    <a href="#" class="brand-logo">JWT Auth</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
