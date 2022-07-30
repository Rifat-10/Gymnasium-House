import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/brand/GymLogo.png';


const Header = () => {
    return (
        <nav id='blur' className="navbar fixed-top navbar-expand-lg navbar-light nav-bg p-0">
            <div className="container p-0">
                <NavLink className="navbar-brand text-uppercase brand text-dark" to="/home">
                    <img src={logo} alt="" width="50" height="50" />G y m N a t i o n</NavLink>
                <button className="me-2 navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                        <li className="nav-item ms-lg-4">
                            <NavLink className="navigation-link text-dark fw-bold" to="">Home</NavLink>
                        </li>
                        <li className="nav-item ms-lg-4">
                            <NavLink className="navigation-link text-dark fw-bold" to="/services">Services</NavLink>
                        </li>
                        <li className="nav-item ms-lg-4">
                            <NavLink className="navigation-link text-dark fw-bold" to="/workouts">Workouts</NavLink>
                        </li>
                        <li className="nav-item ms-lg-4">
                            <NavLink className="navigation-link text-dark fw-bold" to="/trainers">Trainers</NavLink>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Header;