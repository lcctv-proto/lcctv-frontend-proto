import { useEffect, useState } from "react";
import { PlusCircle } from "react-bootstrap-icons";

import axios from "axios";

import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import authHeader from "../../auth/auth-header";

function AddChannelModal({ show, handleClose, channels, setChannels }) {
    const [description, setDescription] = useState("");
    const [assignedNumber, setAssignedNumber] = useState("");
    const [label, setLabel] = useState("");
    const [bannerImage, setBannerImage] = useState("");
    const [channelImage1, setChannelImage1] = useState("");
    const [channelImage2, setChannelImage2] = useState("");
    const [channelImage3, setChannelImage3] = useState("");
    const [videoURL, setVideoURL] = useState("");
    const [isHD, setIsHD] = useState(false);
    const [packages, setPackages] = useState("");
    const [checkedState, setCheckedState] = useState(0);

    useEffect(() => {
        const fetchPackages = async () => {
            const res = await axios.get(
                "https://lcctv-backend.herokuapp.com/api/packages"
            );
            setPackages([...res.data]);
            setCheckedState(new Array(res.data.length).fill(false));
        };

        fetchPackages();
    }, []);

    const handleSubmit = () => {
        const selectedPackages = packages.map((value, index) => {
            if (checkedState[index]) return value._id;
            return null;
        });
        const channelData = new FormData();
        channelData.append(
            "payload",
            JSON.stringify({
                description,
                assignedNumber,
                label,
                videoURL,
                packages: selectedPackages,
                isHD,
            })
        );
        channelData.append("bannerImageURL", bannerImage);
        channelData.append("channelImage1URL", channelImage1);
        channelData.append("channelImage2URL", channelImage2);
        channelData.append("channelImage3URL", channelImage3);

        axios
            .post(
                "https://lcctv-backend.herokuapp.com/api/channels",
                channelData,
                { headers: authHeader() }
            )
            .then((res) => {
                setChannels([...channels, res.data]);
                handleClose();
                alert("File Upload success");
            })
            .catch((err) => alert("File Upload Error"));
    };
    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header
                    closeButton
                    closeVariant="white"
                    className="bg-navy text-light border-admin"
                >
                    <Modal.Title>ADD CHANNELS</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                xs="8"
                                controlId="modalChannelName"
                                value={description}
                                onChange={(e) => {
                                    setDescription(e.target.value);
                                }}
                            >
                                <Form.Label>Channel Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="e.g. CARTOON NETWORK"
                                />
                            </Form.Group>

                            <Form.Group
                                as={Col}
                                xs="4"
                                controlId="modalChannelNumber"
                                value={assignedNumber}
                                onChange={(e) => {
                                    setAssignedNumber(e.target.value);
                                }}
                            >
                                <Form.Label>Channel Number</Form.Label>
                                <Form.Control type="number" placeholder="39" />
                            </Form.Group>
                        </Row>
                        <Form.Group
                            as={Col}
                            className="mb-3"
                            controlId="modalChannelInfo"
                        >
                            <Form.Label>Channel Information</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                value={label}
                                onChange={(e) => {
                                    setLabel(e.target.value);
                                }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" id="modalIsHD">
                            <Form.Check
                                type="checkbox"
                                label="HD CHANNEL"
                                defaultChecked={isHD}
                                onChange={(e) => {
                                    setIsHD(!isHD);
                                }}
                            />
                        </Form.Group>
                        <hr />
                        <Row>
                            <Form.Group
                                as={Col}
                                className="mb-3"
                                controlId="modalChannelBanner"
                                value={bannerImage}
                                onChange={(e) => {
                                    setBannerImage(e.target.files[0]);
                                }}
                            >
                                <Form.Label>Channel Banner Image</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                className="mb-3"
                                controlId="modalChannelImage1"
                                value={channelImage1}
                                onChange={(e) => {
                                    setChannelImage1(e.target.files[0]);
                                }}
                            >
                                <Form.Label>Channel Image 1</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group
                                as={Col}
                                className="mb-3"
                                controlId="modalChannelImage2"
                                value={channelImage2}
                                onChange={(e) => {
                                    setChannelImage2(e.target.files[0]);
                                }}
                            >
                                <Form.Label>Channel Image 2</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                className="mb-3"
                                controlId="modalChannelImage3"
                                value={channelImage3}
                                onChange={(e) => {
                                    setChannelImage3(e.target.files[0]);
                                }}
                            >
                                <Form.Label>Channel Image 3</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>
                        </Row>
                        <Form.Group
                            as={Col}
                            className="mb-3"
                            controlId="modalChannelVideo"
                            value={videoURL}
                            onChange={(e) => {
                                setVideoURL(e.target.value);
                            }}
                        >
                            <Form.Label>Channel Video Link</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            />
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label as="legend" column sm={2}>
                                Channel Plans
                            </Form.Label>
                            {packages && (
                                <Col sm={10}>
                                    {packages.map((value, index) => {
                                        return (
                                            <Form.Check
                                                type="checkbox"
                                                label={value.description}
                                                name={value._id}
                                                id={value._id}
                                                checked={checkedState[index]}
                                                onChange={() =>
                                                    handleOnChange(index)
                                                }
                                                key={value._id}
                                            />
                                        );
                                    })}
                                </Col>
                            )}
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        type="submit"
                        className="d-flex mb-2 btn-navy fw-bold align-items-center"
                        onClick={handleSubmit}
                    >
                        <PlusCircle className="me-2" /> ADD CHANNEL
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddChannelModal;
