function TeamTable({ currentTeams, cols }) {
    return (
        <table className="table table-borderless table-striped shadow fs-6">
            <thead className="text-light bg-navy border-jo">
                <tr>
                    {cols.map((col, index) => {
                        return <th key={index}>{col}</th>;
                    })}
                </tr>
            </thead>
            <tbody>
                {currentTeams.map(
                    ({
                        prefix,
                        team_ctr,
                        areaID: { description },

                        _id,
                    }) => {
                        const teamSuffix = team_ctr.toString().padStart(3, "0");
                        const teamNumber = `${prefix}${teamSuffix}`;

                        return (
                            <tr key={_id}>
                                <td>{teamNumber}</td>
                                <td>{description}</td>
                            </tr>
                        );
                    }
                )}
            </tbody>
        </table>
    );
}

export default TeamTable;
