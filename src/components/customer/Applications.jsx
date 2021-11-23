import { useState, useEffect } from "react";
import api from "../../api/api";

function Applications() {
    const [referenceNumber, setReferenceNumber] = useState("");
    const [application, setApplication] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const formatDate = (date) => {
        const localDate = new Date(date);
        const localDateString = localDate
            .toLocaleDateString(undefined, {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            })
            .toUpperCase();

        return localDateString;
    };

    const fetchApplication = async (referenceNumber) => {
        setIsLoading(true);
        await api.applications
            .get(referenceNumber, {
                type: "custom",
            })
            .then((res) => {
                setApplication(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                alert(
                    "Application not found! Please check the number you entered and try again!"
                );
            });
        // try {
        //     setIsLoading(true);
        //     const res = await api.applications.get(referenceNumber, {
        //         type: "custom",
        //     });
        //     setApplication(res.data);
        //     setIsLoading(false);
        // } catch (err) {
        //     alert(
        //         "Application not found! Please check the number you entered and try again!"
        //     );
        // }
    };

    const handleSubmit = (e) => {
        if (
            !referenceNumber.includes(" ") &&
            referenceNumber.toLocaleUpperCase().includes("REF-") &&
            referenceNumber.length === 13
        )
            fetchApplication(referenceNumber);
    };

    const steps = {
        99: {
            title: "DENIED",
            style: { width: `${(3 / 3) * 100}%`, backgroundColor: "red" },
            description:
                "There is something wrong about your application form. Please check our email.",
        },
        1: {
            title: "FOR VALIDATION",
            style: { width: `${(1 / 3) * 100}%`, backgroundColor: "#f0b917" },
            description:
                "Our employees are currently validating your application details. Check again within the next 24 hours!",
        },
        2: {
            title: "FOR PAYMENT",
            style: { width: `${(2 / 3) * 100}%`, backgroundColor: "#f0b917" },
            description:
                "Kindly settle your application payment. We have sent an email with the instructions.",
        },
        3: {
            title: "CURRENTLY ACTIVE",
            style: { width: `${(3 / 3) * 100}%`, backgroundColor: "green" },
            description: "Welcome to Lake Community Cable TV!",
        },
    };

    return (
        <div className="container-fluid bg-application">
            <div className="row py-5 justify-content-center my-3">
                <div className=" col-sm-12 col-md-10 col-xl-4 col-lg-6 text-navy">
                    <p className="h1 pb-4 mb-4 border-gold-3">
                        APPLICATION STATUS
                    </p>
                    <p className="fs-5 fw-normal text-justify">
                        <span className="ms-5"> To </span> check the status of
                        your existing application, please enter the reference
                        number we sent through your email.
                    </p>
                    <div className="card my-5 border-0 shadow-lg">
                        <div className="card-header text-light py-3 bg-navy border-gold-3">
                            <span className="h5">CHECK APPLICATION STATUS</span>
                        </div>
                        <div className="card-body">
                            {!application ? (
                                <>
                                    <label
                                        htmlFor="email"
                                        className="form-label"
                                    >
                                        REFERENCE NUMBER
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        value={referenceNumber}
                                        onChange={(e) => {
                                            setReferenceNumber(e.target.value);
                                        }}
                                        onKeyPress={(e) => {
                                            if (e.key === "Enter")
                                                handleSubmit();
                                        }}
                                        required
                                    />
                                    <div className="form-text ms-2">
                                        Ex: REF-xxxxxxxxxxx
                                    </div>

                                    <button
                                        type="button"
                                        className="btn btn-primary mt-3 fw-bolder float-end btn-gold"
                                        onClick={handleSubmit}
                                        disabled={isLoading}
                                    >
                                        {isLoading ? "LOADING" : "CHECK STATUS"}
                                    </button>
                                </>
                            ) : (
                                <>
                                    <p className="small text-end mb-4">
                                        DATE OF APPLICATION:{" "}
                                        {formatDate(application.date)}
                                    </p>

                                    <h2 className="fw-bold text-center mb-3">
                                        {steps[application.step].title}
                                    </h2>
                                    <div class="progress mb-2">
                                        <div
                                            class="progress-bar progress-bar-striped progress-bar-animated"
                                            role="progressbar"
                                            style={
                                                steps[application.step].style
                                            }
                                        ></div>
                                    </div>

                                    <p className="text-center">
                                        {application.step < 8 && (
                                            <>STEP {application.step}/8</>
                                        )}
                                    </p>

                                    <p className="mb-5">
                                        {steps[application.step].description}
                                    </p>

                                    <button
                                        type="button"
                                        className="btn btn-warning d-block mx-auto mt-3 fw-bolder btn-gold"
                                        onClick={(e) => {
                                            setApplication("");
                                        }}
                                    >
                                        GO BACK
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Applications;
