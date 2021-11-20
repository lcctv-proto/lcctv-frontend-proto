import { ArrowsAngleExpand } from "react-bootstrap-icons";

function DispatchTable({ currentDispatches, cols }) {
    return (
        <table className="table table-borderless table-striped shadow fs-5">
            <thead className="text-light bg-navy border-tech">
                <tr>
                    {cols.map((col, index) => {
                        return <th key={index}>{col}</th>;
                    })}
                </tr>
            </thead>
            <tbody>
                {currentDispatches?.map(
                    ({
                        prefix,
                        jo_ctr,
                        type,
                        accountID: {
                            accountName: { firstName, middleName, lastName },
                            packageID: { description },
                        },
                        jobDate,
                        _id,
                    }) => {
                        const suffix = jo_ctr.toString().padStart(3, "0");
                        const joNumber = `${prefix}${suffix}`;
                        const name = `${firstName} ${middleName[0]}. ${lastName}`;
                        const localDate = new Date(jobDate);
                        const localDateString = localDate
                            .toLocaleDateString(undefined, {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })
                            .toUpperCase();

                        return (
                            <tr key={_id}>
                                <td>{joNumber}</td>
                                <td>{type}</td>
                                <td>{name}</td>
                                <td>{description}</td>
                                <td>{localDateString}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-navy"
                                    >
                                        <ArrowsAngleExpand className="me-2" />
                                        VIEW
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

export default DispatchTable;
