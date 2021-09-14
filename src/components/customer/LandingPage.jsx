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
            <div className="row justify-content-center bg-black text-white p-5">
                <div className="col-lg-4 d-flex flex-column p-3 ">
                    <h1 className="pb-3 border-gold-3">
                        YOUR PURE END-TO-END CABLE TV PROVIDER
                    </h1>
                    <p className="fs-5">
                        Upgrade your online experience at home, in your
                        business, or in the corporate world.
                    </p>
                    <p className="fs-5">
                        Get the plan that you deserve with Lake Community Cable
                        TV.
                    </p>
                    <Link
                        to="/about"
                        className="btn btn-warning btn-lg btn-gold-2 mt-auto"
                    >
                        Our Story
                    </Link>
                </div>
                <div className="col-lg-4 d-flex flex-column p-3 mt-5 mt-lg-0">
                    <h1 className="pb-3 border-gold-3">
                        BE A PART OF LAKE COMMUNITY CABLE TV
                    </h1>
                    <p className="fs-5">gagawin ni jester pangit -cho</p>
                    <Link
                        to="/plans"
                        className="btn btn-warning btn-lg btn-gold-2 mt-auto"
                    >
                        Apply Now!
                    </Link>
                </div>
                <div className="col-lg-4 d-flex flex-column p-3 mt-5 mt-lg-0">
                    <h1 className="pb-3 border-gold-3">
                        WHY CHOOSE LAKE COMMUNITY CABLE TV?
                    </h1>
                    <p className="fs-5">
                        We deliver end-to-end Pure Fiber Optic connection to
                        empower your home and business with seamless internet
                        experience, so you experience better.
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
    );
}

export default LandingPage;
