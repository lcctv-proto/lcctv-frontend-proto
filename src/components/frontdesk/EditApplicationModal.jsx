import { useState, useEffect } from "react";
import {
    CheckCircle,
    XCircle,
    Backspace,
    FileEarmarkPerson,
} from "react-bootstrap-icons";

import api from "../../api/api";

import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Spinner from "../Spinner";

function EditApplicationModal({
    show,
    handleClose,
    application,
    applications,
    setApplications,
}) {
    const [accountID, setAccountID] = useState("");

    const [accountFirstName, setAccountFirstName] = useState("");
    const [accountMiddleName, setAccountMiddleName] = useState("");
    const [accountLastName, setAccountLastName] = useState("");

    const [birthdate, setBirthdate] = useState("");
    const [nationality, setNationality] = useState("");
    const [gender, setGender] = useState("");
    const [civilStatus, setCivilStatus] = useState("");

    const [unit, setUnit] = useState("");
    const [street, setStreet] = useState("");
    const [barangay, setBarangay] = useState("");
    const [municipality, setMunicipality] = useState("");
    const [province, setProvince] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [homeOwnership, setHomeOwnership] = useState("");
    const [residencyYear, setResidencyYear] = useState("");
    const [nearestLandmark, setNearestLandmark] = useState("");

    const [cellphoneNumber, setCellphoneNumber] = useState("");
    const [telephoneNumber, setTelephoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [motherFirstName, setMotherFirstName] = useState("");
    const [motherMiddleName, setMotherMiddleName] = useState("");
    const [motherLastName, setMotherLastName] = useState("");
    const [spouseFirstName, setSpouseFirstName] = useState("");
    const [spouseMiddleName, setSpouseMiddleName] = useState("");
    const [spouseLastName, setSpouseLastName] = useState("");

    const [governmentIdImageURL, setGovernmentIdImageURL] = useState("");
    const [billingImageURL, setBillingImageURL] = useState("");

    const [packageID, setPackageID] = useState("");

    const [isLoading, setIsLoading] = useState("");

    useEffect(() => {
        const fetchApplication = async () => {
            setIsLoading(true);
            const res = await api.applications.get(application);
            const account = res.data?.accountID;

            setAccountID(account._id);

            setAccountLastName(account.accountName?.lastName);
            setAccountFirstName(account.accountName?.firstName);
            setAccountMiddleName(account.accountName?.middleName);
            setNationality(account.additionalInfo?.nationality);
            const date = new Date(account.additionalInfo?.birthdate);
            setBirthdate(date.toISOString().split("T")[0]);
            setGender(account.additionalInfo?.gender);
            setCivilStatus(account.additionalInfo?.civilStatus);

            setUnit(account.serviceAddress?.unit);
            setStreet(account.serviceAddress?.street);
            setBarangay(account.serviceAddress?.barangay);
            setMunicipality(account.serviceAddress?.municipality);
            setProvince(account.serviceAddress?.province);
            setZipCode(account.serviceAddress?.zipCode);
            setHomeOwnership(account.serviceAddress?.homeOwnership);
            setResidencyYear(account.serviceAddress?.residencyYear);
            setNearestLandmark(account.serviceAddress?.nearestLandmark);

            setCellphoneNumber(account?.contactInfo?.cellphoneNumber);
            setTelephoneNumber(account?.contactInfo?.telephoneNumber);
            setEmail(account?.contactInfo?.email);
            setMotherFirstName(
                account?.contactInfo?.motherMaidenName?.firstName
            );
            setMotherMiddleName(
                account?.contactInfo?.motherMaidenName?.middleName
            );
            setMotherLastName(account?.contactInfo?.motherMaidenName?.lastName);
            setSpouseFirstName(account?.contactInfo?.spouseName?.firstName);
            setSpouseMiddleName(account?.contactInfo?.spouseName?.middleName);
            setSpouseLastName(account?.contactInfo?.spouseName?.lastName);

            setGovernmentIdImageURL(account?.governmentIdImageURL);
            setBillingImageURL(account?.billingImageURL);

            setPackageID(account.packageID.description);

            setIsLoading(false);
        };

        if (show) fetchApplication();
    }, [application, show]);

    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header
                    closeButton
                    closeVariant="white"
                    className="bg-navy text-light border-front"
                >
                    <Modal.Title className="d-flex align-items-center">
                        <FileEarmarkPerson className="me-2" />
                        APPLICATION FORM
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {isLoading ? (
                        <Spinner name="front" small={true} />
                    ) : (
                        <Form>
                            <Row className="mb-3 fs-5 fw-bold">
                                <Form.Group
                                    as={Col}
                                    xs="12"
                                    controlId="modalPlan"
                                >
                                    <Form.Label>SELECTED PLAN</Form.Label>
                                    <Form.Select
                                        value={packageID}
                                        onChange={(e) =>
                                            setPackageID(e.target.value)
                                        }
                                    >
                                        <option value="BASIC 640">
                                            BASIC 640
                                        </option>
                                        <option value="PREMIUM 790">
                                            PREMIUM 790
                                        </option>
                                        <option value="INTERNATIONAL 1099">
                                            INTERNATIONAL 1099
                                        </option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>
                            <hr />
                            <Row className="mb-3 fs-5 fw-bold">
                                <Col>PERSONAL INFORMATION</Col>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group
                                    as={Col}
                                    xs="12"
                                    controlId="modalFirstName"
                                >
                                    <Form.Label>First Name:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={accountFirstName}
                                        onChange={(e) =>
                                            setAccountFirstName(e.target.value)
                                        }
                                    />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group
                                    as={Col}
                                    xs="12"
                                    controlId="modalMiddleName"
                                >
                                    <Form.Label>Middle Name:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={accountMiddleName}
                                        onChange={(e) =>
                                            setAccountMiddleName(e.target.value)
                                        }
                                    />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group
                                    as={Col}
                                    xs="12"
                                    controlId="modalFamilyName"
                                >
                                    <Form.Label>Family Name:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={accountLastName}
                                        onChange={(e) =>
                                            setAccountLastName(e.target.value)
                                        }
                                    />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group
                                    as={Col}
                                    xs="6"
                                    controlId="modalNationality"
                                >
                                    <Form.Label>Nationality:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={nationality}
                                        onChange={(e) =>
                                            setNationality(e.target.value)
                                        }
                                    />
                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    xs="6"
                                    controlId="modalBirthdate"
                                >
                                    <Form.Label>Birthdate:</Form.Label>
                                    <Form.Control
                                        type="date"
                                        value={birthdate}
                                        onChange={(e) =>
                                            setBirthdate(e.target.value)
                                        }
                                    />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group
                                    as={Col}
                                    xs="6"
                                    controlId="modalSex"
                                >
                                    <Form.Label>Sex: </Form.Label>
                                    <Form.Select
                                        value={gender}
                                        onChange={(e) =>
                                            setGender(e.target.value)
                                        }
                                    >
                                        <option value="MALE">MALE</option>
                                        <option value="FEMALE">FEMALE</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    xs="6"
                                    controlId="modalSex"
                                >
                                    <Form.Label>Civil Status: </Form.Label>
                                    <Form.Select
                                        value={civilStatus}
                                        onChange={(e) =>
                                            setCivilStatus(e.target.value)
                                        }
                                    >
                                        <option value="SINGLE">SINGLE</option>
                                        <option value="MARRIED">MARRIED</option>
                                        <option value="WIDOWED">WIDOWED</option>
                                        <option value="SEPARATED">
                                            SEPARATED
                                        </option>
                                        <option value="DIVORCED">
                                            DIVORCED
                                        </option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>
                            <hr />
                            <Row className="mb-3 fs-5 fw-bold">
                                <Col> HOME/INSTALLATION ADDRESS</Col>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group
                                    as={Col}
                                    xs="6"
                                    controlId="modalUnitNumber"
                                >
                                    <Form.Label>Unit/House Number:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={unit}
                                        onChange={(e) =>
                                            setUnit(e.target.value)
                                        }
                                    />
                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    xs="6"
                                    controlId="modalStreet"
                                >
                                    <Form.Label>Street:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={street}
                                        onChange={(e) =>
                                            setStreet(e.target.value)
                                        }
                                    />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group
                                    as={Col}
                                    xs="6"
                                    controlId="modalBarangay"
                                >
                                    <Form.Label>Barangay:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={barangay}
                                        onChange={(e) =>
                                            setBarangay(e.target.value)
                                        }
                                    />
                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    xs="6"
                                    controlId="modalMunicipality"
                                >
                                    <Form.Label>Municipality:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={municipality}
                                        onChange={(e) =>
                                            setMunicipality(e.target.value)
                                        }
                                    />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group
                                    as={Col}
                                    xs="6"
                                    controlId="modalHomeOwnership"
                                >
                                    <Form.Label>Home Ownership: </Form.Label>
                                    <Form.Select
                                        value={homeOwnership}
                                        onChange={(e) =>
                                            setHomeOwnership(e.target.value)
                                        }
                                    >
                                        <option value="OWNED">OWNED</option>
                                        <option value="LIVING WITH RELATIVES">
                                            LIVING WITH RELATIVES
                                        </option>
                                        <option value="RENTED">RENTED</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    xs="6"
                                    controlId="modalYearsOfResidency"
                                >
                                    <Form.Label>Years Of Residency:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={residencyYear}
                                        onChange={(e) =>
                                            setResidencyYear(e.target.value)
                                        }
                                    />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group
                                    as={Col}
                                    xs="6"
                                    controlId="modalProvince"
                                >
                                    <Form.Label>Province:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={province}
                                        onChange={(e) =>
                                            setProvince(e.target.value)
                                        }
                                    />
                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    xs="6"
                                    controlId="modalZipCode"
                                >
                                    <Form.Label>Zip Code:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={zipCode}
                                        onChange={(e) =>
                                            setZipCode(e.target.value)
                                        }
                                    />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group
                                    as={Col}
                                    xs="12"
                                    controlId="modalNearestLandmark"
                                >
                                    <Form.Label>Nearest Landmark:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={nearestLandmark}
                                        onChange={(e) =>
                                            setNearestLandmark(e.target.value)
                                        }
                                    />
                                </Form.Group>
                            </Row>
                            <hr />
                            <Row className="mb-3 fs-5 fw-bold">
                                <Col> CONTACT INFORMATION </Col>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group
                                    as={Col}
                                    xs="6"
                                    controlId="modalCellphoneNumber"
                                >
                                    <Form.Label>Cellphone Number:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={cellphoneNumber}
                                        onChange={(e) =>
                                            setCellphoneNumber(e.target.value)
                                        }
                                    />
                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    xs="6"
                                    controlId="modalTelephoneNumber"
                                >
                                    <Form.Label>Telephone Number:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={telephoneNumber}
                                        onChange={(e) =>
                                            setTelephoneNumber(e.target.value)
                                        }
                                    />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group
                                    as={Col}
                                    xs="12"
                                    controlId="modalEmailAddress"
                                >
                                    <Form.Label>Email Address:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </Form.Group>
                            </Row>
                            <hr />
                            <Row className="mb-3 fs-5 fw-bold">
                                <Col>MOTHER'S MAIDEN NAME</Col>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group
                                    as={Col}
                                    xs="12"
                                    controlId="modalMomFirstName"
                                >
                                    <Form.Label>First Name:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={motherFirstName}
                                        onChange={(e) =>
                                            setMotherFirstName(e.target.value)
                                        }
                                    />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group
                                    as={Col}
                                    xs="12"
                                    controlId="modalMomMiddleName"
                                >
                                    <Form.Label>Middle Name:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={motherMiddleName}
                                        onChange={(e) =>
                                            setMotherMiddleName(e.target.value)
                                        }
                                    />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group
                                    as={Col}
                                    xs="12"
                                    controlId="modalMomFamilyName"
                                >
                                    <Form.Label>Family Name:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={motherLastName}
                                        onChange={(e) =>
                                            setMotherLastName(e.target.value)
                                        }
                                    />
                                </Form.Group>
                            </Row>

                            {civilStatus === "MARRIED" && (
                                <>
                                    <hr />
                                    <Row className="mb-3 fs-5 fw-bold">
                                        <Col>SPOUSE'S NAME</Col>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group
                                            as={Col}
                                            xs="12"
                                            controlId="modalSpouseFirstName"
                                        >
                                            <Form.Label>First Name:</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={spouseFirstName}
                                                onChange={(e) =>
                                                    setSpouseFirstName(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group
                                            as={Col}
                                            xs="12"
                                            controlId="modalSpouseMiddleName"
                                        >
                                            <Form.Label>
                                                Middle Name:
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={spouseMiddleName}
                                                onChange={(e) =>
                                                    setSpouseMiddleName(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group
                                            as={Col}
                                            xs="12"
                                            controlId="modalSpouseFamilyName"
                                        >
                                            <Form.Label>
                                                Family Name:
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={spouseLastName}
                                                onChange={(e) =>
                                                    setSpouseLastName(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </Form.Group>
                                    </Row>
                                </>
                            )}
                            <hr />
                            <Row className="mb-3 fs-5 fw-bold">
                                <Col>ID and PROOF OF BILLING</Col>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group
                                    as={Col}
                                    xs="12"
                                    controlId="modalGovernmentIssuedID"
                                >
                                    <Form.Label>
                                        Government Issued ID:
                                    </Form.Label>
                                    <img
                                        src={governmentIdImageURL}
                                        className="img-fluid mb-2"
                                        alt="govtID"
                                    />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group
                                    as={Col}
                                    xs="12"
                                    controlId="modalProofOfBilling"
                                >
                                    <Form.Label>Proof of Billing:</Form.Label>
                                    <img
                                        src={billingImageURL}
                                        className="img-fluid mb-2"
                                        alt="pob"
                                    />
                                </Form.Group>
                            </Row>
                        </Form>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        type="submit"
                        className="d-flex mb-2 btn-navy fw-bold align-items-center me-auto"
                        onClick={handleClose}
                    >
                        <Backspace className="me-2" />
                        BACK
                    </Button>
                    <Button
                        type="submit"
                        className="d-flex mb-2 btn btn-danger btn-delete fw-bold align-items-center"
                        onClick={() => {
                            api.applications
                                .patch(application, "DENIED", 99)
                                .then(() => {
                                    setApplications(
                                        applications.filter((applications) => {
                                            return (
                                                applications._id !== application
                                            );
                                        })
                                    );
                                    api.accounts.patchStatus(
                                        accountID,
                                        "DENIED"
                                    );
                                    alert("APPLICATION DENIED!");
                                })
                                .catch((err) => alert(err));
                            handleClose();
                        }}
                    >
                        <XCircle className="me-2" /> DENY APPLICATION
                    </Button>
                    <Button
                        type="submit"
                        className="d-flex mb-2 btn btn-success btn-approve fw-bold align-items-center"
                        onClick={() => {
                            api.applications
                                .patch(application, "PENDING PAYMENT", 4)
                                .then(() => {
                                    setApplications(
                                        applications.filter((applications) => {
                                            return (
                                                applications._id !== application
                                            );
                                        })
                                    );
                                    api.accounts.patchStatus(
                                        accountID,
                                        "INITIAL PAYMENT"
                                    );
                                    alert("APPLICATION SUCCESSFULLY APPROVED!");
                                })
                                .catch((err) => alert(err));
                            handleClose();
                        }}
                    >
                        <CheckCircle className="me-2" /> APPROVE APPLICATION
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditApplicationModal;
