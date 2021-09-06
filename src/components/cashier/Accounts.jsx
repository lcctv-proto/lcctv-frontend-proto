import { useState } from "react";
import { Search, PlusCircle } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import AccountSearchModal from "./AccountSearchModal";

function Accounts() {
    const [searchTerm, setSearchTerm] = useState("");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClick = () => {};
    return (
        <>
            <div className="row">
                <div className="col-9 mb-3">
                    <input
                        type="text"
                        name="acc-num"
                        id="acc-num"
                        className="form-control form-control-lg w-75 d-inline"
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                        }}
                        placeholder="Account Number or Account Name"
                    />
                    <button
                        className="btn btn-lg text-light align-top ms-2 d-inline-flex btn-navy"
                        onClick={handleClick}
                    >
                        <PlusCircle className="align-self-center me-2" />
                        <span>Add</span>
                    </button>
                    <Button
                        variant="primary"
                        size="lg"
                        className="align-top d-inline-flex btn-navy ms-2"
                        onClick={handleShow}
                    >
                        <Search className="align-self-center me-2" />
                        Search
                    </Button>
                </div>
            </div>
            <hr className="my-0" />
            <div className="row border-cashier">
                <div className="col">
                    <div className="row pt-3">
                        <div className="col-6">
                            <p className="fs-4">Account Number:</p>
                            <p className="ms-2 fs-3 fw-bold"></p>
                        </div>

                        <div className="col-6">
                            <p className="fs-4">Account Name:</p>
                            <p className="ms-2 fs-3 fw-bold"></p>
                        </div>

                        <div className="mt-3 col-6">
                            <p className="fs-4">Account Address:</p>
                            <p className="ms-2 fs-3 fw-bold"></p>
                        </div>

                        <div className="mt-3 col-6">
                            <p className="fs-4">Account Status:</p>
                            <p className="ms-2 fs-3 fw-bold text-success"></p>
                        </div>
                    </div>

                    <div className="row pt-3">
                        <div className="col-6">
                            <p className="fs-4">Package:</p>
                            <p className="ms-2 fs-3 fw-bold"></p>
                        </div>

                        <div className="col-6">
                            <p className="fs-4">Monthly Recurrent Charges:</p>
                            <p className="ms-2 fs-3 fw-bold"></p>
                        </div>
                    </div>

                    <div className="row pt-3">
                        <div className="col-6">
                            <p className="fs-4">Date of activation:</p>
                            <p className="ms-2 fs-3 fw-bold"></p>
                        </div>
                        <div className="col-2">
                            <p className="fs-4">Number of Main-line:</p>
                            <p className="ms-2 text-end fs-3 fw-bold"></p>
                        </div>
                        <div className="col"></div>
                        <div className="col-2">
                            <p className="fs-4">Number of Extension:</p>
                            <p className="ms-2 text-end fs-3 fw-bold"></p>
                        </div>
                    </div>
                </div>
            </div>
            <AccountSearchModal
                show={show}
                handleClose={handleClose}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
        </>
    );
}

export default Accounts;
