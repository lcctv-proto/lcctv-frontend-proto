import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function BalanceModal({ show, handleClose }) {
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
                    <Form>
                        <Row>
                            <Col>
                                <table className="table table-borderless table-striped shadow fs-6">
                                    <thead className="text-light bg-navy border-cashier">
                                        <tr>
                                            <th>TRANSACTION NUMBER</th>
                                            <th>TRANSACTION DATE</th>
                                            <th>TRANSACTION TYPE</th>
                                            <th>A/R TYPE</th>
                                            <th>AMOUNT</th>
                                            <th>PAID AMOUNT</th>
                                            <th>BALANCE</th>
                                            <th>REMARKS</th>
                                        </tr>
                                    </thead>
                                </table>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        type="submit"
                        className="d-flex mb-2 btn-navy fw-bold align-items-center"
                        onClick={() => {
                            console.log("ASDasd");
                        }}
                    >
                        BUTTON
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default BalanceModal;
