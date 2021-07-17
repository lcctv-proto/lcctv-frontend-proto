import { Speedometer2, BoxArrowLeft } from "react-bootstrap-icons";
import logo from "../assets/Images/logo.png";
import { NavLink } from "react-router-dom";

function SideBar({ title, name, navItems }) {
    return (
        <div className="d-flex flex-column py-3 bg-navy text-light sidebar">
            <div className={`text-center pb-3 m-3 border-${name}`}>
                <img
                    src={logo}
                    className="d-md-block mx-auto my-3"
                    alt=""
                    height="100"
                />
                <span className="h3 ff-logo">Lake Community Cable TV</span>
            </div>
            <span className="mx-auto fs-5">{title}</span>

            <ul className="nav flex-column mt-3 mb-auto fs-5">
                <li className="nav-item">
                    <NavLink
                        className={`nav-link hover-${name} px-3 text-light`}
                        to="#"
                    >
                        <Speedometer2 />
                        <span className="align-middle mx-3">DASHBOARD</span>
                    </NavLink>
                </li>
                {navItems.map((navItem, i) => (
                    <li className="nav-item" key={i}>
                        <NavLink
                            className={`nav-link hover-${name} px-3`}
                            activeClassName="nav-active"
                            to={`/portal/tech/${navItem.path}`}
                        >
                            {navItem.icon}
                            <span className="align-middle mx-3">
                                {navItem.title}
                            </span>
                        </NavLink>
                    </li>
                ))}
            </ul>

            <ul className="nav nav-pills flex-column fs-5">
                <li className="nav-item">
                    <NavLink
                        className={`nav-link hover-${name} px-3 text-light`}
                        activeClassName="nav-active"
                        to="#"
                    >
                        <BoxArrowLeft />
                        <span className="align-middle mx-3">LOGOUT</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default SideBar;
