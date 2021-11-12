import { useEffect, useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";

function AccountAccordion({ account }) {
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");

    const [nationality, setNationality] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [gender, setGender] = useState("");
    const [civilStatus, setCivilStatus] = useState("");

    const [cellphoneNumber, setCellphoneNumber] = useState("");
    const [telephoneNumber, setTelephoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [motherFirstName, setMotherFirstName] = useState("");
    const [motherMiddleName, setMotherMiddleName] = useState("");
    const [motherLastName, setMotherLastName] = useState("");
    const [spouseFirstName, setSpouseFirstName] = useState("");
    const [spouseMiddleName, setSpouseMiddleName] = useState("");
    const [spouseLastName, setSpouseLastName] = useState("");

    useEffect(() => {
        if (account?._id) {
            setLastName(account?.accountName?.lastName);
            setFirstName(account?.accountName?.firstName);
            setMiddleName(account?.accountName?.middleName);

            setNationality(account?.additionalInfo?.nationality);
            const date = new Date(account?.additionalInfo?.birthdate);
            setBirthdate(date.toISOString().split("T")[0]);
            setGender(account?.additionalInfo?.gender);
            setCivilStatus(account?.additionalInfo?.civilStatus);

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
        }
    }, [account]);
    return (
        <Col>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="bg-navy border-front text-light">
                        Personal Information
                    </Accordion.Header>
                    <Accordion.Body>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                xs="4"
                                controlId="modalFamilyName"
                            >
                                <Form.Label>Family Name:</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={lastName}
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                />
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                xs="4"
                                controlId="modalFirstName"
                            >
                                <Form.Label>First Name:</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={firstName}
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                />
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                xs="4"
                                controlId="modalMiddleName"
                            >
                                <Form.Label>Middle Name:</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={middleName}
                                    onChange={(e) =>
                                        setMiddleName(e.target.value)
                                    }
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                xs="4"
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
                                xs="4"
                                controlId="modalBirthDate"
                            >
                                <Form.Label>Birth Date:</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={birthdate}
                                    onChange={(e) =>
                                        setBirthdate(e.target.value)
                                    }
                                />
                            </Form.Group>
                            <Form.Group as={Col} xs="2" controlId="modalSex">
                                <Form.Label>Sex: </Form.Label>
                                <Form.Select
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                >
                                    <option hidden={true}>SELECT SEX</option>
                                    <option>MALE</option>
                                    <option>FEMALE</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                xs="2"
                                controlId="modalCivilStatus"
                            >
                                <Form.Label>Civil Status: </Form.Label>
                                <Form.Select
                                    value={civilStatus}
                                    onChange={(e) =>
                                        setCivilStatus(e.target.value)
                                    }
                                >
                                    <option hidden={true}>
                                        SELECT CIVIL STATUS
                                    </option>
                                    <option>SINGLE</option>
                                    <option>MARRIED</option>
                                    <option>WIDOWED</option>
                                    <option>SEPARATED</option>
                                    <option>DIVORCED</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header className="bg-navy border-front">
                        Contact Information
                    </Accordion.Header>
                    <Accordion.Body>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                xs="4"
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
                                xs="4"
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
                            <Form.Group
                                as={Col}
                                xs="4"
                                controlId="modalEmailAddress"
                            >
                                <Form.Label>Email Address:</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3 h5">
                            <Col>Mother's Maiden Name</Col>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                xs="4"
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
                            <Form.Group
                                as={Col}
                                xs="4"
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
                            <Form.Group
                                as={Col}
                                xs="4"
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
                        {civilStatus === "MARRIED" && (
                            <>
                                <Row className="mb-3 h5">
                                    <Col>Spouse's Name</Col>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalSpouseFamilyName"
                                    >
                                        <Form.Label>Family Name:</Form.Label>
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
                                    <Form.Group
                                        as={Col}
                                        xs="4"
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
                                    <Form.Group
                                        as={Col}
                                        xs="4"
                                        controlId="modalSpouseMiddleName"
                                    >
                                        <Form.Label>Middle Name:</Form.Label>
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
                            </>
                        )}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Col>
    );
}

export default AccountAccordion;
