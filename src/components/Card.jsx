import admin from "../assets/Icons/exe.svg";
import cashier from "../assets/Icons/xls.svg";
import ceo from "../assets/Icons/ppt.svg";
import front from "../assets/Icons/gif.svg";
import jo from "../assets/Icons/doc.svg";
import tech from "../assets/Icons/bat.svg";

import { Link } from "react-router-dom";

function Card({ title, path, name, changeBackground }) {
    let file;

    switch (name) {
        case "admin":
            file = admin;
            break;
        case "cashier":
            file = cashier;
            break;
        case "ceo":
            file = ceo;
            break;
        case "front":
            file = front;
            break;
        case "jo":
            file = jo;
            break;
        case "tech":
            file = tech;
            break;
        default:
            break;
    }

    return (
        <div className="col-lg-2 mt-2">
            <Link
                to={`/portal/${path}/login`}
                className={`btn btn-lg btn-card w-100 d-flex flex-column text-start btn-${name}`}
                onClick={changeBackground}
            >
                <span className="fs-6"> LCCTV </span>
                <img
                    src={file}
                    className={`mt-auto h-50 pb-0 w-50 mx-auto border-${name}`}
                    alt={file}
                />
                <span className="mt-5 text-center fw-bold title">
                    {title} PORTAL
                </span>
            </Link>
        </div>
    );
}

export default Card;
