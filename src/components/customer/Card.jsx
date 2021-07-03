import { Link } from "react-router-dom";
import {
    Star,
    StarFill,
    Tv,
    FileDiff,
    CreditCard2Back,
    Hdd,
} from "react-bootstrap-icons";

function Card({ title, price, SDchannels, HDchannels }) {
    return (
        <div className="card border-0 rounded-3 shadow-lg">
            <div className="card-header p-4 text-light text-center bg-navy border-gold-7">
                <h1 className="text-gold">{title}</h1>
                <h5 className="text-gold">₱{price}</h5>
            </div>
            <div className="card-body">
                <h2 className="text-center text-navy">
                    <StarFill />
                    {title !== "BASIC" ? <StarFill /> : <Star />}
                    {title === "INTERNATIONAL" ? <StarFill /> : <Star />}
                </h2>
                <hr />
                <p className="card-text">Comes With:</p>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <div className="d-inline-flex">
                            <p className="h5 text-navy">
                                <Tv className="me-3 h1" />
                                <Link to="/channels" className="text-navy">
                                    {SDchannels} SD PLUS {HDchannels} HD
                                    Channels *
                                </Link>
                            </p>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="d-inline-flex">
                            <p className="h5 text-navy">
                                <FileDiff className="me-3 h1" />
                                Remote
                            </p>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="d-inline-flex">
                            <p className="h5 text-navy">
                                <CreditCard2Back className="me-3 h1" />
                                Smart Card
                            </p>
                        </div>
                    </li>

                    <li className="list-group-item">
                        <div className="d-inline-flex">
                            <p className="h5 text-navy">
                                <Hdd className="me-3 h1" />
                                Digital Box
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="card-footer border-top-0 bg-white">
                <Link
                    className="btn btn-lg d-block btn-warning w-50 mb-2 p-2 mx-auto fw-bolder text-navy bg-gold"
                    to="/apply"
                    role="button"
                >
                    APPLY NOW!
                </Link>
            </div>
        </div>
    );
}

export default Card;
