import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Reminder({ show, handleClose, handleSubmit }) {
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
                            handleClose();
                        }}
                    >
                        NO
                    </Button>
                    <Button
                        type="submit"
                        className="d-flex mb-2 btn-navy fw-bold align-items-center"
                        onClick={() => {
                            handleSubmit();
                            handleClose();
                        }}
                    >
                        YES
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Reminder;
