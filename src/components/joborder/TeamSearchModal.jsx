import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { LightbulbFill } from "react-bootstrap-icons";

import { useEffect, useRef, useState } from "react";

import api from "../../api/api";

import TeamTable from "./TeamTable";
import SearchError from "../SearchError";
import Spinner from "../Spinner";

function TeamSearchModal({ show, handleClose, searchTerm, setSearchTerm }) {
    const [teams, setTeams] = useState([]);
    const [currentPage] = useState(1);
    const [teamsPerPage] = useState(10);
    const [isLoading, setIsLoading] = useState(true);
    const _isMounted = useRef(true);

    const indexOfLastTeam = currentPage * teamsPerPage;
    const indexOfFirstTeam = indexOfLastTeam - teamsPerPage;
    const currentTeams = teams
        .filter((team) => {
            const {
                prefix,
                team_ctr,
                areaID: { description },
            } = team;

            const teamSuffix = team_ctr.toString().padStart(3, "0");
            const teamNumber = `${prefix}${teamSuffix}`;

            if (searchTerm === "") return team;
            else if (
                teamNumber.includes(searchTerm.toUpperCase()) ||
                description.includes(searchTerm.toUpperCase())
            )
                return team;
            return null;
        })
        .slice(indexOfFirstTeam, indexOfLastTeam);

    const cols = ["TEAM ID", "AREA ASSIGNED"];

    useEffect(() => {
        const fetchTeams = async () => {
            setIsLoading(true);
            if (_isMounted.current) {
                const res = await api.teams.get("");
                setTeams([...res.data]);
            }
            setIsLoading(false);
        };

        fetchTeams();

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
                    className="bg-navy text-light border-jo"
                >
                    <Modal.Title>SEARCH TEAMS</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <Form.Control
                                className="me-2"
                                type="text"
                                placeholder="Team Number or Team Name"
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
                            ) : currentTeams.length === 0 ? (
                                <SearchError
                                    searchTerm={searchTerm}
                                    small={true}
                                />
                            ) : (
                                <TeamTable
                                    currentTeams={currentTeams}
                                    cols={cols}
                                />
                            )}
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer className="justify-content-start">
                    <LightbulbFill className="text-warning h3" />
                    You can search using team number.
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default TeamSearchModal;
