import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function ConfirmModal({ show, handleClose, amountPaid, handleSubmit }) {
    const [amount, setAmount] = useState("");

    return (
        <>
            <Modal show={show} onHide={handleClose} size="sm">
                <Modal.Header
                    closeButton
                    closeVariant="white"
                    className=" bg-danger text-light border-navy"
                >
                    <Modal.Title>CONFIRM AMOUNT</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className="text-justify">
                            <Col>
                                <label htmlFor="email" className="form-label">
                                    Enter amount to be paid -{" "}
                                    <span className="fw-bold">
                                        {amountPaid}
                                    </span>
                                    :
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    value={amount}
                                    onChange={(e) => {
                                        setAmount(e.target.value);
                                    }}
                                    required
                                />
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        type="submit"
                        className="d-flex mb-2 btn-navy fw-bold align-items-center"
                        onClick={() => {
                            if (amountPaid === amount) handleSubmit();
                            else alert("Incorrect amount, please try again!");
                            handleClose();
                        }}
                    >
                        CONFIRM
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ConfirmModal;
