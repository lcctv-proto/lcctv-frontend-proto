import { useEffect, useRef, useState } from "react";

import axios from "axios";

import PaymentTable from "./PaymentTable";
import Pagination from "../Pagination";
import Page from "../Page";
import ItemCountSelector from "../ItemCountSelector";
import SearchBar from "../SearchBar";
import SearchError from "../SearchError";
import Spinner from "../Spinner";

function Payments() {
    const [payments, setPayments] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [paymentsPerPage, setPaymentsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const _isMounted = useRef(true);

    const indexOfLastPayment = currentPage * paymentsPerPage;
    const indexOfFirstPayment = indexOfLastPayment - paymentsPerPage;
    const currentPayments = payments
        .filter((payment) => {
            const {
                accountName: { firstName, middleName, lastName },
            } = payment.accountID;
            const name = `${firstName} ${middleName} ${lastName}`;
            if (searchTerm === "") return payment;
            else if (name.includes(searchTerm.toUpperCase())) return payment;
            return null;
        })
        .slice(indexOfFirstPayment, indexOfLastPayment);

    const cols = [
        "PAYMENT NUMBER",
        "ACCOUNT NUMBER",
        "ACCOUNT NAME",
        "AMOUNT PAID",
        "TRANSACTION DATE",
        "MODE OF PAYMENT",
    ];

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        const fetchPayments = async () => {
            if (_isMounted.current) {
                setIsLoading(true);
                const res = await axios.get(
                    "https://lcctv-backend.herokuapp.com/api/payments"
                );
                setPayments([...res.data]);
                setIsLoading(false);
            }
        };

        fetchPayments();

        return () => {
            _isMounted.current = false;
        };
    }, []);

    return (
        <div className="row">
            <div className="col">
                {isLoading ? (
                    <Spinner name="cashier" />
                ) : (
                    <>
                        <div className="row">
                            <ItemCountSelector
                                itemsPerPage={paymentsPerPage}
                                setItemsPerPage={setPaymentsPerPage}
                                name="payments"
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
                                {currentPayments.length === 0 ? (
                                    <SearchError searchTerm={searchTerm} />
                                ) : (
                                    <PaymentTable
                                        currentPayments={currentPayments}
                                        cols={cols}
                                    />
                                )}
                            </div>
                        </div>

                        {!searchTerm && (
                            <div className="row mt-3">
                                <div className="col-auto">
                                    <Page
                                        indexOfFirstItem={indexOfFirstPayment}
                                        indexOfLastItem={indexOfLastPayment}
                                        totalItems={payments.length}
                                    />
                                </div>
                                <div className="col-auto ms-auto">
                                    <Pagination
                                        itemsPerPage={paymentsPerPage}
                                        totalItems={payments.length}
                                        paginate={paginate}
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

export default Payments;
