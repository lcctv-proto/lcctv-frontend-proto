import Form from "react-bootstrap/Form";

function AccountTable({ currentAccounts, cols, handleClose, setSearchTerm }) {
    return (
        <table className="table table-borderless table-striped shadow fs-6">
            <thead className="text-light bg-navy border-jo">
                <tr>
                    <th></th>
                    {cols.map((col, index) => {
                        return <th key={index}>{col}</th>;
                    })}
                </tr>
            </thead>
            <tbody>
                {currentAccounts.map(
                    ({
                        prefix,
                        accountName: { firstName, middleName, lastName },
                        accountStatus,
                        acc_ctr,
                        _id,
                    }) => {
                        const accSuffix = acc_ctr.toString().padStart(3, "0");
                        const accNumber = `${prefix}${accSuffix}`;
                        const name = `${firstName} ${middleName[0]}. ${lastName}`;

                        return (
                            <tr key={_id}>
                                <td>
                                    <Form.Check
                                        type="radio"
                                        id={_id}
                                        name="acc"
                                        onChange={() => {
                                            handleClose();
                                            setSearchTerm(accNumber);
                                        }}
                                    />
                                </td>
                                <td>{accNumber}</td>
                                <td>{name}</td>
                                <td>{accountStatus}</td>
                            </tr>
                        );
                    }
                )}
            </tbody>
        </table>
    );
}

export default AccountTable;
