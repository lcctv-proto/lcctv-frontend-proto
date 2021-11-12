import { useState, useEffect } from "react";
import { PlusCircle } from "react-bootstrap-icons";

import axios from "axios";
import api from "../../api/api";

import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function AddEmployeeModal({ show, handleClose }) {
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [contactNumber, setContactNumber] = useState("");

    const [roleID, setRoleID] = useState("");

    const [roles, setRoles] = useState([]);

    useEffect(() => {
        const fetchRoles = async () => {
            const res = await api.roles.get("");
            setRoles(res.data);
        };

        fetchRoles();
    }, []);

    const handleSubmit = () => {
        const personnel = {
            personnelName: {
                firstName,
                middleName,
                lastName,
            },
            username,
            contactNumber,
            roleID,
        };

        axios
            .post(
                "https://lcctv-backend.herokuapp.com/api/personnel",
                personnel
            )
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
                    className="bg-navy text-light border-ceo"
                >
                    <Modal.Title>ADD PERSONNELS</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className="mb-2">
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
                                <Form.Control type="text" />
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
                                <Form.Control type="text" />
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
                                <Form.Control type="text" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-2">
                            <Form.Group
                                as={Col}
                                xs="6"
                                controlId="modalFirstName"
                                value={username}
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                            >
                                <Form.Label>Username </Form.Label>
                                <Form.Control
                                    type="text"
                                    style={{ textTransform: "none" }}
                                />
                            </Form.Group>

                            <Form.Group
                                as={Col}
                                xs="6"
                                controlId="modalFirstName"
                                value={contactNumber}
                                onChange={(e) => {
                                    setContactNumber(e.target.value);
                                }}
                            >
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group
                                as={Col}
                                xs="12"
                                controlId="modalRoles"
                                value={roleID}
                                onChange={(e) => {
                                    setRoleID(e.target.value);
                                }}
                            >
                                <Form.Label>Role</Form.Label>
                                <Form.Select>
                                    {roles.map((value, index) => {
                                        return (
                                            <option
                                                value={value._id}
                                                key={index}
                                            >
                                                {value.description}
                                            </option>
                                        );
                                    })}
                                </Form.Select>
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
