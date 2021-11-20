import { useState } from "react";
import { PlusCircle } from "react-bootstrap-icons";

import axios from "axios";

import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import authHeader from "../../auth/auth-header";

function AddPlanModal({ show, handleClose, plans, setPlans }) {
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = () => {
        axios
            .post(
                "https://lcctv-backend.herokuapp.com/api/packages",
                {
                    description,
                    price,
                },
                { headers: authHeader() }
            )
            .then((res) => {
                setPlans([...plans, res.data]);
                handleClose();
                alert("Plan creation success");
            })
            .catch((err) => alert("Plan creation error"));
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header
                    closeButton
                    closeVariant="white"
                    className="bg-navy text-light border-admin"
                >
                    <Modal.Title>ADD PLAN</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className="mb-2">
                            <Form.Group
                                as={Col}
                                xs="8"
                                controlId="modalFirstName"
                                value={description}
                                onChange={(e) => {
                                    setDescription(e.target.value);
                                }}
                            >
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                xs="4"
                                controlId="modalMiddleName"
                                value={price}
                                onChange={(e) => {
                                    setPrice(e.target.value);
                                }}
                            >
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        type="submit"
                        className="d-flex mb-2 btn-navy fw-bold align-items-center"
                        onClick={handleSubmit}
                    >
                        <PlusCircle className="me-2" /> ADD PLAN
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddPlanModal;
