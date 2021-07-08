import { Link } from "react-router-dom";

function Button({ icon, title, name, path }) {
    return (
        <div className="col-lg-3 col-sm-12 mt-2">
            <Link
                to={`${path}`}
                className="d-block btn btn-lg btn-custom w-100 p-4"
            >
                {icon}

                <p
                    className={`fs-5 fw-light mt-2 pt-2 border-top-${name} ff-jumbo`}
                >
                    {title}
                </p>
            </Link>
        </div>
    );
}

export default Button;
