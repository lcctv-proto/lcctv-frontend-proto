function PaymentTable({ currentPayments, cols }) {
    return (
        <table className="table table-borderless table-striped shadow fs-5">
            <thead className="text-light bg-navy border-cashier">
                <tr>
                    {cols.map((col, index) => {
                        return <th key={index}>{col}</th>;
                    })}
                </tr>
            </thead>
            <tbody>
                {currentPayments.map(
                    (
                        {
                            prefix,
                            pay_ctr,
                            accountID: {
                                prefix: acc_prefix,
                                acc_ctr,
                                accountName: {
                                    firstName,
                                    middleName,
                                    lastName,
                                },
                            },
                            amountPaid,
                            checkAmount,
                            modeOfPayment,
                            date,
                            _id,
                        },
                        index
                    ) => {
                        const suffix = pay_ctr.toString().padStart(3, "0");
                        const payNumber = `${prefix}${suffix}`;
                        const accSuffix = acc_ctr.toString().padStart(3, "0");
                        const accNumber = `${acc_prefix}${accSuffix}`;
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
                            <tr key={index}>
                                <td>{payNumber}</td>
                                <td>{accNumber}</td>
                                <td>{name}</td>
                                <td>{amountPaid || checkAmount}</td>
                                <td>{modeOfPayment}</td>
                                <td>{localDateString}</td>
                            </tr>
                        );
                    }
                )}
            </tbody>
        </table>
    );
}

export default PaymentTable;
