import { ArrowsAngleExpand } from "react-bootstrap-icons";
import { useState } from "react";
import XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

function ApplicationTable({
    currentApplications,
    cols,
    setApplication,
    handleEditShow,
}) {
    const [currentSort, setCurrentSort] = useState("default");

    const onSortChange = (col) => {
        switch (col) {
            case "ACCOUNT NAME":
                if (currentSort === "nameDown") setCurrentSort("nameUp");
                else if (currentSort === "nameUp") setCurrentSort("default");
                else if (currentSort === "default") setCurrentSort("nameDown");
                break;
            case "APPLICATION DATE":
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
            id="applicationsTable"
        >
            <thead className="text-light bg-navy border-front">
                <tr>
                    {cols.map((col, index) => {
                        return (
                            <th
                                key={index}
                                onClick={() => {
                                    onSortChange(col);
                                }}
                            >
                                {col}
                            </th>
                        );
                    })}
                </tr>
            </thead>
            <tbody>
                {[...currentApplications]
                    .sort((a, b) => sortTypes[currentSort].fn(a, b))
                    .map(
                        ({
                            prefix,
                            ref_ctr,
                            accountID: {
                                accountName: {
                                    firstName,
                                    middleName,
                                    lastName,
                                },
                                packageID: { description },
                            },
                            date,
                            _id,
                        }) => {
                            const suffix = ref_ctr.toString().padStart(3, "0");
                            const refNumber = `${prefix}${suffix}`;
                            const name = `${firstName} ${
                                !middleName[0] ? "" : `${middleName[0]}.`
                            } ${lastName}`;
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
                                    <td>{description}</td>
                                    <td>{localDateString}</td>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-navy"
                                            onClick={() => {
                                                setApplication(_id);
                                                handleEditShow();
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
                <td>
                    <tr>
                        <th colspan={cols.length - 1} className="p-3">
                            <button
                                className="btn btn-navy me-2"
                                onClick={() => {
                                    const newApplications = [];
                                    currentApplications.map((value) => {
                                        return newApplications.push({
                                            "APPLICATION NUMBER": `${
                                                value.prefix
                                            }${value.ref_ctr
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
                                            "ACCOUNT ID": value._id,
                                            "LINK TO PROOF OF VALIDATION": 
                                                value.accountID.billingImageURL,
                                            "BIRTHDAY":
                                                value.accountID.additionalInfo.birthdate,
                                        });
                                    });
                                    let worksheet =
                                        XLSX.utils.json_to_sheet(newApplications);
                                    var new_workbook = XLSX.utils.book_new();
                                    XLSX.utils.book_append_sheet(
                                        new_workbook,
                                        worksheet,
                                        "Applications"
                                    );
                                    XLSX.writeFile(new_workbook, "Applications.xlsx");
                                }}
                            >
                                XLSX
                            </button>
                            <button
                                className="btn btn-navy me-2"
                                onClick={() => {
                                    const newApplications = [];
                                    currentApplications.map((value) => {
                                        return newApplications.push({
                                            "APPLICATION NUMBER": `${
                                                value.prefix
                                            }${value.ref_ctr
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
                                            "ACCOUNT ID": value._id,
                                            "LINK TO PROOF OF BILLING": value.accountID.billingImageURL,
                                            "BIRTDAY":
                                                value.accountID.additionalInfo.birthdate,
                                        });
                                    });
                                    let worksheet =
                                        XLSX.utils.json_to_sheet(newApplications);
                                    const new_workbook = XLSX.utils.book_new();
                                    XLSX.utils.book_append_sheet(
                                        new_workbook,
                                        worksheet,
                                        "Applications"
                                    );
                                    XLSX.writeFile(new_workbook, "Applications.csv");
                                }}
                            >
                                CSV
                            </button>
                            <button
                                className="btn btn-navy"
                                onClick={() => {
                                    const doc = new jsPDF();
                                    doc.autoTable({ html: "#applicationsTable" });
                                    doc.save("Applications.pdf");
                                }}
                            >
                                PDF
                            </button>
                        </th>
                    </tr>
                </td>
            </tfoot>
        </table>
    );
}

export default ApplicationTable;
