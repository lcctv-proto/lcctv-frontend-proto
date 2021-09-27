import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Backspace, FileEarmarkPerson } from "react-bootstrap-icons";

function TemplateModal({ show, handleClose }) {
    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header
                    closeButton
                    closeVariant="white"
                    className="bg-navy text-light border-front"
                >
                    <Modal.Title className="d-flex align-items-center">
                        <FileEarmarkPerson className=" me-2" />
                        APPLICATION FORM
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className="mb-3 h5">
                            <Form.Group
                                as={Col}
                                xs="12"
                                controlId="modalFirstName"
                            >
                                <Form.Label>Selected Plan:</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3 h5">
                            <Col>PERSONAL INFORMATION</Col>
                            <hr />
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                xs="12"
                                controlId="modalFirstName"
                            >
                                <Form.Label>First Name:</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                xs="12"
                                controlId="modalMiddleName"
                            >
                                <Form.Label>Middle Name:</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                xs="12"
                                controlId="modalFamilyName"
                            >
                                <Form.Label>Family Name:</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                xs="6"
                                controlId="modalNationality"
                            >
                                <Form.Label>Nationality:</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                xs="6"
                                controlId="modalBirthdate"
                            >
                                <Form.Label>Birthdate:</Form.Label>
                                <Form.Control type="date" placeholder="" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} xs="6" controlId="modalSex">
                                <Form.Label>Sex: </Form.Label>
                                <Form.Select defaultValue="SELECT SEX">
                                    <option>MALE</option>
                                    <option>FEMALE</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group as={Col} xs="6" controlId="modalSex">
                                <Form.Label>Civil Status: </Form.Label>
                                <Form.Select defaultValue="SELECT CIVIL STATUS">
                                    <option>SINGLE</option>
                                    <option>MARRIED</option>
                                    <option>WIDOWED</option>
                                    <option>SEPARATED</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3 h5">
                            <Col> HOME/INSTALLATION ADDRESS</Col>
                            <hr />
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                xs="6"
                                controlId="modalUnitNumber"
                            >
                                <Form.Label>Unit/House Number:</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                            <Form.Group as={Col} xs="6" controlId="modalStreet">
                                <Form.Label>Street:</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                xs="6"
                                controlId="modalBarangay"
                            >
                                <Form.Label>Barangay:</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                xs="6"
                                controlId="modalMunicipality"
                            >
                                <Form.Label>Municipality:</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                xs="6"
                                controlId="modalHomeOwnership"
                            >
                                <Form.Label>Home Ownership: </Form.Label>
                                <Form.Select defaultValue="SELECT HOME OWNERSHIP">
                                    <option>OWNED</option>
                                    <option>LIVING WITH RELATIVES</option>
                                    <option>RENTED</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                xs="6"
                                controlId="modalYearsOfResidency"
                            >
                                <Form.Label>Years Of Residency:</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                xs="6"
                                controlId="modalProvince"
                            >
                                <Form.Label>Province:</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                xs="6"
                                controlId="modalZipCode"
                            >
                                <Form.Label>Zip Code:</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                xs="12"
                                controlId="modalNearestLandmark"
                            >
                                <Form.Label>Nearest Landmark:</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3 h5">
                            <Col> CONTACT INFORMATION </Col>
                            <hr />
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                xs="6"
                                controlId="modalCellphoneNumber"
                            >
                                <Form.Label>Cellphone Number:</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                xs="6"
                                controlId="modalTelephoneNumber"
                            >
                                <Form.Label>Telephone Number:</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                xs="12"
                                controlId="modalEmailAddress"
                            >
                                <Form.Label>Email Address:</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3 h5">
                            <Col>MOTHER'S MAIDEN NAME</Col>
                            <hr />
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                xs="12"
                                controlId="modalMomFirstName"
                            >
                                <Form.Label>First Name:</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                xs="12"
                                controlId="modalMomMiddleName"
                            >
                                <Form.Label>Middle Name:</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                xs="12"
                                controlId="modalMomFamilyName"
                            >
                                <Form.Label>Family Name:</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3 h5">
                            <Col>SPOUSE'S NAME</Col>
                            <hr />
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                xs="12"
                                controlId="modalSpouseFirstName"
                            >
                                <Form.Label>First Name:</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                xs="12"
                                controlId="modalSpouseMiddleName"
                            >
                                <Form.Label>Middle Name:</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                xs="12"
                                controlId="modalSpouseFamilyName"
                            >
                                <Form.Label>Family Name:</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3 h5">
                            <Col>ID and PROOF OF BILLING</Col>
                            <hr />
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                xs="12"
                                controlId="modalGovernmentIssuedID"
                            >
                                <Form.Label>Government Issued ID:</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                xs="12"
                                controlId="modalProofOfBilling"
                            >
                                <Form.Label>Proof of Billing:</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        type="submit"
                        className="d-flex mb-2 btn-navy fw-bold align-items-center"
                        onClick={() => {
                            console.log("ASDasd");
                        }}
                    >
                        <Backspace className="me-2" />
                        BACK
                    </Button>
                    <Button
                        type="submit"
                        className="d-flex mb-2 btn-navy fw-bold align-items-center"
                        onClick={() => {
                            console.log("ASDasd");
                        }}
                    >
                        BUTTON
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default TemplateModal;
