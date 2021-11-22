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
                    className=" bg-danger text-light border-navy"
                >
                    <Modal.Title>REMINDER</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className="text-justify">
                            <p>
                                Are you sure you double-check the application
                                form?
                            </p>
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
                        YES
                    </Button>
                    <Button
                        type="submit"
                        className="d-flex mb-2 btn-navy fw-bold align-items-center"
                        onClick={() => {
                            console.log("ASDasd");
                        }}
                    >
                        NO
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default TemplateModal;
