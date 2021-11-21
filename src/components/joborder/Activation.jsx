import { useState } from "react";
import { PlusCircle } from "react-bootstrap-icons";

import { Search, Broadcast, ChevronDoubleUp } from "react-bootstrap-icons";

import api from "../../api/api";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";

import AccountSearchModal from "./AccountSearchModal";

function Activation() {
    const [account, setAccount] = useState({});
    const [accountSearchTerm, setAccountSearchTerm] = useState("");
    const [accountsShow, setAccountsShow] = useState(false);
    // const [searchTerm, setSearchTerm] = useState("");

    const handleAccountsShow = () => {
        setAccountsShow(true);
    };
    const handleAccountsClose = () => {
        setAccountsShow(false);
    };

    return (
        <>
            <Row className="border-jo mb-3">
                <Col>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                xs="4"
                                controlId="modalAccountNumber"
                            >
                                <Form.Label>ACCOUNT NUMBER:</Form.Label>
                                <div className="d-flex">
                                    <Form.Control
                                        type="text"
                                        value={accountSearchTerm}
                                        onChange={(e) => {
                                            setAccountSearchTerm(
                                                e.target.value
                                            );
                                        }}
                                    />
                                    <button
                                        className="btn text-light align-top ms-2 btn-navy"
                                        onClick={async (e) => {
                                            e.preventDefault();
                                            try {
                                                const res =
                                                    await api.accounts.get(
                                                        accountSearchTerm,
                                                        { type: "custom" }
                                                    );
                                                setAccount(res.data);
                                            } catch (err) {
                                                setAccount([]);
                                            }
                                        }}
                                    >
                                        <PlusCircle className="" />
                                    </button>
                                    <button
                                        className="btn text-light align-top ms-2 btn-navy"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleAccountsShow();
                                        }}
                                    >
                                        <Search className="" />
                                    </button>
                                </div>
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                xs="4"
                                controlId="modalJoNumber"
                            >
                                <Form.Label>JO NUMBER:</Form.Label>
                                <Form.Control type="text" disabled />
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                xs="4"
                                controlId="modalAssignedTeam"
                            >
                                <Form.Label>ASSIGNED TEAM:</Form.Label>
                                <Form.Control type="text" disabled />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} xs="4" controlId="modalBranch">
                                <Form.Label>BRANCH:</Form.Label>
                                <Form.Control type="text" disabled />
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                xs="4"
                                controlId="modalApplicationDate"
                            >
                                <Form.Label>APPLICATION DATE:</Form.Label>
                                <Form.Control type="date" disabled />
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                xs="4"
                                controlId="modalInstallationDate"
                            >
                                <Form.Label>INSTALLATION DATE:</Form.Label>
                                <Form.Control type="date" disabled />
                            </Form.Group>
                        </Row>
                    </Form>
                </Col>
            </Row>
            <Row className="border-jo mb-3 justify-content-end">
                <Col className="mb-3 " xs="auto">
                    {/* <Button size="lg" className="btn-navy ">
                        <div className="d-flex align-items-center">
                            <Printer className="me-2" /> PRINT
                        </div>
                    </Button> */}
                    <Button
                        size="lg"
                        className=" ms-2 btn-approve btn-success "
                        onClick={() => {
                            alert("Account activated!");
                        }}
                    >
                        <div className="d-flex align-items-center">
                            <Broadcast className="me-2" />
                            <span>ACTIVATE ACCOUNT</span>
                        </div>
                    </Button>
                </Col>
            </Row>
            {/* <Row className="fs-4 fw-bold">
                <Col> MATERIAL USED:</Col>
            </Row> */}
            {/* <Row className="mb-3">
                <Col>
                    <Table className="shadow" striped borderless>
                        <thead className="bg-navy text-light border-jo">
                            <tr>
                                <th>ITEM NAME</th>
                                <th>QTY</th>
                                <th>PRICE</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </Table>
                </Col>
            </Row>             
            <hr />
            */}
            <Row className="fs-4 fw-bold">
                <Col>APPLICATION INFORMATION</Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="border-jo">
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
                                        <Form.Control
                                            type="text"
                                            value={
                                                account?.accountName?.lastName
                                            }
                                            disabled
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalFirstName"
                                    >
                                        <Form.Label>First Name:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={
                                                account?.accountName?.firstName
                                            }
                                            disabled
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalMiddleName"
                                    >
                                        <Form.Label>Middle Name:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={
                                                account?.accountName?.middleName
                                            }
                                            disabled
                                        />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalNationality"
                                    >
                                        <Form.Label>Nationality:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={
                                                account?.additionalInfo
                                                    ?.nationality
                                            }
                                            disabled
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalBirthDate"
                                    >
                                        <Form.Label>Birth Date:</Form.Label>
                                        <Form.Control
                                            type="date"
                                            value={new Date(
                                                account?.additionalInfo?.birthdate
                                            ).toLocaleDateString()}
                                            disabled
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        xs="2"
                                        controlId="modalSex"
                                    >
                                        <Form.Label>Sex: </Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={
                                                account?.additionalInfo?.gender
                                            }
                                            disabled
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        xs="2"
                                        controlId="modalCivilStatus"
                                    >
                                        <Form.Label>Civil Status: </Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={
                                                account?.additionalInfo
                                                    ?.civilStatus
                                            }
                                            disabled
                                        />
                                    </Form.Group>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className="border-jo">
                                Service Address
                            </Accordion.Header>
                            <Accordion.Body>
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalUnit/House"
                                    >
                                        <Form.Label>
                                            Unit/House Number:
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={
                                                account?.serviceAddress?.unit
                                            }
                                            disabled
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalStreet"
                                    >
                                        <Form.Label>Street:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={
                                                account?.serviceAddress?.street
                                            }
                                            disabled
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalBarangay"
                                    >
                                        <Form.Label>Barangay:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={
                                                account?.serviceAddress?.street
                                            }
                                            disabled
                                        />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalMunicipality"
                                    >
                                        <Form.Label>Municipality:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={
                                                account?.serviceAddress
                                                    ?.municipality
                                            }
                                            disabled
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalHomeOwn"
                                    >
                                        <Form.Label>Home Ownership:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={
                                                account?.serviceAddress
                                                    ?.homeOwnership
                                            }
                                            disabled
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalResidency"
                                    >
                                        <Form.Label>
                                            Years of Residency:
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={
                                                account?.serviceAddress
                                                    ?.residencyYear
                                            }
                                            disabled
                                        />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalProvince"
                                    >
                                        <Form.Label>Province:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={
                                                account?.serviceAddress
                                                    ?.province
                                            }
                                            disabled
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalZipCode"
                                    >
                                        <Form.Label>Zip Code:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={
                                                account?.serviceAddress?.zipCode
                                            }
                                            disabled
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalNearestLandmark"
                                    >
                                        <Form.Label>
                                            NearestLandmark:
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={
                                                account?.serviceAddress
                                                    ?.nearestLandmark
                                            }
                                            disabled
                                        />
                                    </Form.Group>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header className="border-jo">
                                Government Issued ID
                            </Accordion.Header>
                            <Accordion.Body>
                                <img
                                    src={account?.governmentIdImageURL}
                                    alt=""
                                />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header className="border-jo">
                                Proof of Billing
                            </Accordion.Header>
                            <Accordion.Body>
                                <img src={account?.billingImageURL} alt="" />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header className="border-jo">
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
                                        <Form.Control
                                            type="text"
                                            value={
                                                account?.contactInfo
                                                    ?.cellphoneNumber
                                            }
                                            disabled
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalTelephoneNumber"
                                    >
                                        <Form.Label>
                                            Telephone Number:
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={
                                                account?.contactInfo
                                                    ?.telephoneNumber
                                            }
                                            disabled
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalEmailAddress"
                                    >
                                        <Form.Label>Email Address:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={account?.contactInfo?.email}
                                            disabled
                                        />
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
                                        <Form.Control
                                            type="text"
                                            value={
                                                account?.contactInfo
                                                    ?.motherMaidenName?.lastName
                                            }
                                            disabled
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalMomFirstName"
                                    >
                                        <Form.Label>First Name:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={
                                                account?.contactInfo
                                                    ?.motherMaidenName
                                                    ?.firstName
                                            }
                                            disabled
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalMomMiddleName"
                                    >
                                        <Form.Label>Middle Name:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={
                                                account?.contactInfo
                                                    ?.motherMaidenName
                                                    ?.middleName
                                            }
                                            disabled
                                        />
                                    </Form.Group>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
            <Row className="justify-content-end">
                <Col className="mb-3 " xs="auto">
                    <Button size="lg" className="btn-dark ">
                        <div className="d-flex align-items-center">
                            <ChevronDoubleUp className="me-2" /> GO BACK TO TOP
                        </div>
                    </Button>
                </Col>
            </Row>
            <AccountSearchModal
                show={accountsShow}
                handleClose={handleAccountsClose}
                searchTerm={accountSearchTerm}
                setSearchTerm={setAccountSearchTerm}
                filter={{ status: "FOR ACTIVATION", isNew: true }}
            />
        </>
    );
}

export default Activation;
