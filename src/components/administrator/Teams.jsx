import { useEffect, useState } from "react";

import api from "../../api/api";

import Spinner from "../Spinner";
import TeamsRow from "./TeamsRow";

function Teams() {
    const [teams, setTeams] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchTeams = async () => {
            setIsLoading(true);
            const res = await api.teams.get("");
            setTeams(res.data);
            setIsLoading(false);
        };

        fetchTeams();
    }, []);

    return (
        <div className="row">
            {isLoading ? (
                <Spinner name="admin" />
            ) : (
                teams.map((team) => {
                    return <TeamsRow team={team} key={team._id} />;
                })
            )}
        </div>
    );
}

export default Teams;
