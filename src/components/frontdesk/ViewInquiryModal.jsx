import { useEffect, useState } from "react";
import { ChatSquareText, Tools } from "react-bootstrap-icons";

import axios from "axios";

import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Spinner from "../Spinner";

function ViewInquiryModal({ show, handleClose, handleReplyShow, inquiry }) {
    const [accountName, setAccountName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [serviceAddress, setServiceAddress] = useState("");
    const [email, setEmail] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [plan, setPlan] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchInquiry = async () => {
            setIsLoading(true);
            const res = await axios.get(
                `https://lcctv-backend.herokuapp.com/api/inquiries/${inquiry}`
            );
            const {
                type,
                email,
                contactNumber,
                description,
                accountID: {
                    prefix,
                    accountName: { firstName, middleName, lastName },
                    serviceAddress: {
                        unit,
                        street,
                        barangay,
                        municipality,
                        province,
                    },
                    packageID: { description: package_desc },
                    acc_ctr,
                },
            } = res.data;

            setAccountName(`${firstName} ${middleName[0]}. ${lastName}`);
            setAccountNumber(`${prefix}${acc_ctr.toString().padStart(3, "0")}`);
            setServiceAddress(
                `${unit} - ${street}, ${barangay}, ${municipality}, ${province}`
            );
            setPlan(package_desc);
            setEmail(email);
            setType(type);
            setContactNumber(contactNumber);
            setDescription(description);
            setIsLoading(false);
        };

        fetchInquiry();
    }, [inquiry]);

    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header
                    closeButton
                    closeVariant="white"
                    className="bg-navy text-light border-front"
                >
                    <Modal.Title className="d-flex align-items-center">
                        <Tools className="me-2" />
                        INQUIRY DETAILS
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {!isLoading ? (
                            <>
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        xs="6"
                                        controlId="modalSubscriberName"
                                    >
                                        <Form.Label>
                                            SUBSCRIBER NAME:
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="e.g. JUAN"
                                            value={accountName}
                                            disabled={true}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        xs="6"
                                        controlId="modalAccountNumber"
                                    >
                                        <Form.Label>ACCOUNT NUMBER:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="095454515"
                                            value={accountNumber}
                                            disabled={true}
                                        />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        xs="12"
                                        controlId="modalAddress"
                                    >
                                        <Form.Label>
                                            SERVICE ADDRESS:
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="#551 Brgy.Alac San Quintin Pangasinan"
                                            value={serviceAddress}
                                            disabled={true}
                                        />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        xs="12"
                                        controlId="modalEmailAddress"
                                    >
                                        <Form.Label>EMAIL ADDRESS:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="umali.charlesedward@gmail.com"
                                            value={email}
                                            disabled={true}
                                        />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        xs="12"
                                        controlId="modalContactNumber"
                                    >
                                        <Form.Label>CONTACT NUMBER:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="09"
                                            value={contactNumber}
                                            disabled={true}
                                        />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        xs="12"
                                        controlId="modalPackage"
                                    >
                                        <Form.Label>
                                            PACKAGE DESCRIPTION:
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="09"
                                            value={plan}
                                            disabled={true}
                                        />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        xs="12"
                                        controlId="modalConcernType"
                                    >
                                        <Form.Label>CONCERN TYPE:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="09"
                                            value={type}
                                            disabled={true}
                                        />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        xs="12"
                                        controlId="modalComment"
                                    >
                                        <Form.Label>
                                            SUBSCRIBER REMARKS:
                                        </Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={4}
                                            value={description}
                                            disabled={true}
                                        />
                                    </Form.Group>
                                </Row>
                            </>
                        ) : (
                            <Spinner name="front" small={true} />
                        )}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        type="submit"
                        className="d-flex mb-2 btn-navy fw-bold align-items-center"
                        onClick={() => {
                            handleReplyShow();
                        }}
                    >
                        <ChatSquareText className="me-2" />
                        REPLY
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ViewInquiryModal;
