import { useHistory } from "react-router-dom";
import authService from "../auth/auth.service";

function Header({ title, user, name }) {
    const history = useHistory();
    const logout = () => {
        authService.logout();
        history.push("/portal");
    };
    return (
        <div className={`row py-3 align-items-center mb-3 border-${name}`}>
            <div className="col">
                <h3 className="my-2">{title}</h3>
            </div>
            <div className="col text-end">
                <span className="border-end px-2 mx-2">{user}</span>
                <span
                    className="btn btn-link text-secondary text-decoration-none"
                    onClick={logout}
                >
                    Logout
                </span>
            </div>
        </div>
    );
}

export default Header;
