import { useEffect, useRef, useState } from "react";

import api from "../../api/api";

import ViewTable from "./ViewTable";
import Pagination from "../Pagination";
import Page from "../Page";
import ItemCountSelector from "../ItemCountSelector";
import SearchBar from "../SearchBar";
import SearchError from "../SearchError";
import Spinner from "../Spinner";

function View() {
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
        "DATE ASSIGNED",
        "ACTIONS",
    ];

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        const fetchDispatches = async () => {
            if (_isMounted.current) {
                setIsLoading(true);
                const res = await api.jo.get("");
                setDispatches([...res.data]);
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
                    <Spinner name="jo" />
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
                                    <ViewTable
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

export default View;
