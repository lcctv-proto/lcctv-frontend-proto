import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Applications() {
    const [referenceNumber, setReferenceNumber] = useState("");
    const history = useHistory();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    function HandleSubmit(e) {
        e.preventDefault();
        if (
            !referenceNumber.includes(" ") &&
            (referenceNumber.includes("REF-") ||
                referenceNumber.includes("ref-")) &&
            referenceNumber.length === 15
        )
            history.push(`/application/${referenceNumber}`);
    }

    return (
        <div className="container py-5">
            <div className="row justify-content-center my-3">
                <div className=" col-sm-12 col-md-10 col-lg-6 text-navy">
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
                            <form>
                                <label htmlFor="email" className="form-label">
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
                                    required
                                />
                                <div className="form-text ms-2">
                                    Ex: REF-xxxxxxxxxxx
                                </div>
                            </form>

                            <button
                                type="button"
                                className="btn btn-warning mt-3 fw-bolder float-end btn-gold"
                                onClick={HandleSubmit}
                            >
                                CHECK STATUS
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Applications;
