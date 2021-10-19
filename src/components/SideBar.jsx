import { Speedometer2, BoxArrowLeft } from "react-bootstrap-icons";
import logo from "../assets/Images/logo.png";
import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../auth/Auth";

import NavItem from "./NavItem";

function SideBar({ title, name, path, navItems }) {
    const { user, logout } = useContext(AuthContext);
    const history = useHistory();

    const handleLogout = () => {
        logout();
        history.push("/portal");
    };

    return (
        <div className="d-flex flex-column py-3 bg-navy text-light sidebar">
            <div className={`text-center pb-3 m-3 border-${name}`}>
                <img
                    src={logo}
                    className="d-md-block mx-auto my-3"
                    alt="logo"
                    height="100"
                />
                <span className="h3 ff-logo">Lake Community Cable TV</span>
            </div>
            <span className="mx-auto fs-5 fw-bold">{title}</span>
            <span className="ms-3 mt-4 fs-6">
                Hello, <span className={`fst-italic text-${name}`}>{user}</span>{" "}
                !
            </span>

            <ul className="nav flex-column mt-3 mb-auto fs-5">
                <li className="nav-item">
                    <Link
                        className={`nav-link hover-${name} text-light`}
                        to={`/portal/${path}/`}
                    >
                        <Speedometer2 />
                        <span className="align-middle mx-3">DASHBOARD</span>
                    </Link>
                </li>
                {navItems.map((navItem, index) => (
                    <NavItem name={name} navItem={navItem} key={index} />
                ))}
            </ul>

            <ul className="nav flex-column fs-5">
                <li className="nav-item bg-dark-navy">
                    <span
                        className={`logout nav-link text-light hover-${name}`}
                        onClick={handleLogout}
                    >
                        <BoxArrowLeft />
                        <span className="align-middle mx-3">LOGOUT</span>
                    </span>
                </li>
            </ul>
        </div>
    );
}

export default SideBar;
