import { Link, useLocation } from "react-router-dom";
import altLogo from "../../assets/Images/logo_alt.png";
import "../styles.css";

function Footer() {
    const location = useLocation();

    if (!location.pathname.includes("portal")) {
        return (
            <>
                <footer className="bg-light p-5 ff-nunito">
                    <div className="container">
                        <div className="row">
                            <div className="col-auto mx-auto">
                                <Link to="/" className="d-block">
                                    <img
                                        height="150"
                                        className="d-block mx-auto"
                                        src={altLogo}
                                        alt=""
                                    />
                                </Link>
                                <p className="text-center fs-5 ff-logo text-navy">
                                    Lake Community Cable TV <br />
                                    Multipurpose Cooperative
                                </p>
                            </div>

                            <div className="col-2 mt-4 ms-5  d-none d-xxl-block">
                                <h5>SERVICES</h5>
                                <ul className="list-unstyled text-small">
                                    <li>
                                        <Link
                                            className="text-dark ms-2"
                                            to="/plans"
                                        >
                                            Plan Offerings
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="text-dark ms-2"
                                            to="/applications"
                                        >
                                            Application Status
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="text-dark ms-2"
                                            to="/channels"
                                        >
                                            Channel List
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-2 mt-4 ms-5 d-none d-xxl-block">
                                <h5>ABOUT US</h5>
                                <ul className="list-unstyled text-small">
                                    <li>
                                        <Link
                                            className="text-dark ms-2"
                                            to="/about"
                                        >
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-dark ms-2" to="/">
                                            News
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-dark ms-2" to="/">
                                            Careers
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-2 mt-4 ms-5 d-none d-xxl-block">
                                <h5>HELPFUL LINKS</h5>
                                <ul className="list-unstyled text-small">
                                    <li>
                                        <Link
                                            className="text-dark ms-2"
                                            to="/contact"
                                        >
                                            Customer Support
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-dark ms-2" to="/">
                                            Payment Portals
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="text-dark ms-2"
                                            to="/services"
                                        >
                                            FAQ
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-2  d-none d-xxl-block">
                                <iframe
                                    className="shadow"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2368.594677387614!2d121.32316158513572!3d14.072248015335425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb2d20f46e6a2a7fd!2sLAKE%20COMMUNITY%20CABLE%20TV%20MULTI-SUPPOSE%20COOPERATIVE!5e0!3m2!1sen!2sph!4v1618666168055!5m2!1sen!2sph"
                                    width="300"
                                    height="200"
                                    style={{ border: "0" }}
                                    allowFullScreen
                                    loading="lazy"
                                    title="asd"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </footer>
                <footer className="footer bg-secondary py-3 text-center text-light">
                    © 2021 Lake Community Cable TV All rights reserved.
                </footer>
            </>
        );
    } else return <></>;
}

export default Footer;
