import { useEffect, useRef, useState } from "react";

import axios from "axios";

import ApplicationTable from "./ApplicationTable";
import Pagination from "../Pagination";
import Page from "../Page";
import ItemCountSelector from "../ItemCountSelector";
import SearchBar from "../SearchBar";
import SearchError from "../SearchError";
import Spinner from "../Spinner";

import EditApplicationModal from "./EditApplicationModal";

function Applications() {
    const [application, setApplication] = useState("");
    const [applications, setApplications] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [applicationsPerPage, setApplicationsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const _isMounted = useRef(true);

    const [editShow, setEditShow] = useState(false);

    const handleEditShow = () => setEditShow(true);
    const handleEditClose = () => setEditShow(false);

    const indexOfLastApplication = currentPage * applicationsPerPage;
    const indexOfFirstApplication =
        indexOfLastApplication - applicationsPerPage;
    const currentApplications = applications
        .filter((application) => {
            const {
                accountName: { firstName, middleName, lastName },
            } = application.accountID;
            const name = `${firstName} ${middleName} ${lastName}`;
            if (searchTerm === "") return application;
            else if (name.includes(searchTerm.toUpperCase()))
                return application;
            return null;
        })
        .slice(indexOfFirstApplication, indexOfLastApplication);

    const cols = [
        "REFERENCE NUMBER",
        "ACCOUNT NAME",
        "PLAN",
        "APPLICATION DATE",
        "ACTIONS",
    ];

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        const fetchApplications = async () => {
            if (_isMounted.current) {
                setIsLoading(true);
                const res = await axios.get(
                    "https://lcctv-backend.herokuapp.com/api/applications"
                );
                setApplications([...res.data]);
                setIsLoading(false);
            }
        };

        fetchApplications();

        return () => {
            _isMounted.current = false;
        };
    }, []);

    return (
        <>
            <div className="row">
                <div className="col">
                    {isLoading ? (
                        <Spinner name="front" />
                    ) : (
                        <>
                            <div className="row">
                                <ItemCountSelector
                                    itemsPerPage={applicationsPerPage}
                                    setItemsPerPage={setApplicationsPerPage}
                                    name="applications"
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
                                    {currentApplications.length === 0 ? (
                                        <SearchError searchTerm={searchTerm} />
                                    ) : (
                                        <ApplicationTable
                                            currentApplications={
                                                currentApplications
                                            }
                                            cols={cols}
                                            setApplication={setApplication}
                                            handleEditShow={handleEditShow}
                                        />
                                    )}
                                </div>
                            </div>
                            {!searchTerm && (
                                <div className="row mt-3">
                                    <div className="col-auto">
                                        <Page
                                            indexOfFirstItem={
                                                indexOfFirstApplication
                                            }
                                            indexOfLastItem={
                                                indexOfLastApplication
                                            }
                                            totalItems={applications.length}
                                        />
                                    </div>
                                    <div className="col-auto ms-auto">
                                        <Pagination
                                            itemsPerPage={applicationsPerPage}
                                            totalItems={applications.length}
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
            <EditApplicationModal
                show={editShow}
                handleClose={handleEditClose}
                application={application}
            />
        </>
    );
}

export default Applications;
