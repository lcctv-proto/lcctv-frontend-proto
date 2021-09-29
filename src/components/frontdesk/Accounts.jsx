import { useState } from "react";
import { Search, PlusCircle } from "react-bootstrap-icons";

import axios from "axios";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";

import Spinner from "react-bootstrap/Spinner";

import AccountSearchModal from "./AccountSearchModal";
import AccountNotFoundDismissible from "./AccountNotFoundDismissible";

function Accounts() {
    const [searchTerm, setSearchTerm] = useState("");

    const [account, setAccount] = useState([]);

    const [show, setShow] = useState(false);
    const [_show, set_Show] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    console.log(show);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = async () => {
        setIsLoading(true);

        try {
            set_Show(false);
            const res = await axios.get(
                `https://lcctv-backend.herokuapp.com/api/accounts/${searchTerm}?type=custom`
            );
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
            <Row className="pt-3">
                <Col>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                Personal Information
                            </Accordion.Header>
                            <Accordion.Body>
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalFamilyName"
                                    >
                                        <Form.Label>Family Name:</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalFirstName"
                                    >
                                        <Form.Label>First Name:</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalMiddleName"
                                    >
                                        <Form.Label>Middle Name:</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalNationality"
                                    >
                                        <Form.Label>Nationality:</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalBirthDate"
                                    >
                                        <Form.Label>Birth Date:</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        xs="2"
                                        controlId="modalSex"
                                    >
                                        <Form.Label>Sex: </Form.Label>
                                        <Form.Select defaultValue="SELECT SEX">
                                            <option>SELECT SEX</option>
                                            <option>MALE</option>
                                            <option>FEMALE</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        xs="2"
                                        controlId="modalCivilStatus"
                                    >
                                        <Form.Label>Civil Status: </Form.Label>
                                        <Form.Select defaultValue="SELECT CIVIL STATUS">
                                            <option>SELECT CIVIL STATUS</option>
                                            <option>SINGLE</option>
                                            <option>MARRIED</option>
                                            <option>WIDOWED</option>
                                            <option>SEPARATED</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className="bg-navy border-front">
                                Contact Information
                            </Accordion.Header>
                            <Accordion.Body>
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalCellphoneNumber"
                                    >
                                        <Form.Label>
                                            Cellphone Number:
                                        </Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalTelephoneNumber"
                                    >
                                        <Form.Label>
                                            Telephone Number:
                                        </Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalEmailAddress"
                                    >
                                        <Form.Label>Email Address:</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3 h5">
                                    <Col>Mother's Maiden Name</Col>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalMomFamilyName"
                                    >
                                        <Form.Label>Family Name:</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalMomFirstName"
                                    >
                                        <Form.Label>First Name:</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalMomMiddleName"
                                    >
                                        <Form.Label>Middle Name:</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3 h5">
                                    <Col>Spouse's Name</Col>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalSpouseFamilyName"
                                    >
                                        <Form.Label>Family Name:</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalSpouseFirstName"
                                    >
                                        <Form.Label>First Name:</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalSpouseMiddleName"
                                    >
                                        <Form.Label>Middle Name:</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
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
