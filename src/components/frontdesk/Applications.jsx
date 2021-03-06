import { useEffect, useRef, useState } from "react";

import api from "../../api/api";

import ApplicationTable from "./ApplicationTable";
import Pagination from "../Pagination";
import Page from "../Page";
import ItemCountSelector from "../ItemCountSelector";
import SearchBar from "../SearchBar";
import SearchError from "../SearchError";
import Spinner from "../Spinner";
import RefreshButton from "../RefreshButton";

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

    const fetchApplications = async () => {
        if (_isMounted.current) {
            setIsLoading(true);
            const res = await api.applications.get("");
            setApplications(
                res.data.filter((application) => {
                    if (application.step !== 3) {
                        return null;
                    }
                    return application;
                })
            );
            setIsLoading(false);
        }
    };

    useEffect(() => {
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
                                <RefreshButton
                                    name="APPLICATIONS"
                                    click={fetchApplications}
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
                applications={applications}
                setApplications={setApplications}
            />
        </>
    );
}

export default Applications;
