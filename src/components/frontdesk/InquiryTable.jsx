import { ArrowsAngleExpand } from "react-bootstrap-icons";
import { useState } from "react";
import XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

function InquiryTable({ currentInquiries, cols, setInquiry, handleViewShow }) {

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
            case "PLAN":
                if (currentSort === "planDown") setCurrentSort("planUp");
                else if (currentSort === "planUp") setCurrentSort("default");
                else if (currentSort === "default") setCurrentSort("planDown");
                break;
            default:
                setCurrentSort("default");
        }

        // if (currentSort === "down") setCurrentSort("up");
        // else if (currentSort === "up") setCurrentSort("default");
        // else if (currentSort === "default") setCurrentSort("down");
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
        planUp: {
            class: "sort-up",
            fn: (a, b) =>
                b.accountID.packageID.description.localeCompare(
                    a.accountID.packageID.description
                ),
        },
        planDown: {
            class: "sort-down",
            fn: (a, b) =>
                a.accountID.packageID.description.localeCompare(
                    b.accountID.packageID.description
                ),
        },
        default: {
            class: "sort",
            fn: (a, b) =>
                `${a.accountID.prefix}${a.accountID.acc_ctr
                    .toString()
                    .padStart(3, "0")}` -
                `${b.accountID.prefix}${b.accountID.acc_ctr
                    .toString()
                    .padStart(3, "0")}`,
        },
    };

    return (
        <table 
            className="table table-borderless table-striped shadow fs-5"
            id="inquiriesTable"
        >
            <thead className="text-light bg-navy border-front">
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
                {[...currentInquiries].sort((a,b) => sortTypes[currentSort].fn(a, b)).map(
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
                                <td>{localDateString}</td>
                                <td>{name}</td>
                                <td>{type}</td>
                                <td>{description}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-navy"
                                        onClick={() => {
                                            setInquiry(_id);
                                            handleViewShow();
                                        }}
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
            <tfoot>
                <th colspan={cols.length - 1} className="p-3">
                    <button
                        className="btn btn-navy me-2"
                        onClick={() => {
                            const newApplications = [];
                            currentInquiries.map((value) => {
                                return newApplications.push({
                                    "INQUIRY NUMBER": `${
                                        value.prefix
                                    }${value.inq_ctr
                                        .toString()
                                        .padStart(3, "0")}`, 
                                    "FIRST NAME":
                                        value.accountID.accountName.firstName,
                                    "MIDDLE NAME":
                                        value.accountID.accountName.middleName,
                                    "LAST NAME":
                                        value.accountID.accountName.lastName,
                                    "PACKAGE":
                                        value.accountID.packageID.description,
                                    "DATE": value.date,
                                    "CONCERN TYPE": 
                                        value.type,
                                });
                            });
                            let worksheet =
                                XLSX.utils.json_to_sheet(newApplications);
                            var new_workbook = XLSX.utils.book_new();
                            XLSX.utils.book_append_sheet(
                                new_workbook,
                                worksheet,
                                "Inquiries"
                            );
                            XLSX.writeFile(new_workbook, "Inquiries.xlsx");
                        }}
                    >
                        XLSX
                    </button>
                    <button
                        className="btn btn-navy me-2"
                        onClick={() => {
                            const newApplications = [];
                            currentInquiries.map((value) => {
                                return newApplications.push({
                                    "INQUIRY NUMBER": `${
                                        value.prefix
                                    }${value.inq_ctr
                                        .toString()
                                        .padStart(3, "0")}`,
                                    "FIRST NAME":
                                        value.accountID.accountName.firstName,
                                    "MIDDLE NAME":
                                        value.accountID.accountName.middleName,
                                    "LAST NAME":
                                        value.accountID.accountName.lastName,
                                    "PACKAGE":
                                        value.accountID.packageID.description,
                                    "DATE": value.date,
                                    "CONCERN TYPE":
                                        value.type,
                                });
                            });
                            let worksheet =
                                XLSX.utils.json_to_sheet(newApplications);
                            const new_workbook = XLSX.utils.book_new();
                            XLSX.utils.book_append_sheet(
                                new_workbook,
                                worksheet,
                                "Inquiries"
                            );
                            XLSX.writeFile(new_workbook, "Inquiries.csv");
                        }}
                    >
                        CSV
                    </button>
                    <button
                        className="btn btn-navy"
                        onClick={() => {
                            const doc = new jsPDF();
                            doc.autoTable({ html: "#inquiriesTable" });
                            doc.save("Inquiries.pdf");
                        }}
                    >
                        PDF
                    </button>
                </th>
            </tfoot>
        </table>
    );
}

export default InquiryTable;
