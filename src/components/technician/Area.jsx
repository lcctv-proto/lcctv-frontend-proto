import { useEffect, useState } from "react";

import api from "../../api/api";

function Area() {
    const [team, setTeam] = useState();

    const teamID = "618e9e4ed3913c0045d40e2a";

    useEffect(() => {
        const fetchTeam = async () => {
            const res = await api.teams.get(teamID);
            setTeam(res.data);
        };

        fetchTeam();
    });

    return (
        <div className="row">
            <div className="col">
                <div className="h1">{team?.areaID?.description}</div>
                <div className="p text-center">
                    <img src={team?.areaID?.imageURL} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Area;
