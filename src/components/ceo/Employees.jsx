import { useEffect, useRef, useState } from "react";

import api from "../../api/api";

import EmployeeTable from "./EmployeeTable";
import Pagination from "../Pagination";
import Page from "../Page";
import ItemCountSelector from "../ItemCountSelector";
import SearchBar from "../SearchBar";
import SearchError from "../SearchError";
import Spinner from "../Spinner";

function Employees() {
    const [employees, setEmployees] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [employeesPerPage, setEmployeesPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const _isMounted = useRef(true);

    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployees = employees
        .filter((employee) => {
            const {
                personnelName: { firstName, middleName, lastName },
            } = employee;
            const name = `${firstName} ${middleName} ${lastName}`;
            if (searchTerm === "") return employee;
            else if (name.includes(searchTerm.toUpperCase())) return employee;
            return null;
        })
        .slice(indexOfFirstEmployee, indexOfLastEmployee);

    const cols = [
        "EMPLOYEE NUMBER",
        "EMPLOYEE NAME",
        "ROLE",
        "CONTACT NUMBER",
        "DATE REGISTERED",
    ];

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        const fetchEmployees = async () => {
            if (_isMounted.current) {
                setIsLoading(true);
                const res = await api.personnel.get("");
                setEmployees([...res.data]);
                setIsLoading(false);
            }
        };

        fetchEmployees();

        return () => {
            _isMounted.current = false;
        };
    }, []);

    return (
        <div className="row">
            <div className="col">
                {isLoading ? (
                    <Spinner name="ceo" />
                ) : (
                    <>
                        <div className="row">
                            <ItemCountSelector
                                itemsPerPage={employeesPerPage}
                                setItemsPerPage={setEmployeesPerPage}
                                name="employees"
                                setCurrentPage={setCurrentPage}
                            />
                            <SearchBar
                                searchTerm={searchTerm}
                                setSearchTerm={setSearchTerm}
                                placeholder="Search name ..."
                            />
                        </div>

                        <div className="row mt-3">
                            <div className="col">
                                {currentEmployees.length === 0 ? (
                                    <SearchError searchTerm={searchTerm} />
                                ) : (
                                    <EmployeeTable
                                        currentEmployees={currentEmployees}
                                        cols={cols}
                                    />
                                )}
                            </div>
                        </div>

                        {!searchTerm && (
                            <div className="row mt-3">
                                <div className="col-auto">
                                    <Page
                                        indexOfFirstItem={indexOfFirstEmployee}
                                        indexOfLastItem={indexOfLastEmployee}
                                        totalItems={employees.length}
                                    />
                                </div>
                                <div className="col-auto ms-auto">
                                    <Pagination
                                        itemsPerPage={employeesPerPage}
                                        totalItems={employees.length}
                                        paginate={paginate}
                                        currentPage={currentPage}
                                    />
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default Employees;
