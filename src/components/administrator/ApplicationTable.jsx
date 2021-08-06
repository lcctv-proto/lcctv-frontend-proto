function ApplicationTable({ currentApplications, cols }) {
    return (
        <table className="table table-borderless table-striped shadow fs-5">
            <thead className="text-light bg-navy border-admin">
                <tr>
                    {cols.map((col, index) => {
                        return <th key={index}>{col}</th>;
                    })}
                </tr>
            </thead>
            <tbody>
                {currentApplications.map(
                    (
                        {
                            prefix,
                            ref_ctr,
                            accountID: {
                                accountName: {
                                    firstName,
                                    middleName,
                                    lastName,
                                },
                                serviceAddress: { municipality, province },
                                packageID: { description },
                            },
                            date,
                        },
                        index
                    ) => {
                        const suffix = ref_ctr.toString().padStart(3, "0");
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
                        const area = `${municipality}, ${province}`;

                        return (
                            <tr key={index}>
                                <td>{refNumber}</td>
                                <td>{name}</td>
                                <td>{description}</td>
                                <td>{area}</td>
                                <td>{localDateString}</td>
                            </tr>
                        );
                    }
                )}
            </tbody>
        </table>
    );
}

export default ApplicationTable;
