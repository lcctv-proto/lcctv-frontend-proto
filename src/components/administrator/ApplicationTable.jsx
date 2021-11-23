import { useState } from "react";
import XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

function ApplicationTable({ currentApplications, cols }) {
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
            case "AREA":
                if (currentSort === "areaDown") setCurrentSort("areaUp");
                else if (currentSort === "areaUp") setCurrentSort("default");
                else if (currentSort === "default") setCurrentSort("areaDown");
                break;
            case "PLAN":
                if (currentSort === "planDown") setCurrentSort("planUp");
                else if (currentSort === "planUp") setCurrentSort("default");
                else if (currentSort === "default") setCurrentSort("planDown");
                break;
            default:
                setCurrentSort("default");
        }
    };

    const sortTypes = {
        nameUp: {
            class: "sort-up",
            fn: (a, b) =>
                a.accountName.firstName.localeCompare(b.accountName.firstName),
        },
        nameDown: {
            class: "sort-down",
            fn: (a, b) =>
                b.accountName.firstName.localeCompare(a.accountName.firstName),
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
                b.packageID.description.localeCompare(a.packageID.description),
        },
        planDown: {
            class: "sort-down",
            fn: (a, b) =>
                a.packageID.description.localeCompare(b.packageID.description),
        },
        areaUp: {
            class: "sort-up",
            fn: (a, b) =>
                b.serviceAddress.municipality.localeCompare(
                    a.serviceAddress.municipality
                ),
        },
        areaDown: {
            class: "sort-down",
            fn: (a, b) =>
                a.serviceAddress.municipality.localeCompare(
                    b.serviceAddress.municipality
                ),
        },
        default: {
            class: "sort",
            fn: (a, b) =>
                `${a.prefix}${a.acc_ctr.toString().padStart(3, "0")}` -
                `${b.prefix}${b.acc_ctr.toString().padStart(3, "0")}`,
        },
    };
    return (
        <table
            className="table table-borderless table-striped shadow fs-5"
            id="applicationsTable"
        >
            <thead className="text-light bg-navy border-admin">
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
                            acc_ctr,
                            accountName: { firstName, middleName, lastName },
                            serviceAddress: { municipality, province },
                            packageID: { description },
                            _id,
                        }) => {
                            const suffix = acc_ctr.toString().padStart(3, "0");
                            const refNumber = `${prefix}${suffix}`;
                            const name = `${firstName} ${middleName[0]}. ${lastName}`;
                            const area = `${municipality}, ${province}`;

                            return (
                                <tr key={_id}>
                                    <td>{refNumber}</td>
                                    <td>{name}</td>
                                    <td>{area}</td>
                                    <td>{description}</td>
                                </tr>
                            );
                        }
                    )}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={cols.length - 1} className="p-3">
                        <button
                            className="btn btn-navy me-2"
                            onClick={() => {
                                const newApplications = [];
                                currentApplications.map((value) => {
                                    return newApplications.push({
                                        "REFERENCE NUMBER": `${
                                            value.prefix
                                        }${value.ref_ctr
                                            .toString()
                                            .padStart(3, "0")}`,
                                        "FIRST NAME":
                                            value.accountID.accountName
                                                .firstName,
                                        "MIDDLE NAME":
                                            value.accountID.accountName
                                                .middleName,
                                        "LAST NAME":
                                            value.accountID.accountName
                                                .lastName,
                                        PACKAGE:
                                            value.accountID.packageID
                                                .description,
                                        DATE: value.date,
                                        AREA: value.accountID.serviceAddress
                                            .municipality,
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
                                XLSX.writeFile(
                                    new_workbook,
                                    "Applications.xlsx"
                                );
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
                                            value.accountID.accountName
                                                .firstName,
                                        "MIDDLE NAME":
                                            value.accountID.accountName
                                                .middleName,
                                        "LAST NAME":
                                            value.accountID.accountName
                                                .lastName,
                                        PACKAGE:
                                            value.accountID.packageID
                                                .description,
                                        DATE: value.date,
                                        AREA: value.accountID.serviceAddress
                                            .municipality,
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
                                XLSX.writeFile(
                                    new_workbook,
                                    "Applications.csv"
                                );
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
                    </td>
                </tr>
            </tfoot>
        </table>
    );
}

export default ApplicationTable;
