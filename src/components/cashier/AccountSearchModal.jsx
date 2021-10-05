import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { LightbulbFill } from "react-bootstrap-icons";

import { useEffect, useRef, useState } from "react";

import axios from "axios";

import AccountTable from "./AccountTable";
import SearchError from "../SearchError";
import Spinner from "../Spinner";

function AccountSearchModal({ show, handleClose, searchTerm, setSearchTerm }) {
    const [accounts, setAccounts] = useState([]);
    const [currentPage] = useState(1);
    const [accountsPerPage] = useState(10);
    const [isLoading, setIsLoading] = useState(true);
    const _isMounted = useRef(true);

    const indexOfLastAccount = currentPage * accountsPerPage;
    const indexOfFirstAccount = indexOfLastAccount - accountsPerPage;
    const currentAccounts = accounts
        .filter((account) => {
            const {
                accountName: { firstName, middleName, lastName },
                prefix,
                acc_ctr,
            } = account;

            const name = `${firstName} ${middleName} ${lastName}`;
            const accSuffix = acc_ctr.toString().padStart(3, "0");
            const accNumber = `${prefix}${accSuffix}`;

            if (searchTerm === "") return account;
            else if (
                name.includes(searchTerm.toUpperCase()) ||
                accNumber.includes(searchTerm.toUpperCase())
            )
                return account;
            return null;
        })
        .slice(indexOfFirstAccount, indexOfLastAccount);

    const cols = ["ACCOUNT NUMBER", "ACCOUNT NAME", "STATUS"];

    useEffect(() => {
        const fetchAccounts = async () => {
            setIsLoading(true);
            if (_isMounted.current) {
                const res = await axios.get(
                    "https://lcctv-backend.herokuapp.com/api/accounts"
                );
                setAccounts([...res.data]);
            }
            setIsLoading(false);
        };

        fetchAccounts();

        return () => {
            _isMounted.current = false;
        };
    }, []);
    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header
                    closeButton
                    closeVariant="white"
                    className="bg-navy text-light border-cashier"
                >
                    <Modal.Title>Search Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <Form.Control
                                className="me-2"
                                type="text"
                                placeholder="Account Number or Account Name"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                maxLength="30"
                            />
                        </Col>
                    </Row>

                    <Row className="mt-3">
                        <Col>
                            {isLoading ? (
                                <Spinner name="cashier" small={true} />
                            ) : currentAccounts.length === 0 ? (
                                <SearchError
                                    searchTerm={searchTerm}
                                    small={true}
                                />
                            ) : (
                                <AccountTable
                                    currentAccounts={currentAccounts}
                                    cols={cols}
                                />
                            )}
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer className="justify-content-start">
                    <LightbulbFill className="text-warning h3" />
                    You can search using account's number or name.
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AccountSearchModal;
