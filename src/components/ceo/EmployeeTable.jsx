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
                        dateEmployed,
                        roleID: { description },
                        _id,
                    }) => {
                        const suffix = emp_ctr.toString().padStart(3, "0");
                        const empNumber = `${prefix}${suffix}`;
                        const name = `${firstName} ${middleName[0]}. ${lastName}`;
                        const localDate = new Date(dateEmployed);
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
                                <td>{empNumber}</td>
                                <td>{name}</td>
                                <td>{description}</td>
                                <td>{contactNumber}</td>
                                <td>{localDateString}</td>
                            </tr>
                        );
                    }
                )}
            </tbody>
        </table>
    );
}

export default EmployeeTable;
