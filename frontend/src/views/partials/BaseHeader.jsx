import React from "react";
import { Link } from "react-router-dom";

function BaseHeader() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        Cavepainter
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/pages/contact-us/">
                                    {" "}
                                    <i className="fas fa-phone"></i> Contact Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/pages/about-us/">
                                    <i className="fas fa-address-card"></i> About Us
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="fas fa-chalkboard-user"></i> Options
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to={`/user/dashboard/`}
                                        >
                                            <i className="bi bi-grid-fill"></i> Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to={`/user/my-files/`}>
                                            <i className="fas fa-shopping-cart"></i> My Files
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to={`/user/translate/`}
                                        >
                                            <i className="fas fa-plus"></i> Translate
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to={`/user/profile/`}>
                                            <i className="fas fa-gear"></i> Settings & Profile{" "}
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2 w-100"
                                type="search"
                                placeholder="Search Cavepainter"
                                aria-label="Search Cavepainter"
                            />
                            <button className="btn btn-outline-success w-50" type="submit">
                                Search <i className="fas fa-search"></i>
                            </button>
                        </form>
                        <Link to="/login/" className="btn btn-primary ms-2" type="submit">
                            Login <i className="fas fa-sign-in-alt"></i>
                        </Link>
                        <Link to="/register/" className="btn btn-primary ms-2" type="submit">
                            Register <i className="fas fa-user-plus"> </i>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default BaseHeader;
