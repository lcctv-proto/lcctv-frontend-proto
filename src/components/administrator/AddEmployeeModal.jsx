import { useState } from "react";
import { PlusCircle } from "react-bootstrap-icons";

import axios from "axios";

import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function AddEmployeeModal({ show, handleClose }) {
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");

    const [contactNumber, setContactNumber] = useState("");

    const [roleID, setRoleID] = useState("");

    const handleSubmit = () => {
        const personnel = {
            personnelName: {
                firstName,
                middleName,
                lastName,
            },
            contactNumber,
            roleID,
        };

        axios
            .post("https://lcctv-backend.herokuapp.com/api/channels", personnel)
            .then((res) => {
                handleClose();
                alert("User creation success");
            })
            .catch((err) => alert("User creation error"));
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header
                    closeButton
                    closeVariant="white"
                    className="bg-navy text-light border-admin"
                >
                    <Modal.Title>ADD PERSONNELS</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Form.Group
                                as={Col}
                                xs="4"
                                controlId="modalFirstName"
                                value={firstName}
                                onChange={(e) => {
                                    setFirstName(e.target.value);
                                }}
                            >
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="JUAN" />
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                xs="4"
                                controlId="modalMiddleName"
                                value={middleName}
                                onChange={(e) => {
                                    setMiddleName(e.target.value);
                                }}
                            >
                                <Form.Label>Middle Name</Form.Label>
                                <Form.Control type="text" placeholder="TAMAD" />
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                xs="4"
                                controlId="modalFirstName"
                                value={lastName}
                                onChange={(e) => {
                                    setLastName(e.target.value);
                                }}
                            >
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="DELA CRUZ"
                                />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group
                                as={Col}
                                xs="12"
                                controlId="modalFirstName"
                                value={contactNumber}
                                onChange={(e) => {
                                    setContactNumber(e.target.value);
                                }}
                            >
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="DELA CRUZ"
                                />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group
                                as={Col}
                                xs="12"
                                controlId="modalFirstName"
                                value={roleID}
                                onChange={(e) => {
                                    setRoleID(e.target.value);
                                }}
                            >
                                <Form.Label>Role ID</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="DELA CRUZ"
                                />
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
                        <PlusCircle className="me-2" /> ADD PERSONNEL
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddEmployeeModal;
