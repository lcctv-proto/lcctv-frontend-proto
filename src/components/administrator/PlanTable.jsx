import { Pencil, Trash } from "react-bootstrap-icons";

function PlanTable({ currentPlans, cols }) {
    return (
        <table className="table table-borderless table-striped shadow fs-5">
            <thead className="text-light bg-navy border-admin">
                <tr>
                    {cols.map((col, index) => {
                        return (
                            <th
                                key={index}
                                className={`${
                                    index === cols.length - 1 ? "w-15" : ""
                                }`}
                            >
                                {col}
                            </th>
                        );
                    })}
                </tr>
            </thead>
            <tbody>
                {currentPlans.map(
                    ({ prefix, pkg_ctr, description, price, _id }) => {
                        const suffix = pkg_ctr.toString().padStart(3, "0");
                        const pkgNumber = `${prefix}${suffix}`;

                        return (
                            <tr key={_id}>
                                <td className="align-middle">{pkgNumber}</td>
                                <td className="align-middle">{description}</td>
                                <td className="align-middle">₱ {price}.00</td>
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

export default PlanTable;
