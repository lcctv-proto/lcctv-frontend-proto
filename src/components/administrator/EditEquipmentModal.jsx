import { useEffect, useState } from "react";
import { PlusCircle } from "react-bootstrap-icons";

import axios from "axios";
import api from "../../api/api";

import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import authHeader from "../../auth/auth-header";

function EditEquipmentModal({ show, handleClose, equipmentID, setEquipments }) {
    const [description, setDescription] = useState("");
    const [label, setLabel] = useState("");
    const [price, setPrice] = useState("");

    useEffect(() => {
        const fetchPackage = async () => {
            const res = await api.equipments.get(equipmentID);

            setDescription(res.data.description);
            setLabel(res.data.label);
            setPrice(res.data.price);
        };

        fetchPackage();
    }, [equipmentID]);

    const handleSubmit = () => {
        axios
            .put(
                `https://lcctv-backend.herokuapp.com/api/equipments/${equipmentID}`,
                {
                    description,
                    label,
                    price,
                },
                { headers: authHeader() }
            )
            .then((res) => {
                handleClose();
                // setEquipments([...equipments, res.data]);
                alert("Equipment update success");
            })
            .catch((err) => alert("Equipment update error"));
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header
                    closeButton
                    closeVariant="white"
                    className="bg-navy text-light border-admin"
                >
                    <Modal.Title>EDIT EQUIPMENT</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className="mb-2">
                            <Form.Group
                                as={Col}
                                xs="6"
                                controlId="modalFirstName"
                            >
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={description}
                                    onChange={(e) => {
                                        setDescription(e.target.value);
                                    }}
                                />
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                xs="3"
                                controlId="modalFirstName"
                            >
                                <Form.Label>Label</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={label}
                                    onChange={(e) => {
                                        setLabel(e.target.value);
                                    }}
                                />
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                xs="3"
                                controlId="modalMiddleName"
                            >
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={price}
                                    onChange={(e) => {
                                        setPrice(e.target.value);
                                    }}
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
                        <PlusCircle className="me-2" /> EDIT EQUIPMENT
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditEquipmentModal;
