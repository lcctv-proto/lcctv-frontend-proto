import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function TemplateModal({ show, handleClose }) {
    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header
                    closeButton
                    closeVariant="white"
                    className="bg-navy text-light border-tech"
                >
                    <Modal.Title>TITLE</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Form.Group
                                as={Col}
                                xs="8"
                                controlId="modalTextbox"
                            >
                                <Form.Label>Sample Textbox</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="e.g. JUAN"
                                />
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
                        BUTTON
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default TemplateModal;
