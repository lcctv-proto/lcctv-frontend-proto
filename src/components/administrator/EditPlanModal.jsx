import { useEffect, useState } from "react";
import { Pencil } from "react-bootstrap-icons";

import axios from "axios";

import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Spinner from "../Spinner";
// import authHeader from "../../auth/auth-header";

function EditPlanModal({ show, handleClose, channelID }) {
    const [description, setDescription] = useState("");
    const [assignedNumber, setAssignedNumber] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchChannel = async () => {
            setIsLoading(true);
            const res = await axios.get(
                `https://lcctv-backend.herokuapp.com/api/channels/${channelID}`
            );
            setDescription(res.data.description);
            setAssignedNumber(res.data.assignedNumber);
            // setLabel(res.data.label);
            // setVideoURL(res.data.videoURL);
            // setIsHD(res.data.isHD);
            setIsLoading(false);
        };

        // const fetchPackages = async () => {
        //     const res = await axios.get(
        //         "https://lcctv-backend.herokuapp.com/api/packages"
        //     );
        //     setPackages([...res.data]);
        //     setCheckedState(new Array(res.data.length).fill(false));
        // };
        fetchChannel();
        // fetchPackages();
    }, [channelID]);

    const handleSubmit = () => {
        // const selectedPackages = packages.map((value, index) => {
        //     if (checkedState[index]) return value._id;
        //     return null;
        // });
        // axios
        //     .post(
        //         "https://lcctv-backend.herokuapp.com/api/channels",
        //         channelData,
        //         { headers: authHeader() }
        //     )
        //     .then((res) => {
        //         alert("File Upload success");
        //     })
        //     .catch((err) => alert("File Upload Error"));
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
                        EDIT CHANNEL {!isLoading && `- ${description}`}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {!isLoading ? (
                        <Form>
                            <Row className="mb-3">
                                <Form.Group
                                    as={Col}
                                    xs="8"
                                    controlId="modalChannelName"
                                >
                                    <Form.Label>Channel Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="e.g. CARTOON NETWORK"
                                        value={description || ""}
                                        onChange={(e) => {
                                            setDescription(e.target.value);
                                        }}
                                    />
                                </Form.Group>

                                <Form.Group
                                    as={Col}
                                    xs="4"
                                    controlId="modalChannelNumber"
                                >
                                    <Form.Label>Channel Number</Form.Label>
                                    <Form.Control
                                        value={assignedNumber || ""}
                                        onChange={(e) => {
                                            setAssignedNumber(e.target.value);
                                        }}
                                        type="number"
                                        placeholder="39"
                                    />
                                </Form.Group>
                            </Row>
                            <Form.Group xs="4" controlId="modalChannelNumber">
                                <Form.Label>Channel Number</Form.Label>
                                <Form.Control
                                    value={assignedNumber || ""}
                                    onChange={(e) => {
                                        setAssignedNumber(e.target.value);
                                    }}
                                    type="number"
                                    placeholder="39"
                                />
                            </Form.Group>
                        </Form>
                    ) : (
                        <Spinner name="admin" small={true} />
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        type="submit"
                        className="d-flex mb-2 btn-navy fw-bold align-items-center"
                        onClick={handleSubmit}
                    >
                        <Pencil className="me-2" />
                        EDIT CHANNEL
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditPlanModal;
