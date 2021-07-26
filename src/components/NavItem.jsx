import { NavLink } from "react-router-dom";

function NavItem({ name, navItem }) {
    return (
        <li className="nav-item">
            <NavLink
                className={`d-flex align-items-center nav-link hover-${name} px-3`}
                activeClassName="nav-active"
                to={`/portal${navItem.path}`}
            >
                {navItem.icon}
                <span className="align-middle mx-3">{navItem.title}</span>
                {navItem.count && (
                    <span className="ms-auto badge bg-danger">
                        {navItem.count}
                    </span>
                )}
            </NavLink>
        </li>
    );
}

export default NavItem;
