import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ModalSubmit({ show, handleClose, handleSubmit }) {
    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header
                    closeButton
                    closeVariant="white"
                    className=" bg-danger text-light border-navy"
                >
                    <Modal.Title>TERMS OF SERVICE</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className="text-justify">
                            <Col>
                                <p>
                                    "In submitting this form I agree to my
                                    details being used for the purposes of
                                    subscription for data collection of LCCTV.
                                    The information will only be accessed by the
                                    company staff. I understand my data will be
                                    held securely and will not be distributed to
                                    third parties. I have a right to change or
                                    access my information."
                                </p>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        type="submit"
                        className="d-flex mb-2 btn-navy fw-bold align-items-center"
                        onClick={handleSubmit}
                    >
                        SUBMIT
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalSubmit;
