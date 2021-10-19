import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../auth/Auth";

function Header({ title, name }) {
    const { user, logout } = useContext(AuthContext);
    const history = useHistory();

    const handleLogout = () => {
        logout();
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
                    className="logout text-secondary text-decoration-none"
                    onClick={handleLogout}
                >
                    Logout
                </span>
            </div>
        </div>
    );
}

export default Header;
