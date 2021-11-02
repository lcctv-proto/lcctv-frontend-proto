import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function WalkInModal({ show, handleClose }) {
    const curr = new Date();
    const localDateString = curr.toISOString().split("T")[0];

    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header
                    closeButton
                    closeVariant="white"
                    className="bg-navy text-light border-tech"
                >
                    <Modal.Title>WALK-IN PAYMENT</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className="mb-2">
                            <Form.Group as={Col} xs="6" controlId="modalDate">
                                <Form.Label>Date of Transaction: </Form.Label>
                                <Form.Control
                                    type="date"
                                    placeholder="e.g. JUAN"
                                    value={localDateString}
                                    onChange={() => {
                                        console.log("asd");
                                    }}
                                />
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                xs="6"
                                controlId="modalModeOfPayments"
                            >
                                <Form.Label>Mode of Payment: </Form.Label>
                                <Form.Select>
                                    <option value="cash">Cash</option>
                                    <option value="check">Check</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                xs="12"
                                controlId="modalReceiptNumber"
                            >
                                <Form.Label>Receipt Number: </Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3 align-items-end">
                            <Form.Group as={Col} xs="9" controlId="modalCode">
                                <Form.Label>Code: </Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Col xs="3" className="align-bottom">
                                <Button variant="dark">Add</Button>
                                <Button variant="success" className="ms-2">
                                    Search
                                </Button>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                xs="12"
                                controlId="modalReceiptNumber"
                            >
                                <Form.Label>Amount Paid: </Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                xs="12"
                                controlId="modalReceiptNumber"
                            >
                                <Form.Label>Remarks: </Form.Label>
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
                            console.log();
                        }}
                    >
                        BUTTON
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default WalkInModal;
