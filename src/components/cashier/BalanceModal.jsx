import { useState, useEffect } from "react";

import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Spinner from "../Spinner";

import api from "../../api/api";

function BalanceModal({ show, handleClose, account }) {
    const [payments, setPayments] = useState([]);
    const [invoices, setInvoices] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchBilling = async () => {
            setIsLoading(true);

            const res = await api.accounts.getBalance(account);
            setPayments(res.data.payments);
            setInvoices(res.data.invoices);

            setIsLoading(false);
        };

        if (show) fetchBilling();
    }, [show, account]);

    return (
        <>
            <Modal show={show} onHide={handleClose} size="xl">
                <Modal.Header
                    closeButton
                    closeVariant="white"
                    className="bg-navy text-light border-cashier"
                >
                    <Modal.Title>A/R BALANCE</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {!isLoading ? (
                        <Form>
                            <Row>
                                <Col>
                                    {[...payments, ...invoices].length !== 0 ? (
                                        <table className="table table-borderless table-striped shadow fs-6">
                                            <thead className="text-light bg-navy border-cashier">
                                                <tr>
                                                    <th>TRANSACTION NUMBER</th>
                                                    <th>TRANSACTION DATE</th>
                                                    <th>TRANSACTION TYPE</th>
                                                    <th>A/R TYPE</th>
                                                    <th>AMOUNT</th>
                                                    <th>PAID AMOUNT</th>
                                                    <th>REMARKS</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {[...payments, ...invoices]

                                                    .map((value) => {
                                                        return (
                                                            <tr key={value._id}>
                                                                <td>
                                                                    {`${
                                                                        value.prefix
                                                                    }${
                                                                        value.pay_ctr
                                                                            ?.toString()
                                                                            .padStart(
                                                                                3,
                                                                                "0"
                                                                            ) ??
                                                                        value.inv_ctr
                                                                            ?.toString()
                                                                            .padStart(
                                                                                3,
                                                                                "3"
                                                                            )
                                                                    }`}
                                                                </td>
                                                                <td>
                                                                    {value.date}
                                                                </td>
                                                                <td className="text-center">
                                                                    {value.modeOfPayment ??
                                                                        "INVOICE"}
                                                                </td>
                                                                <td className="text-center">
                                                                    {value.inv_ctr
                                                                        ? "INV"
                                                                        : ""}
                                                                    {value.pay_ctr
                                                                        ? "PAY"
                                                                        : ""}
                                                                </td>
                                                                <td className="text-end">
                                                                    {value.amountDue ??
                                                                        "0"}
                                                                </td>
                                                                <td className="text-end">
                                                                    {value.amountPaid ??
                                                                        value.checkAmount ??
                                                                        "0"}
                                                                </td>
                                                                <td></td>
                                                            </tr>
                                                        );
                                                    })
                                                    .sort(
                                                        (a, b) =>
                                                            a.date - b.date
                                                    )}
                                            </tbody>
                                        </table>
                                    ) : (
                                        "No balance yet! "
                                    )}
                                </Col>
                            </Row>
                        </Form>
                    ) : (
                        <Spinner name="cashier" small={true} />
                    )}
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button
                        type="submit"
                        className="d-flex mb-2 btn-navy fw-bold align-items-center"
                        onClick={() => {
                            console.log("ASDasd");
                        }}
                    >
                        BUTTON
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default BalanceModal;
