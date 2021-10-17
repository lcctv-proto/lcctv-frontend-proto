import { useHistory } from "react-router-dom";
import authService from "../auth/auth.service";

import logo from "../assets/Images/logo.png";

function NavbarPortal({ title, name, user }) {
    const history = useHistory();
    const logout = () => {
        authService.logout();
        history.push("/portal");
    };
    return (
        <nav
            className={`navbar navbar-expand-lg navbar-dark bg-navy px-3 text-light border-${name}`}
        >
            <div className="navbar-brand py-0 px-3 text-decoration-none">
                <img
                    src={logo}
                    className="d-md-block mx-auto"
                    alt="logo"
                    height="75"
                />
                <span className="mx-auto h6 text-center ff-logo">
                    Lake Community Cable TV
                </span>
            </div>

            <div className="px-3">
                <span className="fs-3">{title}</span>
            </div>

            <button
                className="navbar-toggler ms-auto me-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#nav-items"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse px-3" id="nav-items">
                <span className="fs-5 ms-auto">{user}</span>

                <span
                    className="btn btn-link ms-3 border-start ps-3 fs-5 text-secondary text-decoration-none"
                    onClick={logout}
                >
                    Logout
                </span>
            </div>
        </nav>
    );
}

export default NavbarPortal;
