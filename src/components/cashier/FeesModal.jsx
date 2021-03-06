import { useEffect, useState } from "react";

import Modal from "react-bootstrap/Modal";

import Spinner from "../Spinner";

import api from "../../api/api";

function FeesModal({ show, handleClose }) {
    const [fees, setFees] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchFees = async () => {
            setIsLoading(true);
            const res = await api.fees.get("");
            setFees(res.data);
            setIsLoading(false);
        };

        if (show) fetchFees();
    }, [show]);

    return (
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header
                    className="bg-navy text-light border-cashier"
                    closeVariant="white"
                    closeButton
                >
                    <Modal.Title>FEE TABLE</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {isLoading ? (
                        <Spinner name="cashier" small={true} />
                    ) : (
                        <table className="table table-borderless table-striped shadow">
                            <thead className="bg-navy border-cashier text-light">
                                <tr>
                                    <th>FEE CODE</th>
                                    <th>FEE DESCRIPTION</th>
                                    <th>FEE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fees?.map(
                                    ({
                                        prefix,
                                        description,
                                        price,
                                        fee_ctr,
                                        _id,
                                    }) => {
                                        return (
                                            <tr key={_id} className="">
                                                <td>
                                                    {`${prefix}${fee_ctr
                                                        .toString()
                                                        .padStart(3, "0")}`}
                                                </td>
                                                <td>{description}</td>
                                                <td className="text-end">
                                                    {price}
                                                </td>
                                            </tr>
                                        );
                                    }
                                )}
                            </tbody>
                        </table>
                    )}
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </>
    );
}

export default FeesModal;
