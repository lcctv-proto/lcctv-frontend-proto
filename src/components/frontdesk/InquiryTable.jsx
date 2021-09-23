import { Eye } from "react-bootstrap-icons";

function InquiryTable({ currentInquiries, cols, setInquiry, handleViewShow }) {
    return (
        <table className="table table-borderless table-striped shadow fs-5">
            <thead className="text-light bg-navy border-front">
                <tr>
                    {cols.map((col, index) => {
                        return <th key={index}>{col}</th>;
                    })}
                </tr>
            </thead>
            <tbody>
                {currentInquiries.map(
                    ({
                        prefix,
                        inq_ctr,
                        accountID: {
                            accountName: { firstName, middleName, lastName },
                            packageID: { description },
                        },
                        type,
                        date,
                        _id,
                    }) => {
                        const suffix = inq_ctr.toString().padStart(3, "0");
                        const refNumber = `${prefix}${suffix}`;
                        const name = `${firstName} ${middleName[0]}. ${lastName}`;
                        const localDate = new Date(date);
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
                                <td>{refNumber}</td>
                                <td>{name}</td>
                                <td>{type}</td>
                                <td>{description}</td>
                                <td>{localDateString}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-navy me-2"
                                        onClick={() => {
                                            setInquiry(_id);
                                            handleViewShow();
                                        }}
                                    >
                                        <Eye className="me-2" /> VIEW
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

export default InquiryTable;
