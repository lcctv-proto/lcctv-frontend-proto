import { Search, Save2, Printer, ChevronDoubleUp } from "react-bootstrap-icons";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";
function Accounts() {
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
                                    <Form.Control type="text" />
                                    <button className="btn text-light align-top ms-2 btn-navy">
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
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                xs="4"
                                controlId="modalAssignedTeam"
                            >
                                <Form.Label>ASSIGNED TEAM:</Form.Label>
                                <div className="d-flex">
                                    <Form.Control type="text" />
                                    <button className="btn text-light align-top ms-2 btn-navy">
                                        <Search className="" />
                                    </button>
                                </div>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} xs="4" controlId="modalBranch">
                                <Form.Label>BRANCH:</Form.Label>
                                <Form.Select defaultValue="PLEASE SELECT BRANCH">
                                    <option>PLEASE SELECT BRANCH</option>
                                    <option>1</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                xs="4"
                                controlId="modalApplicationDate"
                            >
                                <Form.Label>DATE OF TRANSACTION:</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                xs="4"
                                controlId="modalInstallationDate"
                            >
                                <Form.Label>INSTALLATION DATE:</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>
                        </Row>
                    </Form>
                </Col>
            </Row>
            <Row className="border-jo mb-3 justify-content-end">
                <Col className="mb-3 " xs="auto">
                    <Button size="lg" className="btn-navy ">
                        <div className="d-flex align-items-center">
                            <Printer className="me-2" /> PRINT
                        </div>
                    </Button>
                    <Button
                        size="lg"
                        className=" ms-2 btn-approve btn-success "
                    >
                        <div className="d-flex align-items-center">
                            <Save2 className="me-2" />
                            <span>SAVE</span>
                        </div>
                    </Button>
                </Col>
            </Row>
            <Row className="fs-4 fw-bold">
                <Col>APPLICATION INFORMATION</Col>
            </Row>
            <Row className="mb-3">
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
                            <Accordion.Header>Service Address</Accordion.Header>
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
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalStreet"
                                    >
                                        <Form.Label>Street:</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalBarangay"
                                    >
                                        <Form.Label>Barangay:</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalMunicipality"
                                    >
                                        <Form.Label>Municipality:</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalHomeOwn"
                                    >
                                        <Form.Label>Home Ownership:</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalResidency"
                                    >
                                        <Form.Label>
                                            Years of Residency:{" "}
                                        </Form.Label>
                                        <Form.Select defaultValue="SELECT SEX">
                                            <option>SELECT SEX</option>
                                            <option>MALE</option>
                                            <option>FEMALE</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalProvince"
                                    >
                                        <Form.Label>Province:</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalZipCode"
                                    >
                                        <Form.Label>Zip Code:</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalNearestLandmark"
                                    >
                                        <Form.Label>
                                            NearestLandmark:
                                        </Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header className="">
                                Government Issued ID
                            </Accordion.Header>
                            <Accordion.Body></Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header className="">
                                Proof of Billing
                            </Accordion.Header>
                            <Accordion.Body></Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header className="">
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
            <Row className="justify-content-end">
                <Col className="mb-3 " xs="auto">
                    <Button size="lg" className="btn-dark ">
                        <div className="d-flex align-items-center">
                            <ChevronDoubleUp className="me-2" /> GO BACK TO TOP
                        </div>
                    </Button>
                </Col>
            </Row>
        </>
    );
}

export default Accounts;
