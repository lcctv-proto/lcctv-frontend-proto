import { Link } from "react-router-dom";
import { CircleFill } from "react-bootstrap-icons";

function NavItem({ name, location, paths }) {
    const isActive =
        paths.indexOf(location) > -1 ||
        paths.indexOf(`/${location.toString().split("/")[1]}`) > -1;

    return (
        <li className="nav-item">
            <Link
                className={`d-flex justify-content-center align-items-center nav-link ${
                    isActive && "active"
                }`}
                to={`${paths[0]}`}
            >
                {isActive && <CircleFill className="text-gold mx-2 xsmall" />}
                {name}
            </Link>
        </li>
    );
}

export default NavItem;
