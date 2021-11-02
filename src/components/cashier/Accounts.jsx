import { useState } from "react";
import {
    Search,
    PlusCircle,
    DoorOpen,
    WindowSidebar,
    FileRuled,
} from "react-bootstrap-icons";

import api from "../../api/api";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Form from "react-bootstrap/Form";

import Spinner from "react-bootstrap/Spinner";

import AccountSearchModal from "./AccountSearchModal";
import AccountNotFoundDismissible from "./AccountNotFoundDismissible";
import PaymentsButton from "./PaymentsButton";
import WalkInModal from "./WalkInModal";
import PortalModal from "./PortalModal";
import BalanceModal from "./BalanceModal.jsx";

function Accounts() {
    const [searchTerm, setSearchTerm] = useState("");

    const [account, setAccount] = useState([]);

    const [show, setShow] = useState(false);
    const [_show, set_Show] = useState(false);

    const [walkShow, setWalkShow] = useState(false);
    const [portalShow, setPortalShow] = useState(false);
    const [balanceShow, setBalanceShow] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleWalkShow = () => {
        if (account.length !== 0) setWalkShow(true);
    };
    const handleWalkClose = () => setWalkShow(false);

    const handlePortalShow = () => {
        if (account.length !== 0) setPortalShow(true);
    };
    const handlePortalClose = () => setPortalShow(false);

    const handleBalanceShow = () => {
        if (account.length !== 0) setBalanceShow(true);
    };
    const handleBalanceClose = () => setBalanceShow(false);

    const handleClick = async () => {
        setIsLoading(true);

        try {
            set_Show(false);
            const res = await api.accounts.get(searchTerm, { type: "custom" });
            setAccount(res.data);
        } catch (err) {
            setAccount([]);
            set_Show(true);
        }

        setIsLoading(false);
    };

    const items = [
        {
            icon: <FileRuled className="m-3" />,
            title: "VIEW BALANCE",
            handleShow: handleBalanceShow,
        },
        {
            icon: <WindowSidebar className="m-3" />,
            title: "PAYMENT PORTAL",
            handleShow: handlePortalShow,
        },
        {
            icon: <DoorOpen className="m-3" />,
            title: "WALK-IN",
            handleShow: handleWalkShow,
        },
    ];

    return (
        <>
            <Row>
                <Col xs={12} md={9} className="mb-3">
                    <Form.Control
                        size="lg"
                        name="acc-num"
                        id="acc-num"
                        type="text"
                        placeholder="Account Number"
                        value={searchTerm}
                        onChange={(e) => {
                            set_Show(false);
                            setSearchTerm(e.target.value);
                        }}
                        maxLength="50"
                        onKeyPress={(e) => {
                            if (e.key === "Enter") handleClick();
                        }}
                    />
                </Col>
                <Col className="align-top">
                    <Button
                        variant="primary"
                        size="lg"
                        className="d-inline-flex btn-navy align-items-center"
                        onClick={handleClick}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <Spinner
                                    as="span"
                                    animation="border"
                                    role="status"
                                    size="sm"
                                />
                            </>
                        ) : (
                            <PlusCircle />
                        )}
                        <span className="ms-2">ADD</span>
                    </Button>
                    <Button
                        variant="primary"
                        size="lg"
                        className="d-inline-flex btn-navy ms-2"
                        onClick={handleShow}
                    >
                        <Search className="align-self-center" />
                        <span className="ms-2">SEARCH</span>
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <AccountNotFoundDismissible
                        show={_show}
                        setShow={set_Show}
                        title={searchTerm}
                    />
                </Col>
            </Row>
            <hr className="my-0" />
            <Row className="border-cashier">
                <Col>
                    <Row className="pt-3">
                        <Col xs={6}>
                            <p className="fs-4">ACCOUNT NUMBER:</p>
                            <p className="ms-2 fs-3 fw-bold m-0">
                                {account._id &&
                                    `${account.prefix}${account.acc_ctr
                                        .toString()
                                        .padStart(3, "0")}`}
                            </p>
                        </Col>

                        <Col xs={6}>
                            <p className="fs-4">ACCOUNT NAME:</p>
                            <p className="ms-2 fs-3 fw-bold m-0">
                                {account._id &&
                                    `${account.accountName.firstName} ${account.accountName.middleName[0]}. ${account.accountName.lastName}`}
                            </p>
                        </Col>
                    </Row>
                    <Row className="pt-3">
                        <Col xs={6}>
                            <p className="fs-4">ACCOUNT ADDRESS:</p>
                            <p className="ms-2 fs-3 fw-bold m-0">
                                {account._id &&
                                    `${account.serviceAddress.municipality}, ${account.serviceAddress.province}`}
                            </p>
                        </Col>

                        <Col xs={6}>
                            <p className="fs-4">ACCOUNT STATUS:</p>
                            <p className="ms-2 fs-3 fw-bold m-0">
                                {account._id && `${account.accountStatus}`}
                            </p>
                        </Col>
                    </Row>
                    <Row className="py-3">
                        <Col xs={6}>
                            <p className="fs-4">PACKAGE:</p>
                            <p className="ms-2 fs-3 fw-bold m-0">
                                {account._id &&
                                    `${account.packageID.description}`}
                            </p>
                        </Col>

                        <Col xs={6}>
                            <p className="fs-4">MONTHLY RECURRING CHARGES:</p>
                            <p className="ms-2 fs-3 fw-bold m-0">
                                {account._id &&
                                    `₱ ${account.packageID.price}.00`}
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="pt-3 text-light">
                {items.map(({ icon, title, handleShow }, index) => (
                    <PaymentsButton
                        icon={icon}
                        title={title}
                        show={handleShow}
                        key={index}
                    />
                ))}
            </Row>
            <AccountSearchModal
                show={show}
                handleClose={handleClose}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
            <WalkInModal show={walkShow} handleClose={handleWalkClose} />
            <PortalModal show={portalShow} handleClose={handlePortalClose} />
            <BalanceModal show={balanceShow} handleClose={handleBalanceClose} />
        </>
    );
}

export default Accounts;
