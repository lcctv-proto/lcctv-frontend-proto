import logo from "../../assets/Images/logo_alt.png";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

function LandingPage() {
    const prefix =
        "https://raw.githubusercontent.com/lcctv-proto/lcctv-proto.github.io/main/CustomerView/Images/";
    const marqueeItems = [
        "AFN.png",
        "AXN.jpg",
        "Animax.jpg",
        "CAI.jpg",
        "FOX.jpg",
        "GEM.jpg",
        "GMA.png",
        "K.jpg",
        "METRO.jpg",
        "TLC.png",
        "fn.png",
        "cnn.png",
        "mtv.png",
        "ng.png",
        "dj.png",
        "cnbc.png",
        "jtv.png",
        "nba.png",
        "disney.png",
        "Nick.png",
        "ginx.png",
        "bbc.png",
    ];

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col mt-5">
                    <img
                        src={logo}
                        alt="logo"
                        height="300"
                        className="d-block mx-auto"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col text-center text-navy ff-logo fs-1">
                    <span className="d-block">Lake Community Cable TV</span>
                    <span className="d-block">Multipurpose Cooperative</span>
                </div>
            </div>
            <Marquee className="my-3" speed={100}>
                {marqueeItems.map((value, i) => {
                    return (
                        <img
                            src={`${prefix}${value}`}
                            key={i}
                            alt={value}
                            height={100}
                        />
                    );
                })}
            </Marquee>
            <div className="row bg-dark-navy text-white">
                <div className="row wave1 m-0 p-0 bg-white"></div>
                <div className="col-12 p-0">
                    <div className="row m-0 px-0">
                        <div className="col-xxl-7 p-0 mx-auto text-navy">
                            <div className="outer-blob blob4">
                                <div className="inner-blob blob3">
                                    <h1 className="pb-3 border-gold-3 align-self-start align-self-lg-center">
                                        YOUR PURE END-TO-END CABLE TV PROVIDER
                                    </h1>
                                    <p className="fs-5 align-self-start align-self-lg-center">
                                        Upgrade your online experience at home,
                                        in your business, or in the corporate
                                        world.
                                    </p>
                                    <p className="fs-5 align-self-start align-self-lg-center">
                                        Get the plan that you deserve with Lake
                                        Community Cable TV.
                                    </p>
                                    <Link
                                        to="/about"
                                        className="btn btn-warning btn-lg btn-gold-2 align-self-start align-self-md-center"
                                    >
                                        Our Story
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row m-0 px-0">
                        <div className="col-xxl-7 p-0 mx-auto text-navy">
                            <div className="outer-blob blob2">
                                <div className="inner-blob blob1">
                                    <h1 className="pb-3 border-gold-3 align-self-start align-self-lg-center">
                                        JOIN LAKE COMMUNITY CABLE TV NOW!
                                    </h1>
                                    <p className="fs-5 align-self-start align-self-lg-center">
                                        Binge-watch up to 176 channels (High
                                        Definition and Standard Definition) for
                                        as low as P640/month!
                                    </p>
                                    <Link
                                        to="/plans"
                                        className="btn btn-warning btn-lg btn-gold-2 align-self-start align-self-md-center"
                                    >
                                        Apply Now!
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row m-0 px-0">
                        <div className="col-xxl-7 p-0 mx-auto text-navy">
                            <div className="outer-blob blob6">
                                <div className="inner-blob blob5">
                                    <h1 className="pb-3 border-gold-3 align-self-start align-self-lg-center">
                                        WHY CHOOSE LAKE COMMUNITY CABLE TV?
                                    </h1>
                                    <p className="fs-5 align-self-start align-self-lg-center">
                                        We deliver pure end-to-end cable
                                        connection to empower your home with
                                        seamless watching experience,
                                    </p>
                                    <p className="fs-5 align-self-start align-self-lg-center">
                                        so you experience better.
                                    </p>

                                    <Link
                                        to="/services"
                                        className="btn btn-warning btn-lg btn-gold-2 align-self-start align-self-md-center"
                                    >
                                        Our Services
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wave2 m-0 p-0 bg-light"></div>
            </div>
        </div>
    );
}

export default LandingPage;
