import React from "react";
import logo from '../logo.svg';

export default function Header(){
    return (
        <header>
            <nav className="Navbar">
                <div className="Logo">
                    <img className="img-react" src={logo} alt="" />
                    <h2 className="logo-react-text">ReactFacts</h2>
                </div>
                <div>
                    <span className="project-text">React Course - Project 1</span>
                </div>
            </nav>
        </header>
    )
}