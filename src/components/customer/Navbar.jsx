import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import { CircleFill } from "react-bootstrap-icons";
import "../styles.css";
import "./customer_styles.css";

function Navbar() {
    const [activeTab, setActiveTab] = useState(false);
    const location = useLocation().pathname;
    if (!location.includes("portal")) {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-navy">
                <Link
                    className="navbar-brand py-1 ps-3 me-0 text-light text-decoration-none"
                    to="/"
                >
                    <img
                        src={logo}
                        className="d-block mx-auto mb-2"
                        alt=""
                        height="75"
                    />
                    <p className="ms-3 pe-4 h6 text-center  ff-logo">
                        Lake Community Cable TV
                    </p>
                </Link>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li
                        className="nav-item px-3"
                        onClick={() => setActiveTab("plans")}
                    >
                        <Link
                            className={`nav-link ${
                                activeTab === "plans" ? "active" : ""
                            }`}
                            to="/plans"
                        >
                            <CircleFill
                                className={`text-gold me-2 ${
                                    activeTab === "plans"
                                        ? "d-inline"
                                        : "d-none"
                                }`}
                                style={{ fontSize: "x-small" }}
                            />
                            PLANS
                        </Link>
                    </li>
                    <li
                        className="nav-item px-2"
                        onClick={() => setActiveTab("channels")}
                    >
                        <Link
                            className={`nav-link ${
                                activeTab === "channels" ? "active" : ""
                            }`}
                            to="/channels"
                        >
                            <CircleFill
                                className={`text-gold me-2 ${
                                    activeTab === "channels"
                                        ? "d-inline"
                                        : "d-none"
                                }`}
                                style={{ fontSize: "x-small" }}
                            />
                            CHANNELS
                        </Link>
                    </li>
                    <li
                        className="nav-item px-2"
                        onClick={() => setActiveTab("applications")}
                    >
                        <Link
                            className={`nav-link ${
                                activeTab === "applications" ? "active" : ""
                            }`}
                            to="/applications"
                        >
                            <CircleFill
                                className={`text-gold me-2 ${
                                    activeTab === "applications"
                                        ? "d-inline"
                                        : "d-none"
                                }`}
                                style={{ fontSize: "x-small" }}
                            />
                            APPLICATIONS
                        </Link>
                    </li>
                    <li
                        className="nav-item px-2"
                        onClick={() => setActiveTab("about")}
                    >
                        <Link
                            className={`nav-link ${
                                activeTab === "about" ? "active" : ""
                            }`}
                            to="/about"
                        >
                            <CircleFill
                                className={`text-gold me-2 ${
                                    activeTab === "about"
                                        ? "d-inline"
                                        : "d-none"
                                }`}
                                style={{ fontSize: "x-small" }}
                            />
                            ABOUT US
                        </Link>
                    </li>
                    <li
                        className="nav-item px-2"
                        onClick={() => setActiveTab("contact")}
                    >
                        <Link
                            className={`nav-link ${
                                activeTab === "contact" ? "active" : ""
                            }`}
                            to="/contact"
                        >
                            <CircleFill
                                className={`text-gold me-2 ${
                                    activeTab === "contact"
                                        ? "d-inline"
                                        : "d-none"
                                }`}
                                style={{ fontSize: "x-small" }}
                            />
                            CONTACT US
                        </Link>
                    </li>
                    <li
                        className="nav-item px-2"
                        onClick={() => setActiveTab("services")}
                    >
                        <Link
                            className={`nav-link ${
                                activeTab === "services" ? "active" : ""
                            }`}
                            to="/services"
                        >
                            <CircleFill
                                className={`text-gold me-2 ${
                                    activeTab === "services"
                                        ? "d-inline"
                                        : "d-none"
                                }`}
                                style={{ fontSize: "x-small" }}
                            />
                            SERVICE CATALOG
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    } else return <></>;
}

export default Navbar;
