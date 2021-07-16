import { Link } from "react-router-dom";
import logo from "../assets/Images/logo.png";

function NavbarPortal({ title, name, user }) {
    return (
        <nav
            className={`navbar navbar-expand-lg navbar-dark bg-navy text-light border-${name}`}
        >
            <div className="navbar-brand py-1 ps-3 me-0  text-decoration-none">
                <img
                    src={logo}
                    className="d-md-block mx-auto mb-2"
                    alt=""
                    height="75"
                />
                <span className="ms-3 pe-4 h6 text-center ff-logo">
                    Lake Community Cable TV
                </span>
            </div>
            <div className="px-3">
                <span className="fs-3">{title}</span>
                {/* <span className="ms-3 border-start ps-3 fs-5">Home</span> */}
            </div>

            <button
                className="navbar-toggler ms-auto me-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#nav-items"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse px-3 me-3" id="nav-items">
                <span className="fs-4 ms-auto">{user}</span>
                <Link
                    className="ms-3 border-start ps-3 fs-5 text-secondary text-decoration-none"
                    to="/portal"
                >
                    Log out
                </Link>
            </div>
        </nav>
    );
}

export default NavbarPortal;
