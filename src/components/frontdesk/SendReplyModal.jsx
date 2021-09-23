import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {
    ArrowReturnRight,
    LightbulbFill,
    Tools,
    Backspace,
} from "react-bootstrap-icons";

function SendReplyModal({ show, handleClose }) {
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
                        SEND REPLY
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
                                controlId="modalConcern"
                            >
                                <Form.Label>Subscriber Concern:</Form.Label>
                                <Form.Control as="textarea" rows={4} />
                            </Form.Group>
                        </Row>
                        <hr />
                        <Row className="mb-3">
                            <h4>CREATE REPLY</h4>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                xs="12"
                                controlId="modalSubject"
                            >
                                <Form.Label>Subject:</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} xs="12" controlId="modalBody">
                                <Form.Label>Body:</Form.Label>
                                <Form.Control as="textarea" rows={4} />
                            </Form.Group>
                        </Row>
                    </Form>
                    <hr />
                    <Row>
                        <Col className="d-flex align-items-center">
                            <LightbulbFill className="me-2 text-warning fs-3" />{" "}
                            <span>Please reply with kindness.</span>
                        </Col>
                    </Row>
                </Modal.Body>

                <Modal.Footer>
                    <Button
                        type="submit"
                        className="d-flex mb-2 btn-navy fw-bold align-items-center"
                        onClick={() => {
                            console.log("ASDasd");
                        }}
                    >
                        <Backspace className="me-2" /> BACK
                    </Button>
                    <Button
                        type="submit"
                        className="d-flex mb-2 btn-navy fw-bold align-items-center "
                        onClick={() => {
                            console.log("ASDasd");
                        }}
                    >
                        <ArrowReturnRight className="me-2" />
                        SEND REPLY
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default SendReplyModal;
