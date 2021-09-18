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
                <div className="m-0 p-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                    >
                        <path
                            fill="#FFFFFF"
                            fill-opacity="1"
                            d="M0,160L40,170.7C80,181,160,203,240,186.7C320,171,400,117,480,90.7C560,64,640,64,720,69.3C800,75,880,85,960,80C1040,75,1120,53,1200,74.7C1280,96,1360,160,1400,192L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
                        ></path>
                    </svg>
                </div>
                <div className="col-12 p-0">
                    <div className="row mx-0 px-0">
                        <div className="col-xxl-8 p-0 mx-auto">
                            <h1 className="pb-3 border-gold-3">
                                YOUR PURE END-TO-END CABLE TV PROVIDER
                            </h1>
                            <p className="fs-5">
                                Upgrade your online experience at home, in your
                                business, or in the corporate world.
                            </p>
                            <p className="fs-5">
                                Get the plan that you deserve with Lake
                                Community Cable TV.
                            </p>
                            <Link
                                to="/about"
                                className="btn btn-warning btn-lg btn-gold-2 mt-auto"
                            >
                                Our Story
                            </Link>
                        </div>
                    </div>
                    <div className="row mt-5 mx-0 px-0">
                        <div className="col-xxl-8 p-0 mx-auto">
                            <div className="blob1 text-navy ">
                                <h1 className="pb-3 border-gold-3">
                                    BE A PART OF LAKE COMMUNITY CABLE TV
                                </h1>
                                <p className="fs-5">
                                    Binge-watch up to 176 channels (High
                                    Definition and Standard Definition) for as
                                    low as P640/month!
                                </p>
                                <Link
                                    to="/plans"
                                    className="btn btn-warning btn-lg btn-gold-2"
                                >
                                    Apply Now!
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 mx-0 px-0">
                        <div className="col-xxl-8 p-0 mx-auto">
                            <h1 className="pb-3 border-gold-3">
                                WHY CHOOSE LAKE COMMUNITY CABLE TV?
                            </h1>
                            <p className="fs-5">
                                We deliver end-to-end Pure Fiber Optic
                                connection to empower your home and business
                                with seamless internet experience, so you
                                experience better.
                            </p>
                            <Link
                                to="/services"
                                className="btn btn-warning btn-lg btn-gold-2 mt-auto"
                            >
                                Our Services
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="m-0 p-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                    >
                        <path
                            fill="#f8f9fa"
                            fill-opacity="1"
                            d="M0,256L120,229.3C240,203,480,149,720,144C960,139,1200,181,1320,202.7L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                        ></path>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
