import { useState, useEffect } from "react";
import {
    ArrowReturnRight,
    LightbulbFill,
    Tools,
    Backspace,
} from "react-bootstrap-icons";

import axios from "axios";

import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Spinner from "../Spinner";

function SendReplyModal({ show, handleClose, inquiry }) {
    const [accountName, setAccountName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [email, setEmail] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");
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
                description,
                accountID: {
                    prefix,
                    accountName: { firstName, middleName, lastName },
                    acc_ctr,
                },
            } = res.data;

            setAccountName(`${firstName} ${middleName[0]}. ${lastName}`);
            setAccountNumber(`${prefix}${acc_ctr.toString().padStart(3, "0")}`);
            setEmail(email);
            setType(type);
            setDescription(description);
            setIsLoading(false);
        };

        if (show) fetchInquiry();
    }, [inquiry, show]);

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
                        SEND REPLY
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
                                            Subscriber Name:
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={accountName}
                                            disabled={true}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        xs="6"
                                        controlId="modalAccountNumber"
                                    >
                                        <Form.Label>Account Number:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={accountNumber}
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
                                            value={type}
                                            disabled={true}
                                        />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        xs="12"
                                        controlId="modalConcern"
                                    >
                                        <Form.Label>
                                            Subscriber Concern:
                                        </Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={4}
                                            value={description}
                                            disabled={true}
                                        />
                                    </Form.Group>
                                </Row>
                                <hr />
                                <Row className="mb-3">
                                    <h4>CREATE REPLY</h4>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        xs="12"
                                        controlId="modalEmail"
                                    >
                                        <Form.Label>To:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={email}
                                            disabled={true}
                                        />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        xs="12"
                                        controlId="modalSubject"
                                    >
                                        <Form.Label>Subject:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={subject}
                                            onChange={(e) =>
                                                setSubject(e.target.value)
                                            }
                                        />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        xs="12"
                                        controlId="modalBody"
                                    >
                                        <Form.Label>Body:</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={4}
                                            value={body}
                                            onChange={(e) =>
                                                setBody(e.target.value)
                                            }
                                        />
                                    </Form.Group>
                                </Row>
                            </>
                        ) : (
                            <Spinner name="front" small={true} />
                        )}
                    </Form>
                    <hr />
                    <Row>
                        <Col className="d-flex align-items-center">
                            <LightbulbFill className="me-2 text-warning fs-3" />{" "}
                            <span>Please reply with kindness.</span>
                        </Col>
                    </Row>
                </Modal.Body>

                <Modal.Footer>
                    <Button
                        type="submit"
                        className="d-flex mb-2 btn-navy fw-bold align-items-center"
                        onClick={() => {
                            handleClose();
                        }}
                    >
                        <Backspace className="me-2" /> BACK
                    </Button>
                    <Button
                        type="submit"
                        className="d-flex mb-2 btn-navy fw-bold align-items-center "
                        onClick={() => {
                            console.log("ASDasd");
                        }}
                    >
                        <ArrowReturnRight className="me-2" />
                        SEND REPLY
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default SendReplyModal;
