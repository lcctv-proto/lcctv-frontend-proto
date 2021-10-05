import { Search, Save2, Printer, ChevronDoubleUp } from "react-bootstrap-icons";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function Maintenance() {
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
            <Row className="fs-4 fw-bold mb-3">
                <Col> SUBSCRIBER INFROMATION</Col>
            </Row>
            <Row className="border-jo mb-3">
                <Col>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} xs="4" controlId="AccountName">
                                <Form.Label>ACCOUNT NAME:</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                xs="4"
                                controlId="AccountNumber"
                            >
                                <Form.Label>ACCOUNT NUMBER:</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                xs="4"
                                controlId="AccountStatus"
                            >
                                <Form.Label>ACCOUNT STATUS:</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} xs="4" controlId="Email">
                                <Form.Label>EMAIL ADDRESS:</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                xs="4"
                                controlId="ContactNumber"
                            >
                                <Form.Label>CONTACT NUMBER:</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                xs="4"
                                controlId="ServiceAddress"
                            >
                                <Form.Label>SERVICE ADDRESS:</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} xs="4" controlId="Package">
                                <Form.Label>PACKAGE:</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group as={Col} xs="4" controlId="Monthlyr">
                                <Form.Label>MONTHLY RECURRING COST:</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Row>
                    </Form>
                </Col>
            </Row>
            <Row className="fs-4 fw-bold mb-3">
                <Col> SUBSCRIBER'S CONCERN DETAILS:</Col>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} xs="4" controlId="InquiryNumber">
                    <Form.Label>INQUIRY NUMBER:</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group as={Col} xs="4" controlId="ConcernType">
                    <Form.Label>CONCERN TYPE:</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group as={Col} xs="4" controlId="InquiryDate">
                    <Form.Label>INQUIRY DATE:</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} xs="12" controlId="ConcernDetails">
                    <Form.Label>CONCERN DETAILS::</Form.Label>
                    <Form.Control as="textarea" rows={4} />
                </Form.Group>
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

export default Maintenance;
