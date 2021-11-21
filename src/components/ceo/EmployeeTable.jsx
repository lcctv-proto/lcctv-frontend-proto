import { Pencil, Trash } from "react-bootstrap-icons";

function EmployeeTable({ currentEmployees, cols }) {
    return (
        <table className="table table-borderless table-striped shadow fs-5">
            <thead className="text-light bg-navy border-ceo">
                <tr>
                    {cols.map((col, index) => {
                        return <th key={index}>{col}</th>;
                    })}
                </tr>
            </thead>
            <tbody>
                {currentEmployees.map(
                    ({
                        prefix,
                        emp_ctr,
                        personnelName: { firstName, middleName, lastName },
                        contactNumber,
                        roleID: { description },
                        _id,
                    }) => {
                        const suffix = emp_ctr.toString().padStart(3, "0");
                        const empNumber = `${prefix}${suffix}`;
                        const name = `${firstName} ${middleName[0]}. ${lastName}`;

                        return (
                            <tr key={_id}>
                                <td>{empNumber}</td>
                                <td>{name}</td>
                                <td>{description}</td>
                                <td>{contactNumber}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-navy me-2"
                                    >
                                        <Pencil className="me-2" /> EDIT
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-danger btn-delete"
                                    >
                                        <Trash className="me-2" /> DELETE
                                    </button>
                                </td>
                            </tr>
                        );
                    }
                )}
            </tbody>
        </table>
    );
}

export default EmployeeTable;
