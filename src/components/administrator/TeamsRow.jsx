import { Geo, Pencil, Trash } from "react-bootstrap-icons";

function TeamsRow({ team }) {
    return (
        <div className="col-12 py-0">
            <table className="table table-borderless border shadow">
                <thead className="text-light bg-navy">
                    <tr>
                        <th className="" style={{ width: "40%" }}>
                            <span className="fs-3">{`${
                                team.prefix
                            }${team.team_ctr
                                .toString()
                                .padStart(3, "0")}`}</span>
                            <span className="ms-3 ps-3 border-start align-middle">
                                MEMBER LIST AND ACTIONS
                            </span>
                        </th>
                        <th className="text-center" style={{ width: 0.4 }}></th>
                        <th className="text-center" style={{ width: 0.4 }}></th>
                        <th className="text-center" style={{ width: 0.4 }}></th>
                        <th className="text-center" style={{ width: 0.4 }}></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-0">
                            <table className="table table-responsive mb-0">
                                <thead className="text-navy">
                                    <tr>
                                        <th>FIRST NAME</th>
                                        <th>MIDDLE NAME</th>
                                        <th>FAMILY NAME</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {team.personnelIDs.map(
                                        ({ personnelName }, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>
                                                        {
                                                            personnelName.firstName
                                                        }
                                                    </td>
                                                    <td>
                                                        {
                                                            personnelName.middleName
                                                        }
                                                    </td>
                                                    <td>
                                                        {personnelName.lastName}
                                                    </td>
                                                </tr>
                                            );
                                        }
                                    )}
                                </tbody>
                            </table>
                        </td>
                        {/* <td className="border-start border-dark text-center align-middle">
                            <button
                                className="btn btn-white w-100 p-3 shadow shadow-sm overflow-hidden btn-dispatch"
                                onClick={() => {
                                    console.log("asd");
                                }}
                                disabled
                            >
                                <LayerForward style={{ fontSize: "2rem" }} />
                                <p className="mb-1 pb-1 border-bottom border-dark">
                                    DISPATCH LIST
                                </p>
                                <p className="fw-bold m-0">
                                    {team.installations}
                                </p>
                            </button>
                        </td> */}
                        <td className="text-center align-middle">
                            <button
                                className="btn btn-white w-100 p-3 shadow shadow-sm overflow-hidden btn-area"
                                onClick={() => {
                                    console.log("asd");
                                }}
                                disabled
                            >
                                <Geo style={{ fontSize: "2rem" }} />
                                <p className="mb-1 pb-1 border-bottom border-dark">
                                    AREA ASSIGNED
                                </p>
                                <p className="fw-bold m-0">
                                    {team.areaID.description}
                                </p>
                            </button>
                        </td>
                        <td className="text-center align-middle">
                            <button
                                className="btn btn-white w-100 p-3 shadow shadow-sm overflow-hidden btn-edit"
                                onClick={() => {
                                    console.log("asd");
                                }}
                            >
                                <Pencil style={{ fontSize: "2rem" }} />
                                <p className="mb-1 pb-1 border-bottom border-dark">
                                    ACTIONS
                                </p>
                                <p className="fw-bold m-0">EDIT TEAM</p>
                            </button>
                        </td>
                        <td className="text-center align-middle">
                            <button
                                className="btn btn-white w-100 p-3 shadow shadow-sm overflow-hidden btn-delete-team"
                                onClick={() => {
                                    console.log("asd");
                                }}
                            >
                                <Trash style={{ fontSize: "2rem" }} />
                                <p className="mb-1 pb-1 border-bottom border-dark">
                                    ACTIONS
                                </p>
                                <p className="fw-bold m-0">DELETE TEAM</p>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TeamsRow;
