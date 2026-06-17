import React from "react";
import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../data";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} className="nav-logo" alt="backroads logo" />

                    <button
                        type="button"
                        className="nav-toggle"
                        id="nav-toggle"
                        aria-label="toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                </div>

                <ul className="nav-links" id="nav-links">
                    {pageLinks &&
                        pageLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={link.href ? link.href : "#!"}
                                    className="nav-link"
                                >
                                    {link.text ? link.text : "link"}
                                </a>
                            </li>
                        ))}
                </ul>

                <ul className="nav-icons">
                    {socialLinks &&
                        socialLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={link.href ? link.href : "#!"}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={link.icon ? link.icon : ""}
                                    aria-label={
                                        link.text ? link.text : "social link"
                                    }
                                >
                                    <span className="sr-only">
                                        {link.text ? link.text : "social"}
                                    </span>
                                </a>
                            </li>
                        ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
