import { useEffect, useRef, useState } from "react";

import axios from "axios";

import PlanTable from "./PlanTable";
import Pagination from "../Pagination";
import Page from "../Page";
import ItemCountSelector from "../ItemCountSelector";
import SearchBar from "../SearchBar";
import SearchError from "../SearchError";
import Spinner from "../Spinner";
import AddButton from "../AddButton";

import AddPlanModal from "./AddPlanModal";
import DeletePlanModal from "./DeletePlanModal";
import EditPlanModal from "./EditPlanModal";

function Plans() {
    const [packageID, setPackageID] = useState("");
    const [plans, setPlans] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [plansPerPage, setPlansPerPage] = useState(10);
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

    const indexOfLastPlan = currentPage * plansPerPage;
    const indexOfFirstPlan = indexOfLastPlan - plansPerPage;
    const currentPlans = plans
        .filter((plan) => {
            const { description } = plan;
            if (searchTerm === "") return plan;
            else if (description.includes(searchTerm.toUpperCase()))
                return plan;
            return null;
        })
        .slice(indexOfFirstPlan, indexOfLastPlan);

    const cols = ["PLAN NUMBER", "PLAN NAME", "PLAN PRICE (₱)", "ACTIONS"];

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const fetchPlans = async () => {
        if (_isMounted.current) {
            setIsLoading(true);
            const res = await axios.get(
                "https://lcctv-backend.herokuapp.com/api/packages"
            );
            setPlans([...res.data]);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchPlans();

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
                                    itemsPerPage={plansPerPage}
                                    setItemsPerPage={setPlansPerPage}
                                    name="plans"
                                    setCurrentPage={setCurrentPage}
                                />
                                <AddButton name="PLANS" click={handleAddShow} />
                                <SearchBar
                                    searchTerm={searchTerm}
                                    setSearchTerm={setSearchTerm}
                                    placeholder="Search name ..."
                                />
                            </div>

                            <div className="row mt-3">
                                <div className="col">
                                    {currentPlans.length === 0 ? (
                                        <SearchError searchTerm={searchTerm} />
                                    ) : (
                                        <PlanTable
                                            currentPlans={currentPlans}
                                            cols={cols}
                                            setPackage={setPackageID}
                                            handleEditShow={handleEditShow}
                                            handleDeleteShow={handleDeleteShow}
                                        />
                                    )}
                                </div>
                            </div>
                            {!searchTerm && (
                                <div className="row mt-3">
                                    <div className="col-auto">
                                        <Page
                                            indexOfFirstItem={indexOfFirstPlan}
                                            indexOfLastItem={indexOfLastPlan}
                                            totalItems={plans.length}
                                        />
                                    </div>
                                    <div className="col-auto ms-auto">
                                        <Pagination
                                            itemsPerPage={plansPerPage}
                                            totalItems={plans.length}
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
            <DeletePlanModal
                show={deleteShow}
                handleClose={handleDeleteClose}
                packages={plans}
                packageID={packageID}
                setPackages={setPlans}
            />
            <EditPlanModal
                show={editShow}
                handleClose={handleEditClose}
                packages={plans}
                packageID={packageID}
                setPackages={fetchPlans}
            />
            <AddPlanModal
                show={addShow}
                handleClose={handleAddClose}
                plans={plans}
                setPlans={setPlans}
            />
        </>
    );
}

export default Plans;
