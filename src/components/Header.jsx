import { Link } from "react-router-dom";

function Header({ title, user, name }) {
    return (
        <div className={`row py-3 align-items-center border-${name}`}>
            <div className="col">
                <h3 className="my-2">{title}</h3>
            </div>
            <div className="col text-end">
                <span className="border-end px-2 mx-2">{user}</span>
                <Link className="text-decoration-none text-secondary" to="#">
                    Logout
                </Link>
            </div>
        </div>
    );
}

export default Header;
