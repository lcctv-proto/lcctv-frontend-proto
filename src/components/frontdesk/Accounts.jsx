import { useState } from "react";
import { Search, PlusCircle, Save2 } from "react-bootstrap-icons";

import api from "../../api/api";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import Spinner from "react-bootstrap/Spinner";

import AccountSearchModal from "./AccountSearchModal";
import AccountNotFoundDismissible from "./AccountNotFoundDismissible";
import AccountAccordion from "./AccountAccordion";

function Accounts() {
    const [searchTerm, setSearchTerm] = useState("");

    const [account, setAccount] = useState([]);

    const [show, setShow] = useState(false);
    const [_show, set_Show] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        if (account) {
            setSearchTerm("");
            setAccount([]);
        }
        setShow(true);
    };

    const handleClick = async () => {
        setIsLoading(true);

        try {
            set_Show(false);
            const res = await api.accounts.get(searchTerm, { type: "custom" });
            setAccount(res.data);
        } catch (err) {
            setAccount([]);
            set_Show(true);
        }

        setIsLoading(false);
    };

    return (
        <>
            <Row>
                <Col xs={12} md={9} className="mb-3">
                    <Form.Control
                        size="lg"
                        name="acc-num"
                        id="acc-num"
                        type="text"
                        placeholder="Account Number"
                        value={searchTerm}
                        onChange={(e) => {
                            set_Show(false);
                            setSearchTerm(e.target.value);
                        }}
                        maxLength="50"
                        onKeyPress={(e) => {
                            if (e.key === "Enter") handleClick();
                        }}
                    />
                </Col>
                <Col className="align-top">
                    <Button
                        variant="primary"
                        size="lg"
                        className="d-inline-flex btn-navy align-items-center"
                        onClick={handleClick}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <Spinner
                                    as="span"
                                    animation="border"
                                    role="status"
                                    size="sm"
                                />
                            </>
                        ) : (
                            <PlusCircle />
                        )}
                        <span className="ms-2">ADD</span>
                    </Button>
                    <Button
                        variant="primary"
                        size="lg"
                        className="d-inline-flex btn-navy ms-2"
                        onClick={handleShow}
                    >
                        <Search className="align-self-center" />
                        <span className="ms-2">SEARCH</span>
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <AccountNotFoundDismissible
                        show={_show}
                        setShow={set_Show}
                        title={searchTerm}
                    />
                </Col>
            </Row>

            <hr className="my-0" />
            <Row className="border-front">
                <Col>
                    <Row className="pt-3">
                        <Col xs={6}>
                            <p className="fs-4">ACCOUNT NUMBER:</p>
                            <p className="ms-2 fs-3 fw-bold m-0">
                                {account._id &&
                                    `${account.prefix}${account.acc_ctr
                                        .toString()
                                        .padStart(3, "0")}`}
                            </p>
                        </Col>

                        <Col xs={6}>
                            <p className="fs-4">ACCOUNT NAME:</p>
                            <p className="ms-2 fs-3 fw-bold m-0">
                                {account._id &&
                                    `${account.accountName.firstName} ${account.accountName.middleName[0]}. ${account.accountName.lastName}`}
                            </p>
                        </Col>
                    </Row>
                    <Row className="pt-3">
                        <Col xs={6}>
                            <p className="fs-4">ACCOUNT ADDRESS:</p>
                            <p className="ms-2 fs-3 fw-bold m-0">
                                {account._id &&
                                    `${account.serviceAddress.municipality}, ${account.serviceAddress.province}`}
                            </p>
                        </Col>

                        <Col xs={6}>
                            <p className="fs-4">ACCOUNT STATUS:</p>
                            <p className="ms-2 fs-3 fw-bold m-0">
                                {account._id && `${account.accountStatus}`}
                            </p>
                        </Col>
                    </Row>
                    <Row className="py-3">
                        <Col xs={6}>
                            <p className="fs-4">PACKAGE:</p>
                            <p className="ms-2 fs-3 fw-bold m-0">
                                {account._id &&
                                    `${account.packageID.description}`}
                            </p>
                        </Col>

                        <Col xs={6}>
                            <p className="fs-4">MONTHLY RECURRING CHARGES:</p>
                            <p className="ms-2 fs-3 fw-bold m-0">
                                {account._id &&
                                    `₱ ${account.packageID.price}.00`}
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="border-front">
                <Col className="p-2">
                    <Button
                        size="lg"
                        className="float-end btn-approve btn-success "
                        onClick={() => {
                            alert("Changes saved!");
                        }}
                    >
                        <div className="d-flex align-items-center">
                            <Save2 className="me-2" />
                            <span>SAVE</span>
                        </div>
                    </Button>
                </Col>
            </Row>
            <Row className="pt-3">
                <AccountAccordion account={account} />
            </Row>
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
