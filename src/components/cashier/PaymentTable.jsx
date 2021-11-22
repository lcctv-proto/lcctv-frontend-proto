import { useState } from "react";
import XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

function PaymentTable({ currentPayments, cols }) {

    const [currentSort, setCurrentSort] = useState("default");

    const onSortChange = (col) => {
        switch (col) {
            case "ACCOUNT NAME":
                if (currentSort === "nameDown") setCurrentSort("nameUp");
                else if (currentSort === "nameUp") setCurrentSort("default");
                else if (currentSort === "default") setCurrentSort("nameDown");
                break;
            case "DATE":
                if (currentSort === "dateDown") setCurrentSort("dateUp");
                else if (currentSort === "dateUp") setCurrentSort("default");
                else if (currentSort === "default") setCurrentSort("dateDown");
                break;
            case "ACCOUNT NUMBER":if (currentSort === "accDown") setCurrentSort("accUp");
                else if (currentSort === "accUp") setCurrentSort("default");
                else if (currentSort === "default") setCurrentSort("accDown");
                break;
                
            case "MODE OF PAYMENT":
                if (currentSort === "mopDown") setCurrentSort("mopUp");
                else if (currentSort === "mopUp") setCurrentSort("default");
                else if (currentSort === "default") setCurrentSort("mopDown");
                break;
            default:
                setCurrentSort("default");
        }

    };

    const sortTypes = {
        nameUp: {
            class: "sort-up",
            fn: (a, b) =>
                a.accountID.accountName.firstName.localeCompare(
                    b.accountID.accountName.firstName
                ),
        },
        nameDown: {
            class: "sort-down",
            fn: (a, b) =>
                b.accountID.accountName.firstName.localeCompare(
                    a.accountID.accountName.firstName
                ),
        
        },
        dateUp: {
            class: "sort-up",
            fn: (a, b) => new Date(b.date) - new Date(a.date),
        },
        dateDown: {
            class: "sort-down",
            fn: (a, b) => new Date(a.date) - new Date(b.date),
        },
        accUp: {
            class: "sort-up",
            fn: (a, b) =>
            `${a.accountID.prefix}${a.accountID.acc_ctr
                .toString()
                .padStart(3, "0")}` -
            `${b.accountID.prefix}${b.accountID.acc_ctr
                .toString()
                .padStart(3, "0")}`,
        },
        accDown: {
            class: "sort-down",
            fn: (a, b) =>
            `${a.accountID.prefix}${a.accountID.acc_ctr
                .toString()
                .padStart(3, "0")}` -
            `${b.accountID.prefix}${b.accountID.acc_ctr
                .toString()
                .padStart(3, "0")}`,
        },
        mopUP: {
            class: "sort-up",
            fn: (a, b) =>
                b.modeOfPayment.localeCompare(
                    a.modeOfPayment
                ),
        },
        mopDown: {
            class: "sort-down",
            fn: (a, b) =>
            a.modeOfPayment.localeCompare(
                b.modeOfPayment
            ),
        },
        default: {
            class: "sort",
            fn: (a, b) =>
                `${a.prefix}${a.pay_ctr
                    .toString()
                    .padStart(3, "0")}` -
                `${b.prefix}${b.pay_ctr
                    .toString()
                    .padStart(3, "0")}`,
        },
    };
    return (
        <table 
            className="table table-borderless table-striped shadow fs-5 text-center"
            id="paymentTable"
        
        >
            <thead className="text-light bg-navy border-cashier">
                <tr>
                    {cols.map((col, index) => {
                        return (
                            <th 
                                key={index}
                                onClick = {() => {
                                    onSortChange(col);
                                }}
                                >{col}</th>
                        );
                    })}
                </tr>
            </thead>
            <tbody>
                {[...currentPayments].sort((a,b) => sortTypes[currentSort].fn(a, b)).map(
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
            <tfoot>
                <th colspan={cols.length - 1} className="p-3">
                    <button
                        className="btn btn-navy me-2"
                        onClick={() => {
                            const newApplications = [];
                            currentPayments.map((value) => {
                                return newApplications.push({
                                    "PAYMENT NUMBER": `${
                                        value.prefix
                                    }${value.pay_ctr
                                        .toString()
                                        .padStart(3, "0")}`, 
                                    "FIRST NAME":
                                        value.accountID.accountName.firstName,
                                    "MIDDLE NAME":
                                        value.accountID.accountName.middleName,
                                    "LAST NAME":
                                        value.accountID.accountName.lastName,
                                    "DATE": value.date,
                                    "MODE OF PAYMENT":
                                        value.modeOfPayment,
                                    "AMOUNT PAID":
                                        value.amountPaid,
                                });
                            });
                            let worksheet =
                                XLSX.utils.json_to_sheet(newApplications);
                            var new_workbook = XLSX.utils.book_new();
                            XLSX.utils.book_append_sheet(
                                new_workbook,
                                worksheet,
                                "Payments"
                            );
                            XLSX.writeFile(new_workbook, "Payments.xlsx");
                        }}
                    >
                        XLSX
                    </button>
                    <button
                        className="btn btn-navy me-2"
                        onClick={() => {
                            const newApplications = [];
                            currentPayments.map((value) => {
                                return newApplications.push({
                                    "PAYMENT NUMBER": `${
                                        value.prefix
                                    }${value.pay_ctr
                                        .toString()
                                        .padStart(3, "0")}`, 
                                    "FIRST NAME":
                                        value.accountID.accountName.firstName,
                                    "MIDDLE NAME":
                                        value.accountID.accountName.middleName,
                                    "LAST NAME":
                                        value.accountID.accountName.lastName,
                                    "DATE": value.date,
                                    "MODE OF PAYMENT":
                                        value.modeOfPayment,
                                    "AMOUNT PAID":
                                        value.amountPaid,
                                });
                            });
                            let worksheet =
                                XLSX.utils.json_to_sheet(newApplications);
                            const new_workbook = XLSX.utils.book_new();
                            XLSX.utils.book_append_sheet(
                                new_workbook,
                                worksheet,
                                "Payments"
                            );
                            XLSX.writeFile(new_workbook, "Payments.csv");
                        }}
                    >
                        CSV
                    </button>
                    <button
                        className="btn btn-navy"
                        onClick={() => {
                            const doc = new jsPDF();
                            doc.autoTable({ html: "#paymentTable" });
                            doc.save("Payments.pdf");
                        }}
                    >
                        PDF
                    </button>
                </th>
            </tfoot>
        </table>
    );
}

export default PaymentTable;
