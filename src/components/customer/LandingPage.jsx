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

    const items = [
        {
            inner: "blob3",
            outer: "blob4",
            header: "YOUR PURE END-TO-END CABLE TV PROVIDER",
            description: [
                {
                    text: "Upgrade your online experience at home, in your business, or in the corporate world.",
                },
                {
                    text: "Get the plan that you deserve with Lake Community Cable TV.",
                },
            ],
            buttonText: "Our Story",
            link: "/about",
        },
        {
            inner: "blob1",
            outer: "blob2",
            header: "JOIN LAKE COMMUNITY CABLE TV NOW!",
            description: [
                {
                    text: "Binge-watch up to 176 channels (High Definition and Standard Definition) for as low as P640/month!",
                },
            ],
            buttonText: "Apply Now!",
            link: "/apply",
        },
        {
            inner: "blob5",
            outer: "blob6",
            header: "WHY CHOOSE LAKE COMMUNITY CABLE TV?",
            description: [
                {
                    text: "We deliver pure end-to-end cable connection to empower your home with seamless watching experience,",
                    sub: "so you experience better.",
                },
            ],
            buttonText: "Our Services",
            link: "/services",
        },
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
                    {items.map((value, index) => {
                        return (
                            <div className="row m-0 px-0" key={index}>
                                <div className="col-xxl-6 p-0 align-self-start  mx-auto text-navy">
                                    <div
                                        className={`outer-blob ${value.outer}`}
                                    >
                                        <div
                                            className={`inner-blob ${value.inner} fs-5 align-items-start`}
                                        >
                                            <h1 className="mx-md-5 pb-3 border-gold-3 align-self-lg-center">
                                                {value.header}
                                            </h1>
                                            {value.description.map(
                                                (description, index) => {
                                                    return (
                                                        <p
                                                            className="mx-md-5 align-self-lg-center"
                                                            key={index}
                                                        >
                                                            {description.text}
                                                            {description.sub ? (
                                                                <span className="fst-italic align-self-lg-center">
                                                                    {" "}
                                                                    {
                                                                        description.sub
                                                                    }
                                                                </span>
                                                            ) : (
                                                                <></>
                                                            )}
                                                        </p>
                                                    );
                                                }
                                            )}
                                            <Link
                                                to={value.link}
                                                className="btn btn-warning btn-lg btn-gold-2 align-self-start align-self-md-center"
                                            >
                                                {value.buttonText}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="wave2 m-0 p-0 bg-light"></div>
            </div>
        </div>
    );
}

export default LandingPage;
