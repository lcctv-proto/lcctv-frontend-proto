import { Pencil, Trash } from "react-bootstrap-icons";
import { useState } from "react";
import XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

function EmployeeTable({ currentEmployees, cols }) {

    const [currentSort, setCurrentSort] = useState("default");

    const onSortChange = (col) => {
        switch (col) {
            case "PERSONNEL NAME":
                if (currentSort === "nameDown") setCurrentSort("nameUp");
                else if (currentSort === "nameUp") setCurrentSort("default");
                else if (currentSort === "default") setCurrentSort("nameDown");
                break;
            case "ROLE":
                if (currentSort === "roleDown") setCurrentSort("roleUp");
                else if (currentSort === "roleUp") setCurrentSort("default");
                else if (currentSort === "default") setCurrentSort("roleDown");
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
                a.personnelName.firstName.localeCompare(
                    b.personnelName.firstName
                ),
        },
        nameDown: {
            class: "sort-down",
            fn: (a, b) =>
                b.personnelName.firstName.localeCompare(
                    a.personnelName.firstName
                ),
        },
        roleUp: {
            class: "sort-up",
            fn: (a, b) =>
                b.roleID.description.localeCompare(
                    a.roleID.description
                ),
        },
        roleDown: {
            class: "sort-down",
            fn: (a, b) =>
                a.roleID.description.localeCompare(
                    b.roleID.description
                ),
        },
        default: {
            class: "sort",
            fn: (a, b) =>
                `${a.prefix}${a.emp_ctr
                    .toString()
                    .padStart(3, "0")}` -
                `${b.prefix}${b.emp_ctr
                    .toString()
                    .padStart(3, "0")}`,
        },
    };

    return (
        <table 
            className="table table-borderless table-striped shadow fs-5"
            id="employeesTable"
        
        >
            <thead className="text-light bg-navy border-ceo">
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
                {[...currentEmployees].sort((a,b) => sortTypes[currentSort].fn(a, b)).map(
                    ({
                        prefix,
                        emp_ctr,
                        personnelName: { firstName, middleName, lastName },
                        contactNumber,
                        roleID: { description },
                        _id,
                    }) => {
                        const suffix = emp_ctr.toString().padStart(3, "0");
                        const empNumber = `${prefix}${suffix}`;
                        const name = `${firstName} ${middleName[0]}. ${lastName}`;

                        return (
                            <tr key={_id}>
                                <td>{empNumber}</td>
                                <td>{name}</td>
                                <td>{description}</td>
                                <td>{contactNumber}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-navy me-2"
                                    >
                                        <Pencil className="me-2" /> EDIT
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-danger btn-delete"
                                    >
                                        <Trash className="me-2" /> DELETE
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
                            currentEmployees.map((value) => {
                                return newApplications.push({
                                    "EMPLOYEE NUMBER": `${
                                        value.prefix
                                    }${value.emp_ctr
                                        .toString()
                                        .padStart(3, "0")}`, 
                                    "FIRST NAME":
                                        value.personnelName.firstName,
                                    "MIDDLE NAME":
                                        value.personnelName.middleName,
                                    "LAST NAME":
                                        value.personnelName.lastName,
                                    "ROLE":
                                        value.roleID.description,
                                });
                            });
                            let worksheet =
                                XLSX.utils.json_to_sheet(newApplications);
                            var new_workbook = XLSX.utils.book_new();
                            XLSX.utils.book_append_sheet(
                                new_workbook,
                                worksheet,
                                "Employees"
                            );
                            XLSX.writeFile(new_workbook, "Employees.xlsx");
                        }}
                    >
                        XLSX
                    </button>
                    <button
                        className="btn btn-navy me-2"
                        onClick={() => {
                            const newApplications = [];
                            currentEmployees.map((value) => {
                                return newApplications.push({
                                    "EMPLOYEE NUMBER": `${
                                        value.prefix
                                    }${value.emp_ctr
                                        .toString()
                                        .padStart(3, "0")}`, 
                                    "FIRST NAME":
                                        value.personnelName.firstName,
                                    "MIDDLE NAME":
                                        value.personnelName.middleName,
                                    "LAST NAME":
                                        value.personnelName.lastName,
                                    "ROLE":
                                        value.roleID.description,
                                });
                            });
                            let worksheet =
                                XLSX.utils.json_to_sheet(newApplications);
                            const new_workbook = XLSX.utils.book_new();
                            XLSX.utils.book_append_sheet(
                                new_workbook,
                                worksheet,
                                "Employees"
                            );
                            XLSX.writeFile(new_workbook, "Employees.csv");
                        }}
                    >
                        CSV
                    </button>
                    <button
                        className="btn btn-navy"
                        onClick={() => {
                            const doc = new jsPDF();
                            doc.autoTable({ html: "#employeesTable" });
                            doc.save("Employees.pdf");
                        }}
                    >
                        PDF
                    </button>
                </th>
            </tfoot>
        </table>
    );
}

export default EmployeeTable;
