import { Link, useLocation } from "react-router-dom";
import altLogo from "../../assets/Images/logo_alt.png";

function Footer() {
    const isCustomer = !useLocation().pathname.includes("portal");

    if (isCustomer) {
        return (
            <>
                <footer className="bg-light p-2 p-xl-5 ff-nunito">
                    <div className="container">
                        <div className="row justify-content-center align-items-center gx-5">
                            <div className="col-12 col-lg-auto text-navy text-center">
                                <Link to="/" className="d-block">
                                    <img
                                        height="150"
                                        className="d-block mx-auto"
                                        src={altLogo}
                                        alt=""
                                    />
                                </Link>
                                <span className="fs-5 ff-logo ">
                                    Lake Community Cable TV
                                </span>
                                <span className="fs-5 ff-logo text-center d-xl-block ms-1 ms-xl-0">
                                    Multipurpose Cooperative
                                </span>
                            </div>

                            <div className="col-12 col-xl-2 p-3">
                                <h5 className="border-bottom border-dark">
                                    SERVICES
                                </h5>
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

                            <div className="col-12 col-xl-2 p-3">
                                <h5 className="border-bottom border-dark">
                                    OUR COMPANY
                                </h5>
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

                            <div className="col-12 col-xl-2 p-3">
                                <h5 className="border-bottom border-dark">
                                    HELPFUL LINKS
                                </h5>
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
                            <div className="col-12 col-xl-3 p-3">
                                <iframe
                                    className="d-block mx-auto shadow border-0"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2368.594677387614!2d121.32316158513572!3d14.072248015335425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb2d20f46e6a2a7fd!2sLAKE%20COMMUNITY%20CABLE%20TV%20MULTI-SUPPOSE%20COOPERATIVE!5e0!3m2!1sen!2sph!4v1618666168055!5m2!1sen!2sph"
                                    width="300"
                                    height="200"
                                    allowFullScreen
                                    loading="lazy"
                                    title="map"
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
