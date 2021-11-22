import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/Images/logo.png";
import { useEffect } from "react";

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
            paths: ["/channels", "/channel"],
        },
        {
            name: "APPLICATIONS",
            paths: ["/applications", "/application"],
        },
        {
            name: "ABOUT US",
            paths: ["/about"],
        },
        {
            name: "CONTACT US",
            paths: ["/contact", "/general", "/technical", "/payment"],
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
                    className="navbar-brand px-2 mx-2 text-light text-decoration-none align-items-center"
                    to="/"
                >
                    <img
                        src={logo}
                        className="mx-auto mb-md-2 me-3"
                        alt=""
                        height="75"
                    />
                    <span className="m-0 d-inline ms-lg-0 h6 text-center ff-logo pe-3 border-end">
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

                <div
                    className="collapse navbar-collapse text-center"
                    id="nav-items"
                >
                    <span className="h3 text-light">SUBSCRIBER MODULE</span>

                    <div className="me-4 ms-auto text-light text-center my-4 my-lg-0">
                        Still not registered?
                        <Link
                            to="/apply"
                            className="ms-1 mx-auto w-25 d-lg-inline text-light text-center "
                        >
                            Apply Now!
                        </Link>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
