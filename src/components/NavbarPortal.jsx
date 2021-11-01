import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../auth/Auth";
import logo from "../assets/Images/logo.png";

function NavbarPortal({ title, name }) {
    const { user, logout } = useContext(AuthContext);
    const history = useHistory();
    const handleLogout = () => {
        logout();
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
                <span className="fs-3">{title} MODULE</span>
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
                <span className="fs-5 ms-auto">
                    Hello,{" "}
                    <span className={`fst-italic text-${name}`}>{user}</span> !
                </span>

                <span
                    className="btn btn-outline-light ms-3 px-3 fs-5 text-decoration-none"
                    onClick={handleLogout}
                >
                    Logout
                </span>
            </div>
        </nav>
    );
}

export default NavbarPortal;
