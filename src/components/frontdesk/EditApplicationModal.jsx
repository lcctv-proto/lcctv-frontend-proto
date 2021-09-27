import { useEffect, useState } from "react";
import { CheckCircle, XCircle } from "react-bootstrap-icons";

import axios from "axios";

import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function EditApplicationModal({ show, handleClose }) {
    useEffect(() => {
        const fetchPackages = async () => {
            const res = await axios.get(
                "https://lcctv-backend.herokuapp.com/api/packages"
            );
        };

        fetchPackages();
    }, []);

    const handleSubmit = () => {};

    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header
                    closeButton
                    closeVariant="white"
                    className="bg-navy text-light border-front"
                >
                    <Modal.Title>VIEW APPLICATION</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form></Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        type="submit"
                        className="d-flex mb-2 btn btn-danger btn-delete fw-bold align-items-center"
                        onClick={() => console.log("DENY")}
                    >
                        <XCircle className="me-2" /> DENY APPLICATION
                    </Button>
                    <Button
                        type="submit"
                        className="d-flex mb-2 btn btn-navy fw-bold align-items-center"
                        onClick={handleSubmit}
                    >
                        <CheckCircle className="me-2" /> APPROVE APPLICATION
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditApplicationModal;
