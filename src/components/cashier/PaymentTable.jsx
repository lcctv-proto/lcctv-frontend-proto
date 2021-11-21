function PaymentTable({ currentPayments, cols }) {
    return (
        <table className="table table-borderless table-striped shadow fs-5 text-center">
            <thead className="text-light bg-navy border-cashier">
                <tr>
                    {cols.map((col, index) => {
                        return <th key={index}>{col}</th>;
                    })}
                </tr>
            </thead>
            <tbody>
                {currentPayments.map(
                    ({
                        prefix,
                        pay_ctr,
                        accountID: {
                            prefix: acc_prefix,
                            acc_ctr,
                            accountName: { firstName, middleName, lastName },
                        },
                        amountPaid,
                        checkAmount,
                        modeOfPayment,
                        date,
                        _id,
                    }) => {
                        const suffix = pay_ctr.toString().padStart(3, "0");
                        const payNumber = `${prefix}${suffix}`;
                        const accSuffix = acc_ctr.toString().padStart(3, "0");
                        const accNumber = `${acc_prefix}${accSuffix}`;
                        const name = `${firstName} ${middleName[0]}. ${lastName}`;
                        const localDate = new Date(date);
                        const localDateString = localDate
                            .toLocaleDateString(undefined, {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })
                            .toUpperCase();

                        return (
                            <tr key={_id}>
                                <td className="text-start ps-4">{payNumber}</td>
                                <td>{localDateString}</td>
                                <td>{accNumber}</td>
                                <td>{name}</td>
                                <td className="text-center">{modeOfPayment}</td>
                                <td className="text-end pe-4">
                                    {amountPaid?.toLocaleString(undefined, {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                    }) ??
                                        checkAmount?.toLocaleString(undefined, {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}
                                </td>
                            </tr>
                        );
                    }
                )}
            </tbody>
        </table>
    );
}

export default PaymentTable;
