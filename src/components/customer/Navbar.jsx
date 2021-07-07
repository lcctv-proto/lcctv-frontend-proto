import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import { CircleFill } from "react-bootstrap-icons";
import "../styles.css";
import { useEffect } from "react";

function Navbar() {
    const location = useLocation().pathname;

    useEffect(() => {
        let collapse = document.getElementById("nav-items");
        if (collapse.classList.contains("show"))
            collapse.classList.remove("show");
    });

    if (!location.includes("portal")) {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-navy">
                <Link
                    className="navbar-brand py-1 ps-3 me-0 text-light text-decoration-none"
                    to="/"
                >
                    <img
                        src={logo}
                        className="d-md-block mx-auto mb-2"
                        alt=""
                        height="75"
                    />
                    <span className="ms-3 pe-4 h6 text-center ff-logo">
                        Lake Community Cable TV
                    </span>
                </Link>
                <button
                    className="navbar-toggler me-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#nav-items"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="nav-items">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                        <li className="nav-item px-2">
                            <Link
                                className={`nav-link ${
                                    location === "/plans" ? "active" : ""
                                }`}
                                to="/plans"
                            >
                                <CircleFill
                                    className={`text-gold me-2 ${
                                        location === "/plans"
                                            ? "d-inline"
                                            : "d-none"
                                    }`}
                                    style={{ fontSize: "x-small" }}
                                />
                                PLANS
                            </Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link
                                className={`nav-link ${
                                    location === "/channels" ? "active" : ""
                                }`}
                                to="/channels"
                            >
                                <CircleFill
                                    className={`text-gold me-2 ${
                                        location === "/channels"
                                            ? "d-inline"
                                            : "d-none"
                                    }`}
                                    style={{ fontSize: "x-small" }}
                                />
                                CHANNELS
                            </Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link
                                className={`nav-link ${
                                    location === "/applications" ? "active" : ""
                                }`}
                                to="/applications"
                            >
                                <CircleFill
                                    className={`text-gold me-2 ${
                                        location === "/applications"
                                            ? "d-inline"
                                            : "d-none"
                                    }`}
                                    style={{ fontSize: "x-small" }}
                                />
                                APPLICATIONS
                            </Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link
                                className={`nav-link ${
                                    location === "/about" ? "active" : ""
                                }`}
                                to="/about"
                            >
                                <CircleFill
                                    className={`text-gold me-2 ${
                                        location === "/about"
                                            ? "d-inline"
                                            : "d-none"
                                    }`}
                                    style={{ fontSize: "x-small" }}
                                />
                                ABOUT US
                            </Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link
                                className={`nav-link ${
                                    location === "/contact" ||
                                    location === "/general" ||
                                    location === "/technical"
                                        ? "active"
                                        : ""
                                }`}
                                to="/contact"
                            >
                                <CircleFill
                                    className={`text-gold me-2 ${
                                        location === "/contact" ||
                                        location === "/general" ||
                                        location === "/technical"
                                            ? "d-inline"
                                            : "d-none"
                                    }`}
                                    style={{ fontSize: "x-small" }}
                                />
                                CONTACT US
                            </Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link
                                className={`nav-link ${
                                    location === "/services" ? "active" : ""
                                }`}
                                to="/services"
                            >
                                <CircleFill
                                    className={`text-gold me-2 ${
                                        location === "/services"
                                            ? "d-inline"
                                            : "d-none"
                                    }`}
                                    style={{ fontSize: "x-small" }}
                                />
                                SERVICE CATALOG
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    } else return <></>;
}

export default Navbar;
