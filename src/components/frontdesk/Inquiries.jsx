import { useEffect, useState } from "react";

import axios from "axios";

import InquiryTable from "./InquiryTable";
import Pagination from "../Pagination";
import Page from "../Page";
import ItemCountSelector from "../ItemCountSelector";
import SearchBar from "../SearchBar";

function Inquiries() {
    const [inquiries, setInquiries] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [inquiriesPerPage, setInquiriesPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const indexOfLastInquiry = currentPage * inquiriesPerPage;
    const indexOfFirstInquiry = indexOfLastInquiry - inquiriesPerPage;
    const currentInquiries = inquiries
        .filter((inquiry) => {
            const {
                accountName: { firstName, middleName, lastName },
            } = inquiry.accountID;
            const name = `${firstName} ${middleName} ${lastName}`;
            if (searchTerm === "") return inquiry;
            else if (name.includes(searchTerm.toUpperCase())) return inquiry;
            return null;
        })
        .slice(indexOfFirstInquiry, indexOfLastInquiry);

    const cols = [
        "INQUIRY NUMBER",
        "ACCOUNT NAME",
        "PLAN",
        "CONCERN TYPE",
        "DATE",
    ];

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        const fetchInquiries = async () => {
            setIsLoading(true);

            const res = await axios.get(
                "https://lcctv-backend.herokuapp.com/api/inquiries"
            );

            setInquiries([...res.data]);

            setIsLoading(false);
        };
        fetchInquiries();
    }, []);

    return (
        <div className="row">
            <div className="col">
                {isLoading && (
                    <div className="text-center mt-5 pt-5">
                        <div
                            className="spinner-border text-front"
                            style={{ width: "5rem", height: "5rem" }}
                            role="status"
                        >
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}
                {!isLoading && (
                    <>
                        <div className="row">
                            <ItemCountSelector
                                itemsPerPage={inquiriesPerPage}
                                setItemsPerPage={setInquiriesPerPage}
                                name="inquiries"
                                setCurrentPage={setCurrentPage}
                            />
                            <SearchBar
                                searchTerm={searchTerm}
                                setSearchTerm={setSearchTerm}
                                placeholder="Search name ..."
                            />
                        </div>
                        <div className="row mt-3">
                            {currentInquiries.length === 0 ? (
                                <div className="text-center mt-5 pt-5">
                                    <h1>
                                        -{searchTerm.toUpperCase()}- not found!
                                    </h1>
                                    <h3>
                                        Please check your search terms and try
                                        again.
                                    </h3>
                                </div>
                            ) : (
                                <div className="col">
                                    <InquiryTable
                                        currentInquiries={currentInquiries}
                                        cols={cols}
                                    />
                                </div>
                            )}
                        </div>
                        {!searchTerm && (
                            <div className="row mt-3">
                                <div className="col-auto pt-3">
                                    <Page
                                        indexOfFirstItem={indexOfFirstInquiry}
                                        indexOfLastItem={indexOfLastInquiry}
                                        totalItems={inquiries.length}
                                    />
                                </div>
                                <div className="col-auto ms-auto">
                                    <Pagination
                                        itemsPerPage={inquiriesPerPage}
                                        totalItems={inquiries.length}
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

export default Inquiries;
