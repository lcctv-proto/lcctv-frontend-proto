import { useEffect, useRef, useState } from "react";

import axios from "axios";

import authHeader from "../../auth/auth-header";

import EmployeeTable from "./EmployeeTable";
import Pagination from "../Pagination";
import Page from "../Page";
import ItemCountSelector from "../ItemCountSelector";
import SearchBar from "../SearchBar";
import SearchError from "../SearchError";
import Spinner from "../Spinner";
import AddButton from "../AddButton";

import AddEmployeeModal from "./AddEmployeeModal";

function Employees() {
    const [employees, setEmployees] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [employeesPerPage, setEmployeesPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const _isMounted = useRef(true);

    const [addShow, setAddShow] = useState(false);

    const handleAddShow = () => setAddShow(true);
    const handleAddClose = () => setAddShow(false);

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
        "ACTIONS",
    ];

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        const fetchEmployees = async () => {
            if (_isMounted.current) {
                setIsLoading(true);
                const res = await axios.get(
                    "https://lcctv-backend.herokuapp.com/api/personnel",
                    { headers: authHeader() }
                );
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
        <>
            <div className="row">
                <div className="col">
                    {isLoading ? (
                        <Spinner name="admin" />
                    ) : (
                        <>
                            <div className="row">
                                <ItemCountSelector
                                    itemsPerPage={employeesPerPage}
                                    setItemsPerPage={setEmployeesPerPage}
                                    name="employees"
                                    setCurrentPage={setCurrentPage}
                                />
                                <AddButton
                                    name="EMPLOYEE"
                                    click={handleAddShow}
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
                                            indexOfFirstItem={
                                                indexOfFirstEmployee
                                            }
                                            indexOfLastItem={
                                                indexOfLastEmployee
                                            }
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
            <AddEmployeeModal show={addShow} handleClose={handleAddClose} />
        </>
    );
}

export default Employees;
