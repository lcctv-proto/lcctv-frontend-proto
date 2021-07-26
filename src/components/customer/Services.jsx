import logo from "../../assets/Images/logo.png";

function Services() {
    return (
        <div id="background">
            <div className="container-fluid tint text-light">
                <div className="row text-center pt-5 mb-5">
                    <div className="col py-5">
                        <h1>GET CONNECTED</h1>
                        <h4>CABLE SERVICES FOR YOUR HOME AND BUSINESS</h4>
                    </div>
                </div>
                <div className="row pb-5 justify-content-center">
                    <div className="col-lg-4 col-sm-12 px-5  text-light">
                        <h2 className="pb-2 border-gold-3">
                            ABOUT OUR ONLINE SERVICES
                        </h2>

                        <p className="text-justify fs-5">
                            <span className="ms-5">Welcome</span> to LAKE
                            COMMUNITY CABLE TV MULTI-PURPOSE COOPERATIVE, your
                            number one source for cable TV entertainment
                            services. We are dedicated to providing you the best
                            cable services, with a focus on dependability and
                            customer service.
                        </p>
                        <p className="text-justify fs-5 mb-5">
                            <span className="ms-5">We are</span> working to turn
                            our passion for LCCTVMPC into a booming company
                            improved with our new online web-based platform. We
                            hope you enjoy our services as much as we enjoy
                            offering them to you. If you have any questions or
                            comments, please don't hesitate to contact us.
                        </p>

                        <h4 className="w-75 pb-2 border-gold-2">
                            Television Programming
                        </h4>
                        <ul className="ms-5 mt-2 fs-5">
                            <li>Offers up to 120 SD Channels</li>
                            <li>Offers up to 54 HD Channels</li>
                            <li>Uses smart cards for your convenience</li>
                        </ul>

                        <h4 className="w-75 pb-2 border-gold-2">
                            Broadcasting Activities
                        </h4>
                        <ul className="ms-5 mt-2 fs-5">
                            <li>Pay-Per-View Broadcasting</li>
                            <li>Utilizes reliable digital technology</li>
                        </ul>

                        <h4 className="w-75 pb-2 border-gold-2">
                            Customer Services
                        </h4>
                        <ul className="ms-5 mt-2 fs-5">
                            <li>Technical Support</li>
                            <li>Inquiries</li>
                        </ul>
                    </div>
                    <div className="col-lg-4 d-none d-lg-block ms-lg-5 ps-lg-5 text-center">
                        <div className="row">
                            <div className="col">
                                <img src={logo} className="w-100" alt="" />
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col p-2 mx-auto">
                                <span className="h1 ff-logo">
                                    Lake Community Cable TV Multipurpose
                                    Cooperative
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
