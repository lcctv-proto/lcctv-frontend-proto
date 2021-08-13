import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import { useEffect } from "react";
import NavItem from "./NavItem";

function Navbar() {
    const location = useLocation().pathname;
    const isCustomer = !location.includes("portal");

    const navItems = [
        {
            name: "PLANS",
            paths: ["/plans", "/apply"],
        },
        {
            name: "CHANNELS",
            paths: ["/channels", "/channel/*"],
        },
        {
            name: "APPLICATIONS",
            paths: ["/applications", "/applications/*"],
        },
        {
            name: "ABOUT US",
            paths: ["/about"],
        },
        {
            name: "CONTACT US",
            paths: ["/contact", "/general", "/technical"],
        },
        {
            name: "SERVICE CATALOG",
            paths: ["/services"],
        },
    ];

    useEffect(() => {
        let collapse = document.getElementById("nav-items");

        if (isCustomer)
            if (collapse.classList.contains("show"))
                collapse.classList.remove("show");
    });

    if (isCustomer) {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-navy border-gold-2">
                <Link
                    className="navbar-brand px-2 mx-2 text-light text-decoration-none"
                    to="/"
                >
                    <img
                        src={logo}
                        className="d-md-block mx-auto mb-md-2"
                        alt=""
                        height="75"
                    />
                    <p className="m-0 d-inline ms-2 ms-lg-0 d-md-block h6 text-center ff-logo">
                        Lake Community Cable TV
                    </p>
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
                        {navItems.map((navItem, i) => (
                            <NavItem
                                name={navItem.name}
                                location={location}
                                paths={navItem.paths}
                                key={i}
                            />
                        ))}
                    </ul>
                </div>
            </nav>
        );
    } else return <></>;
}

export default Navbar;
