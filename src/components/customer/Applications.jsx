import { useState } from "react";
import { useHistory } from "react-router-dom";

function Applications() {
    const [referenceNumber, setReferenceNumber] = useState("");
    const history = useHistory();

    function HandleSubmit(e) {
        e.preventDefault();
        if (referenceNumber) history.push(`/application/${referenceNumber}`);
    }

    return (
        <div className="container p-5">
            <div className="row justify-content-center my-4">
                <div className=" col-sm-12 col-md-10 col-lg-6 text-navy">
                    <p className="h1 pb-3 border-gold-3">APPLICATION STATUS</p>
                    <p
                        className="fs-5 fw-normal"
                        style={{ textAlign: "justify" }}
                    >
                        <span className="ms-5"> To </span> check the status of
                        your existing application, please enter the reference
                        number we sent through your email.
                    </p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-sm-12 col-md-10 col-lg-6">
                    <div className="card mb-5 border-0 shadow-lg">
                        <div className="card-header text-light py-3 bg-navy border-gold-3">
                            <span className="h5">CHECK APPLICATION STATUS</span>
                        </div>
                        <div className="card-body">
                            <form>
                                <div>
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
                                    />
                                    <div className="form-text ms-2">
                                        Ex: REF-xxxxxxxxxxx
                                    </div>
                                </div>
                            </form>

                            <button
                                type="button"
                                className="btn btn-warning mt-3 fw-bolder float-end bg-gold text-navy"
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
