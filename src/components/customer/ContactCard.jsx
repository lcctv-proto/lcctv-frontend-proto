import { Link } from "react-router-dom";
import {
    Tools,
    CreditCard2Front,
    QuestionOctagon,
} from "react-bootstrap-icons";

function ContactCard({ title, desc, path, icon, isLast }) {
    return (
        <div
            className={`col-lg-3 col-sm-9 mb-5 px-5 ${
                isLast ? "" : "border-end-3"
            }`}
        >
            <Link to={`/${path}`} className="text-decoration-none text-navy">
                {icon === "Tools" ? (
                    <Tools
                        className="zoom d-block mx-auto mb-3"
                        style={{ fontSize: "5rem" }}
                    />
                ) : (
                    <></>
                )}
                {icon === "CreditCard2Front" ? (
                    <CreditCard2Front
                        className="zoom d-block mx-auto mb-3"
                        style={{ fontSize: "5rem" }}
                    />
                ) : (
                    <></>
                )}
                {icon === "QuestionOctagon" ? (
                    <QuestionOctagon
                        className="zoom d-block mx-auto mb-3"
                        style={{ fontSize: "5rem" }}
                    />
                ) : (
                    <></>
                )}
                <span className="fs-4 pb-3 fw-bolder text-wrap d-block border-gold-3">
                    {title}
                </span>
            </Link>
            <span className="fs-6 mt-3 text-wrap d-block text-navy">
                {desc}
            </span>
        </div>
    );
}

export default ContactCard;
