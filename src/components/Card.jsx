import { Link } from "react-router-dom";

function Card({ title, path, name, setShow, icon }) {
    return (
        <div className="col-lg-2 mt-2">
            <Link
                to={`/portal/${path}`}
                className={`btn btn-lg btn-card w-100 d-flex flex-column text-start btn-${name}`}
                onClick={() => setShow(false)}
            >
                <span className="fs-6"> LCCTV </span>
                <img
                    src={icon}
                    className={`mt-auto h-50 pb-0 w-50 mx-auto border-${name}`}
                    alt="icon"
                />
                <span className="mt-5 text-center fw-bold title">
                    {title} PORTAL
                </span>
            </Link>
        </div>
    );
}

export default Card;
