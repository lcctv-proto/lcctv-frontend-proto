import { useEffect, useState } from "react";
import { Trash } from "react-bootstrap-icons";

import axios from "axios";

import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import Spinner from "../Spinner";
import authHeader from "../../auth/auth-header";

function DeletePlanModal({
    show,
    handleClose,
    equipmentID,
    equipments,
    setEquipments,
}) {
    const [description, setDescription] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchChannel = async () => {
            setIsLoading(true);
            const res = await axios.get(
                `https://lcctv-backend.herokuapp.com/api/equipments/${equipmentID}`,
                { headers: authHeader() }
            );
            setDescription(res.data.description);
            setIsLoading(false);
        };

        if (show) fetchChannel();
    }, [equipmentID, show]);

    const handleSubmit = () => {
        axios
            .delete(
                `https://lcctv-backend.herokuapp.com/api/equipments/${equipmentID}`,
                { headers: authHeader() }
            )
            .then((res) => {
                setEquipments(
                    equipments.filter((packages) => {
                        return packages._id !== res.data._id;
                    })
                );
                handleClose();
                alert("Delete success");
            })
            .catch((err) => alert("Delete Error"));
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header
                    closeButton
                    closeVariant="white"
                    className="bg-navy text-light border-admin"
                >
                    <Modal.Title>
                        DELETE EQUIPMENT {!isLoading && `- ${description}`}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {!isLoading ? (
                        <Row>
                            <Col>
                                <span className="">
                                    Are you sure you want to delete equipment:
                                    <span className="ms-2 fw-bold">
                                        {description}
                                    </span>
                                </span>
                            </Col>
                        </Row>
                    ) : (
                        <Spinner name="admin" small={true} />
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        type="submit"
                        variant="danger"
                        className="d-flex mb-2 btn-delete fw-bold align-items-center"
                        onClick={handleSubmit}
                    >
                        <Trash className="me-2" />
                        DELETE EQUIPMENT
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeletePlanModal;
