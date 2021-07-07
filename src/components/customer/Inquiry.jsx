import technician from "../../assets/Images/telemarketer.svg";

function Inquiry() {
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-6">
                    <div className="card border-0 shadow">
                        <div className="card-header py-3 border-gold-7 bg-navy text-light">
                            <span className="h3 fw-bolder">Contact Us!</span>
                        </div>
                        <div className="card-body">
                            <div className="mb-3 pb-3 border-bottom">
                                <p>
                                    Got questions? Check our FAQs to see if your
                                    concern can be addressed. Otherwise, fill
                                    the form below with your concern and a
                                    representative will get back to you via
                                    email.
                                </p>
                                <small>
                                    Kindly avoid multiple submissions for the
                                    same issue to facilitate faster resolution.
                                </small>
                            </div>
                            <form>
                                <div className="row mt-3">
                                    <div className="col-xxl-6 mt-3">
                                        <label
                                            htmlFor="subscriber_name"
                                            className="form-label"
                                        >
                                            Subscriber Name:
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="subscriber_name"
                                        />
                                    </div>
                                    <div className="col-xxl-6 mt-3">
                                        <label
                                            htmlFor="account_number"
                                            className="form-label"
                                        >
                                            Account Number:
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="account_number"
                                        />
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col">
                                        <label
                                            htmlFor="email_address"
                                            className="form-label"
                                        >
                                            Email Address:
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email_address"
                                        />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <label
                                            htmlFor="contact_number"
                                            className="form-label"
                                        >
                                            Contact Number:
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="contact_number"
                                        />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <label
                                            htmlFor="subscription_plan"
                                            className="form-label"
                                        >
                                            Subscription Plan:
                                        </label>

                                        <select className="form-select">
                                            <option defaultValue hidden>
                                                SELECT SUBSCRIPTION PLAN
                                            </option>
                                            <option value="b640">
                                                Basic 640 (59 SD PLUS 23 HD
                                                Channels)
                                            </option>
                                            <option value="b790">
                                                Premium 790 (91 SD PLUS 35 HD
                                                Channels)
                                            </option>
                                            <option value="b1099">
                                                International 1099 (118 SD PLUS
                                                54 HD Channel)
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <label
                                            htmlFor="concern_type"
                                            className="form-label"
                                        >
                                            Concern Type:
                                        </label>
                                        <select className="form-select">
                                            <option defaultValue hidden>
                                                SELECT CONCERN TYPE
                                            </option>
                                            <option>Billing Related</option>
                                            <option>
                                                Follow Up New Installation
                                            </option>
                                            <option>New Application</option>
                                            <option>Payment Related</option>
                                            <option>
                                                Upgrade Subscription
                                            </option>
                                            <option>Site Transfer</option>
                                            <option>Reconnection</option>
                                            <option>Extension</option>
                                            <option>
                                                Others (Please specify in the
                                                Text Field Below.)
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <label htmlFor="add-info">
                                            How can we help?
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="add-info"
                                            rows="5"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <button
                                            type="button"
                                            className="btn btn-warning fw-bolder btn-lg float-end text-navy bg-gold"
                                        >
                                            SUBMIT
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-6 d-none d-lg-block py-5">
                    <img
                        className="d-block mx-auto"
                        width="400px"
                        src={technician}
                        alt="Technician"
                    />
                </div>
            </div>
        </div>
    );
}

export default Inquiry;
