import { useEffect, useRef, useState } from "react";

import axios from "axios";

import DispatchTable from "./DispatchTable";
import Pagination from "../Pagination";
import Page from "../Page";
import ItemCountSelector from "../ItemCountSelector";
import SearchBar from "../SearchBar";
import SearchError from "../SearchError";
import Spinner from "../Spinner";

function Dispatch() {
    const [dispatches, setDispatches] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [dispatchesPerPage, setDispatchesPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const _isMounted = useRef(true);

    const indexOfLastDispatch = currentPage * dispatchesPerPage;
    const indexOfFirstDispatch = indexOfLastDispatch - dispatchesPerPage;
    const currentDispatches = dispatches
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
        .slice(indexOfFirstDispatch, indexOfLastDispatch);

    const cols = [
        "JO NUMBER",
        "JO TYPE",
        "ACCOUNT NAME",
        "ADDRESS",
        "PACKAGE",
        "DATE ASSIGNED",
        "ACTIONS",
    ];

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        const fetchDispatches = async () => {
            if (_isMounted.current) {
                setIsLoading(true);
                // const res = await axios.get(
                //     "https://lcctv-backend.herokuapp.com/api/dispatches"
                // );
                setDispatches([
                    {
                        prefix: "JO-201201",
                        jo_ctr: 1,
                        _id: "61026eaaad018f4b4000004f",
                        type: "RELOCATION",
                        accountID: {
                            _id: "61026eaaad018f4b4000004d",
                            accountName: {
                                firstName: "GERARD DOMINIC",
                                middleName: "AGUIRRE",
                                lastName: "VIZCOCHO",
                            },
                            serviceAddress: {
                                unit: "5A",
                                street: "J. FAJARDO STREET",
                                barangay: "449",
                                municipality: "SAMPALOC",
                                province: "NCR",
                                zipCode: "1005",
                                homeOwnership: "RENT",
                                residencyYear: 3,
                            },
                            packageID: {
                                description: "PREMIUM 790",
                            },
                        },
                        jobDate: "2021-07-29T17:23:39.912Z",
                    },
                    {
                        prefix: "JO-201201",
                        jo_ctr: 2,
                        _id: "61026eaaad018f4b4000004i",
                        type: "RELOCATION",
                        accountID: {
                            _id: "61026eaaad018f4b4000004d",
                            accountName: {
                                firstName: "GERARD DOMINIC",
                                middleName: "AGUIRRE",
                                lastName: "VIZCOCHO",
                            },
                            serviceAddress: {
                                unit: "5A",
                                street: "J. FAJARDO STREET",
                                barangay: "449",
                                municipality: "SAMPALOC",
                                province: "NCR",
                                zipCode: "1005",
                                homeOwnership: "RENT",
                                residencyYear: 3,
                            },
                            packageID: {
                                description: "PREMIUM 790",
                            },
                        },
                        jobDate: "2021-07-29T17:23:39.912Z",
                    },
                    {
                        prefix: "JO-201201",
                        jo_ctr: 3,
                        _id: "61026eaaad018f4b40000041",
                        type: "RELOCATION",
                        accountID: {
                            _id: "61026eaaad018f4b4000004d",
                            accountName: {
                                firstName: "GERARD DOMINIC",
                                middleName: "AGUIRRE",
                                lastName: "VIZCOCHO",
                            },
                            serviceAddress: {
                                unit: "5A",
                                street: "J. FAJARDO STREET",
                                barangay: "449",
                                municipality: "SAMPALOC",
                                province: "NCR",
                                zipCode: "1005",
                                homeOwnership: "RENT",
                                residencyYear: 3,
                            },
                            packageID: {
                                description: "PREMIUM 790",
                            },
                        },
                        jobDate: "2021-07-29T17:23:39.912Z",
                    },
                ]);
                setIsLoading(false);
            }
        };

        fetchDispatches();

        return () => {
            _isMounted.current = false;
        };
    }, []);

    return (
        <div className="row">
            <div className="col">
                {isLoading ? (
                    <Spinner name="tech" />
                ) : (
                    <>
                        <div className="row">
                            <ItemCountSelector
                                itemsPerPage={dispatchesPerPage}
                                setItemsPerPage={setDispatchesPerPage}
                                name="dispatches"
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
                                {currentDispatches.length === 0 ? (
                                    <SearchError searchTerm={searchTerm} />
                                ) : (
                                    <DispatchTable
                                        currentDispatches={currentDispatches}
                                        cols={cols}
                                    />
                                )}
                            </div>
                        </div>
                        {!searchTerm && (
                            <div className="row mt-3">
                                <div className="col-auto">
                                    <Page
                                        indexOfFirstItem={indexOfFirstDispatch}
                                        indexOfLastItem={indexOfLastDispatch}
                                        totalItems={dispatches.length}
                                    />
                                </div>
                                <div className="col-auto ms-auto">
                                    <Pagination
                                        itemsPerPage={dispatchesPerPage}
                                        totalItems={dispatches.length}
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

export default Dispatch;
