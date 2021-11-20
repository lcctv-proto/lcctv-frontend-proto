import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Spinner from "../Spinner";

import api from "../../api/api";

function Reports() {
    const [applications, setApplications] = useState([]);
    const [payments, setPayments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchAccounts = async () => {
            setIsLoading(true);
            const res = await api.applications.get("");
            const arr = [0, 0, 0, 0, 0, 0];
            res.data.map((value) => {
                switch (new Date(value.date).getMonth()) {
                    case 6:
                        arr[0]++;
                        break;
                    case 7:
                        arr[1]++;
                        break;
                    case 8:
                        arr[2]++;
                        break;
                    case 9:
                        arr[3]++;
                        break;
                    case 10:
                        arr[4]++;
                        break;
                    case 11:
                        arr[5]++;
                        break;
                    default:
                        console.log("hi");
                        break;
                }
                return "asd";
            });

            setApplications(arr);
            setIsLoading(false);
        };

        fetchAccounts();

        const fetchPayments = async () => {
            setIsLoading(true);
            const res = await api.payments.get("");
            const arr = [0, 0, 0, 0, 0, 0];
            res.data.map((value) => {
                switch (new Date(value.date).getMonth()) {
                    case 6:
                        arr[0] += value.amountPaid ?? value.checkAmount;
                        break;
                    case 7:
                        arr[1] += value.amountPaid ?? value.checkAmount;
                        break;
                    case 8:
                        arr[2] += value.amountPaid ?? value.checkAmount;
                        break;
                    case 9:
                        arr[3] += value.amountPaid ?? value.checkAmount;
                        break;
                    case 10:
                        arr[4] += value.amountPaid ?? value.checkAmount;
                        break;
                    case 11:
                        arr[5] += value.amountPaid ?? value.checkAmount;
                        break;
                    default:
                        console.log("hi");
                        break;
                }
                return "asd";
            });

            setPayments(arr);
            setIsLoading(false);
        };

        fetchPayments();
    }, []);

    const applications_data = {
        labels: [
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ],
        datasets: [
            {
                label: "REGISTRATIONS PER MONTH",
                data: applications,
                fill: true,
                backgroundColor: "#14274e",
                borderColor: "#14274e",
            },
        ],
    };

    const payments_data = {
        labels: [
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ],
        datasets: [
            {
                label: "SALES PER MONTH",
                data: payments,
                fill: true,
                backgroundColor: "#14274e",
                borderColor: "#14274e",
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <>
            <div className="row">
                <h1 className="text-navy">SUBSCRIBER REGISTRATION PER MONTH</h1>
            </div>
            <div className="row">
                <div className="col-8">
                    <Line data={applications_data} options={options} />
                </div>
                <div className="col-4 d-flex justify-content-center align-items-center">
                    {!isLoading ? (
                        <table className="table table-borderless table-striped shadow text-center">
                            <thead className="bg-navy border-admin text-light">
                                <tr>
                                    <th>MONTH</th>
                                    <th>SUBSCRIBERS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {applications_data.datasets[0].data.map(
                                    (datum, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    {
                                                        applications_data
                                                            .labels[index]
                                                    }
                                                </td>
                                                <td>{datum}</td>
                                            </tr>
                                        );
                                    }
                                )}
                            </tbody>
                            <tfoot className="fs-5 fw-bold">
                                <td>TOTAL:</td>
                                <td>
                                    {applications.reduce(
                                        (acc, obj) => acc + obj,
                                        0
                                    )}
                                </td>
                            </tfoot>
                        </table>
                    ) : (
                        <Spinner
                            className="text-end"
                            name="admin"
                            small={true}
                        />
                    )}
                </div>
            </div>

            <div className="row mt-5">
                <h1 className="text-navy">SALES PER MONTH</h1>
            </div>
            <div className="row">
                <div className="col-8">
                    <Line data={payments_data} options={options} />
                </div>
                <div className="col-4 d-flex justify-content-center align-items-center">
                    {!isLoading ? (
                        <table className="table table-borderless table-striped shadow text-center">
                            <thead className="bg-navy border-admin text-light">
                                <tr>
                                    <th>MONTH</th>
                                    <th>TOTAL SALES</th>
                                </tr>
                            </thead>
                            <tbody>
                                {payments_data.datasets[0].data.map(
                                    (datum, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    {
                                                        payments_data.labels[
                                                            index
                                                        ]
                                                    }
                                                </td>
                                                <td className="text-end pe-5">
                                                    {datum?.toLocaleString(
                                                        undefined,
                                                        {
                                                            minimumFractionDigits: 2,
                                                            maximumFractionDigits: 2,
                                                        }
                                                    )}
                                                </td>
                                            </tr>
                                        );
                                    }
                                )}
                            </tbody>
                            <tfoot className="fs-5 fw-bold">
                                <td>TOTAL:</td>
                                <td className="text-end pe-5">
                                    {payments
                                        .reduce((acc, obj) => acc + obj, 0)
                                        .toLocaleString(undefined, {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}
                                </td>
                            </tfoot>
                        </table>
                    ) : (
                        <Spinner
                            className="text-end"
                            name="admin"
                            small={true}
                        />
                    )}
                </div>
            </div>
        </>
    );
}

export default Reports;
