import { useEffect, useRef, useState } from "react";

import axios from "axios";

import ApplicationTable from "./ApplicationTable";
import Pagination from "../Pagination";
import Page from "../Page";
import ItemCountSelector from "../ItemCountSelector";
import SearchBar from "../SearchBar";
import SearchError from "../SearchError";
import Spinner from "../Spinner";

import authHeader from "../../auth/auth-header";

function Applications() {
    const [applications, setApplications] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [applicationsPerPage, setApplicationsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const _isMounted = useRef(true);

    const indexOfLastApplication = currentPage * applicationsPerPage;
    const indexOfFirstApplication =
        indexOfLastApplication - applicationsPerPage;
    const currentApplications = applications
        .filter((application) => {
            const {
                prefix,
                date,
                accountID : {
                    accountName: { firstName, middleName, lastName },
                    packageID : { description },
                    serviceAddress: { municipality, province },
                },
                ref_ctr,
                _id,
            } = application;

            const name = `${firstName} ${middleName} ${lastName}`;

            const plan = `${description}`;

            const address = `${municipality} ${province}`;

            const refNumber = `${prefix} ${ref_ctr.toString().padStart(3, "0")}`;

            const localDate = new Date(date)
                .toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })
                .toUpperCase();


            if (!application.status === "ACTIVE") return null;

            if (searchTerm === "") return application;
            else if (
                name.includes(searchTerm.toUpperCase()) ||
                plan.includes(searchTerm.toUpperCase()) ||
                address.includes(searchTerm.toUpperCase()) ||
                refNumber.includes(searchTerm.toUpperCase()) ||
                localDate.includes(searchTerm.toUpperCase()) ||
                _id.includes(searchTerm.toUpperCase())
                )
                return application;
            return null;
        })
        .slice(indexOfFirstApplication, indexOfLastApplication);

    const cols = ["REFERENCE NUMBER", "DATE", "ACCOUNT NAME", "AREA", "PLAN"];

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        const fetchApplications = async () => {
            if (_isMounted.current) {
                setIsLoading(true);
                const res = await axios.get(
                    "https://lcctv-backend.herokuapp.com/api/applications",
                    { headers: authHeader() }
                );
                setApplications(
                    res.data.filter((application) => {
                        if (application.step === 8) return application;
                        return null;
                    })
                );
                setIsLoading(false);
            }
        };

        fetchApplications();

        return () => {
            _isMounted.current = false;
        };
    }, []);

    return (
        <div className="row">
            <div className="col">
                {isLoading ? (
                    <Spinner name="admin" />
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
                                        indexOfLastItem={indexOfLastApplication}
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
    );
}

export default Applications;
