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

import AddEquipmentModal from "./AddEquipmentModal";
import EditEquipmentModal from "./EditEquipmentModal";
import DeleteEquipmentModal from "./DeleteEquipmentModal";

import authHeader from "../../auth/auth-header";

function Equipments() {
    const [equipment, setEquipment] = useState([]);
    const [equipments, setEquipments] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [equipmentsPerPage, setEquipmentsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const _isMounted = useRef(true);

    const [addShow, setAddShow] = useState(false);
    const [deleteShow, setDeleteShow] = useState(false);
    const [editShow, setEditShow] = useState(false);

    const handleAddShow = () => setAddShow(true);
    const handleAddClose = () => setAddShow(false);

    const handleEditShow = () => setEditShow(true);
    const handleEditClose = () => setEditShow(false);

    const handleDeleteShow = () => setDeleteShow(true);
    const handleDeleteClose = () => setDeleteShow(false);

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
        "EQUIPMENT PRICE (₱)",
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
                                    itemsPerPage={equipmentsPerPage}
                                    setItemsPerPage={setEquipmentsPerPage}
                                    name="equipments"
                                    setCurrentPage={setCurrentPage}
                                />
                                <AddButton
                                    name="EQUIPMENT"
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
                                    {currentEquipments.length === 0 ? (
                                        <SearchError searchTerm={searchTerm} />
                                    ) : (
                                        <EquipmentTable
                                            currentEquipments={
                                                currentEquipments
                                            }
                                            cols={cols}
                                            handleEditShow={handleEditShow}
                                            handleDeleteShow={handleDeleteShow}
                                            setEquipment={setEquipment}
                                        />
                                    )}
                                </div>
                            </div>
                            {!searchTerm && (
                                <div className="row mt-3">
                                    <div className="col-auto">
                                        <Page
                                            indexOfFirstItem={
                                                indexOfFirstEquipment
                                            }
                                            indexOfLastItem={
                                                indexOfLastEquipment
                                            }
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
            <AddEquipmentModal
                show={addShow}
                handleClose={handleAddClose}
                equipments={equipments}
                setEquipments={setEquipments}
            />
            <EditEquipmentModal
                equipmentID={equipment}
                equipments={equipments}
                setEquipments={setEquipments}
                show={editShow}
                handleClose={handleEditClose}
            />
            <DeleteEquipmentModal
                equipmentID={equipment}
                equipments={equipments}
                setEquipments={setEquipments}
                show={deleteShow}
                handleClose={handleDeleteClose}
            />
        </>
    );
}

export default Equipments;
