import { Pencil, Trash } from "react-bootstrap-icons";

function ChannelTable({ currentChannels, cols, setChannel, handleEditShow }) {
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
                {currentChannels.map(
                    ({ prefix, cha_ctr, description, assignedNumber, _id }) => {
                        const suffix = cha_ctr.toString().padStart(3, "0");
                        const ChannelNumber = `${prefix}${suffix}`;

                        return (
                            <tr key={_id}>
                                <td className="align-middle">
                                    {ChannelNumber}
                                </td>
                                <td className="align-middle">{description}</td>
                                <td className="align-middle">
                                    {assignedNumber}
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-navy me-2"
                                        onClick={() => {
                                            setChannel(_id);
                                            handleEditShow();
                                        }}
                                    >
                                        <Pencil className="me-2" /> EDIT
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-danger btn-delete"
                                        onClick={() => {
                                            setChannel(_id);
                                            handleEditShow();
                                        }}
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

export default ChannelTable;
