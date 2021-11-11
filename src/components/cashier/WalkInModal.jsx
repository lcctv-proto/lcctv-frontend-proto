import { useState } from "react";

import api from "../../api/api";

import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

import FeesModal from "./FeesModal";

function WalkInModal({ show, handleClose, accountID }) {
    const [paymentMode, setPaymentMode] = useState("");
    const [receiptNumber, setReceiptNumber] = useState("");
    const [curr, setCurr] = useState(new Date());
    const [id, setID] = useState("");
    const [items, setItems] = useState([]);
    const [amountPaid, setAmountPaid] = useState("");
    const [remarks, setRemarks] = useState("");
    const [ctr, setCtr] = useState(0);

    const [feesShow, setFeesShow] = useState("");

    const handleFeesShow = () => {
        setFeesShow(true);
    };
    const handleFeesClose = () => {
        setFeesShow(false);
    };

    const localDateString = curr.toISOString().split("T")[0];

    const fetchFees = async () => {
        try {
            if (id) {
                const res = await api.fees.get(id, { type: "custom" });
                setItems([...items, { data: res.data, key: ctr }]);
                setCtr(ctr + 1);
            }
        } catch (err) {
            alert("Fee ID not found");
        }
    };

    function deleteRow(id) {
        const removeItem = items.filter((item) => {
            return item.key !== id;
        });
        setItems(removeItem);
    }

    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header
                    closeButton
                    closeVariant="white"
                    className="bg-navy text-light border-cashier"
                >
                    <Modal.Title>WALK-IN PAYMENT</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} xs="6" controlId="modalDate">
                                <Form.Label>Date of Transaction: </Form.Label>
                                <Form.Control
                                    type="date"
                                    placeholder="e.g. JUAN"
                                    value={localDateString}
                                    onChange={(e) => {
                                        setCurr(e.target.valueAsDate);
                                    }}
                                />
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                xs="6"
                                controlId="modalModeOfPayments"
                            >
                                <Form.Label>Mode of Payment: </Form.Label>
                                <Form.Select
                                    value={paymentMode}
                                    onChange={(e) => {
                                        setPaymentMode(e.target.value);
                                    }}
                                >
                                    <option value="cash">CASH</option>
                                    <option value="check">CHECK</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                xs="8"
                                controlId="modalReceiptNumber"
                            >
                                <Form.Label>Receipt Number: </Form.Label>
                                <Form.Control
                                    type="text"
                                    value={receiptNumber}
                                    onChange={(e) =>
                                        setReceiptNumber(e.target.value)
                                    }
                                />
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                xs="4"
                                controlId="modalReceiptNumber"
                            >
                                <Form.Label>Amount Paid: </Form.Label>
                                <InputGroup>
                                    <InputGroup.Text>₱</InputGroup.Text>
                                    <Form.Control
                                        type="number"
                                        value={amountPaid}
                                        onChange={(e) =>
                                            setAmountPaid(e.target.value)
                                        }
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                xs="12"
                                controlId="modalReceiptNumber"
                            >
                                <Form.Label>Remarks: </Form.Label>
                                <Form.Control
                                    as="textarea"
                                    value={remarks}
                                    onChange={(e) => setRemarks(e.target.value)}
                                    rows={4}
                                />
                            </Form.Group>
                        </Row>
                        <hr />
                        <Row className="mb-3 align-items-end">
                            <Form.Group as={Col} xs="8" controlId="modalCode">
                                <Form.Label>Enter Fee Code: </Form.Label>
                                <Form.Control
                                    type="text"
                                    value={id}
                                    onChange={(e) => setID(e.target.value)}
                                />
                            </Form.Group>
                            <Col xs="4" className="align-bottom">
                                <Button variant="dark" onClick={fetchFees}>
                                    ADD
                                </Button>
                                <Button
                                    variant="success"
                                    className="ms-2"
                                    onClick={handleFeesShow}
                                >
                                    SHOW FEES
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <table className="table table-responsive table-borderless table-striped shadow">
                                    <thead className="bg-navy border-cashier text-light text-center">
                                        <tr>
                                            <th style={{ width: "20px" }}></th>
                                            <th>FEE CODE</th>
                                            <th>FEE DESCRIPTION</th>
                                            <th>FEE</th>
                                        </tr>
                                    </thead>
                                    <tbody id="fee_table">
                                        {items.map((value) => {
                                            return (
                                                <tr
                                                    key={value?.key}
                                                    className="text-center"
                                                >
                                                    <td
                                                        style={{
                                                            width: "20px",
                                                        }}
                                                    >
                                                        <button
                                                            className="btn btn-close "
                                                            onClick={() => {
                                                                deleteRow(
                                                                    value?.key
                                                                );
                                                            }}
                                                        ></button>
                                                    </td>
                                                    <td>
                                                        {`${
                                                            value?.data?.prefix
                                                        }${value?.data?.fee_ctr
                                                            .toString()
                                                            .padStart(3, "0")}`}
                                                    </td>
                                                    <td>
                                                        {
                                                            value?.data
                                                                ?.description
                                                        }
                                                    </td>
                                                    <td className="text-end">
                                                        {value?.data?.price}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                    <tfoot className="bg-light">
                                        <tr>
                                            <td></td>
                                            <td
                                                colSpan="2"
                                                className="fw-bold text-end"
                                            >
                                                TOTAL AMOUNT DUE:
                                            </td>
                                            <td
                                                id="total"
                                                className="fw-bold text-end"
                                            >
                                                {items.reduce(
                                                    (acc, obj) =>
                                                        acc + obj.data.price,
                                                    0
                                                )}
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        type="submit"
                        className="d-flex mb-2 btn-navy fw-bold align-items-center"
                        onClick={async () => {
                            const feeIDs = items.map((a) => a.data._id);
                            const res = await api.payments.post({
                                accountID,
                                modeOfPayment: paymentMode,
                                receiptNumber,
                                feeIDs,
                                amountPaid,
                                remarks,
                            });
                            console.log(res);
                        }}
                    >
                        CLOSE PAYMENT
                    </Button>
                </Modal.Footer>
            </Modal>
            <FeesModal show={feesShow} handleClose={handleFeesClose} />
        </>
    );
}

export default WalkInModal;
