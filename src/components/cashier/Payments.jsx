import { useEffect, useRef, useState } from "react";

import api from "../../api/api";

import PaymentTable from "./PaymentTable";
import Pagination from "../Pagination";
import Page from "../Page";
import ItemCountSelector from "../ItemCountSelector";
import SearchBar from "../SearchBar";
import SearchError from "../SearchError";
import Spinner from "../Spinner";
import RefreshButton from "../RefreshButton";

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
                prefix,
                date,
                accountID: {
                    prefix: acc_prefix,
                    accountName: { firstName, middleName, lastName },
                    acc_ctr,
                },
                modeOfPayment,
                pay_ctr,
            } = payment;

            const name = `${firstName} ${middleName} ${lastName}`;

            const accNumber = `${acc_prefix}${acc_ctr
                .toString()
                .padStart(3, "0")}`;

            const payNumber = `${prefix}${pay_ctr.toString().padStart(3, "0")}`;
            const localDate = new Date(date)
                .toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })
                .toUpperCase();

            if (searchTerm === "") return payment;
            else if (
                name.includes(searchTerm.toUpperCase()) ||
                modeOfPayment.includes(searchTerm.toUpperCase()) ||
                accNumber.includes(searchTerm) ||
                payNumber.includes(searchTerm.toUpperCase()) ||
                localDate.includes(searchTerm.toLocaleUpperCase())
            )
                return payment;
            return null;
        })
        .slice(indexOfFirstPayment, indexOfLastPayment);

    const cols = [
        "PAYMENT NUMBER",
        "TRANSACTION DATE",
        "ACCOUNT NUMBER",
        "ACCOUNT NAME",
        "MODE OF PAYMENT",
        "AMOUNT PAID",
    ];

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const fetchPayments = async () => {
        if (_isMounted.current) {
            setIsLoading(true);
            const res = await api.payments.get("");
            setPayments(
                [...res.data].sort(
                    (a, b) => new Date(b.date) - new Date(a.date)
                )
            );
            setIsLoading(false);
        }
    };

    useEffect(() => {
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
                            <RefreshButton
                                name="PAYMENTS"
                                click={fetchPayments}
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

export default Payments;
