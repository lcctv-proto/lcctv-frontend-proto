import { useEffect, useRef, useState } from "react";

import axios from "axios";

import EquipmentTable from "./EquipmentTable";
import Pagination from "../Pagination";
import Page from "../Page";
import ItemCountSelector from "../ItemCountSelector";
import SearchBar from "../SearchBar";
import SearchError from "../SearchError";
import Spinner from "../Spinner";
import AddButton from "../AddButton";

import authHeader from "../../auth/auth-header";

function Plans() {
    const [equipments, setEquipments] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [equipmentsPerPage, setEquipmentsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const _isMounted = useRef(true);

    const indexOfLastEquipment = currentPage * equipmentsPerPage;
    const indexOfFirstEquipment = indexOfLastEquipment - equipmentsPerPage;
    const currentEquipments = equipments
        .filter((equipment) => {
            const { label } = equipment;
            if (searchTerm === "") return equipment;
            else if (label.includes(searchTerm.toUpperCase())) return equipment;
            return null;
        })
        .slice(indexOfFirstEquipment, indexOfLastEquipment);

    const cols = [
        "EQUIPMENT NUMBER",
        "EQUIPMENT NAME",
        "EQUIPMENT DESCRIPTION",
        "EQUIPMENT PRICE",
        "ACTIONS",
    ];

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        const fetchEquipments = async () => {
            if (_isMounted.current) {
                setIsLoading(true);
                const res = await axios.get(
                    "https://lcctv-backend.herokuapp.com/api/equipments",
                    { headers: authHeader() }
                );
                setEquipments([...res.data]);
                setIsLoading(false);
            }
        };

        fetchEquipments();

        return () => {
            _isMounted.current = false;
        };
    }, []);

    function addEquipment(e) {
        e.preventDefault();
        console.log("ADD EQUIPMENT");
    }

    return (
        <div className="row">
            <div className="col">
                {isLoading ? (
                    <Spinner name="admin" />
                ) : (
                    <>
                        <div className="row">
                            <ItemCountSelector
                                itemsPerPage={equipmentsPerPage}
                                setItemsPerPage={setEquipmentsPerPage}
                                name="equipments"
                                setCurrentPage={setCurrentPage}
                            />
                            <AddButton name="EQUIPMENT" click={addEquipment} />
                            <SearchBar
                                searchTerm={searchTerm}
                                setSearchTerm={setSearchTerm}
                                placeholder="Search name ..."
                            />
                        </div>

                        <div className="row mt-3">
                            <div className="col">
                                {currentEquipments.length === 0 ? (
                                    <SearchError searchTerm={searchTerm} />
                                ) : (
                                    <EquipmentTable
                                        currentEquipments={currentEquipments}
                                        cols={cols}
                                    />
                                )}
                            </div>
                        </div>
                        {!searchTerm && (
                            <div className="row mt-3">
                                <div className="col-auto">
                                    <Page
                                        indexOfFirstItem={indexOfFirstEquipment}
                                        indexOfLastItem={indexOfLastEquipment}
                                        totalItems={equipments.length}
                                    />
                                </div>
                                <div className="col-auto ms-auto">
                                    <Pagination
                                        itemsPerPage={equipmentsPerPage}
                                        totalItems={equipments.length}
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

export default Plans;
