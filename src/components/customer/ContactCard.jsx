import { Link } from "react-router-dom";

function ContactCard({ title, desc, path, icon, isLast }) {
    return (
        <div
            className={`col-lg-4 col-sm-9 mt-3 mt-lg-0 px-5 text-navy ${
                isLast ? "" : "border-end-3"
            }`}
        >
            <Link to={`/${path}`} className="text-decoration-none text-navy">
                {icon}
                <span className="fs-4 pb-3 fw-bolder text-wrap d-block border-gold-3">
                    {title}
                </span>
            </Link>
            <span className="fs-6 mt-3 text-wrap d-block ">{desc}</span>
        </div>
    );
}

export default ContactCard;
