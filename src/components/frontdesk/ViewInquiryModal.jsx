import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ChatSquareText, Tools } from "react-bootstrap-icons";

function ViewInquiryModal({ show, handleClose }) {
    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header
                    closeButton
                    closeVariant="white"
                    className="bg-navy text-light border-front"
                >
                    <Modal.Title className="d-flex align-items-center">
                        <Tools className="me-2" />
                        INQUIRY DETAILS
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                xs="6"
                                controlId="modalSubscriberName"
                            >
                                <Form.Label>Subscriber Name:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="e.g. JUAN"
                                />
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                xs="6"
                                controlId="modalAccountNumber"
                            >
                                <Form.Label>Account Number:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="095454515"
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                xs="12"
                                controlId="modalAddress"
                            >
                                <Form.Label>Address:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="#551 Brgy.Alac San Quintin Pangasinan"
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                xs="12"
                                controlId="modalEamailAddress"
                            >
                                <Form.Label>Email Address:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="umali.charlesedward@gmail.com"
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                xs="12"
                                controlId="modalContactNumber"
                            >
                                <Form.Label>Contact Number:</Form.Label>
                                <Form.Control type="text" placeholder="09" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} xs="12" controlId="modalPlan">
                                <Form.Label>Plan:</Form.Label>
                                <Form.Select defaultValue="PLANS">
                                    <option>BASIC</option>
                                    <option>PREMIUM</option>
                                    <option>INTERNATIONAL</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                xs="12"
                                controlId="modalConcernType"
                            >
                                <Form.Label>Concern Type:</Form.Label>
                                <Form.Select defaultValue="CONCERN TYPES">
                                    <option>Reconnection</option>
                                    <option>Upgrade</option>
                                    <option>Site Transfer</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                xs="12"
                                controlId="modalComment"
                            >
                                <Form.Label>How can we help?</Form.Label>
                                <Form.Control as="textarea" rows={4} />
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
                        <ChatSquareText className="me-2" />
                        REPLY
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ViewInquiryModal;
