import { useEffect, useState } from "react";
import { Search } from "react-bootstrap-icons";

import axios from "axios";

import ApplicationTable from "./ApplicationTable.jsx";
import Pagination from "../Pagination.jsx";
import Page from "../Page.jsx";

function Applications() {
    const [applications, setApplications] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [applicationsPerPage, setApplicationsPerPage] = useState(10);

    const cols = ["REFERENCE NUMBER", "ACCOUNT NAME", "PLAN", "DATE"];

    const indexOfLastApplication = currentPage * applicationsPerPage;
    const indexOfFirstApplication =
        indexOfLastApplication - applicationsPerPage;
    const currentApplications = applications.slice(
        indexOfFirstApplication,
        indexOfLastApplication
    );
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        const fetchApplications = async () => {
            const res = await axios.get(
                "https://lcctv-backend.herokuapp.com/api/applications"
            );
            setApplications([
                ...res.data,
                ...res.data,
                ...res.data,
                ...res.data,
                ...res.data,
                ...res.data,
            ]);
        };
        fetchApplications();
    }, []);
    console.log(applications);

    return (
        <div className="row">
            <div className="col">
                <div className="row">
                    <div className="col-2 align-items-center d-flex">
                        <span className="me-2">Show</span>
                        <select
                            name="entries"
                            id="entries"
                            className="form-select"
                            value={applicationsPerPage}
                            onChange={(e) => {
                                setApplicationsPerPage(e.target.value);
                            }}
                        >
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                        </select>
                        <span className="ms-2">entries</span>
                    </div>
                    <div className="col-3 ms-auto">
                        <input
                            type="text"
                            name=""
                            id=""
                            className="form-control"
                        />
                    </div>
                    <div className="col-auto">
                        <button className="align-middle btn btn-outline-success d-flex align-items-center">
                            <Search className="me-2" />
                            Search
                        </button>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <ApplicationTable
                            currentApplications={currentApplications}
                            cols={cols}
                        />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-auto pt-3">
                        <Page
                            indexOfFirstItem={indexOfFirstApplication}
                            indexOfLastItem={indexOfLastApplication}
                            totalItems={applications.length}
                        />
                    </div>
                    <div className="col-auto ms-auto">
                        <Pagination
                            itemsPerPage={applicationsPerPage}
                            totalItems={applications.length}
                            paginate={paginate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Applications;
