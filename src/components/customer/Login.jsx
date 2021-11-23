import Navbar from "./Login/Navbar";
import { useState } from "react";
import axios from "axios";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [payments, setPayments] = useState([]);
    const [invoices, setInvoices] = useState([]);
    const [id, setID] = useState("");
    const [account, setAccount] = useState([]);
    const [token, setToken] = useState("");
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const fetchBilling = async () => {
        const res = await axios.get(
            `http://13.67.48.52/api/accounts/billing/${id}`,
            { headers: { "x-auth-token": token } }
        );
        setPayments(res.data.payments);
        setInvoices(res.data.invoices);
    };
    const handleSubmit = (e) => {
        setIsLoading(true);
        axios
            .post("http://13.67.48.52/api/accounts/login", {
                accountNumber: username,
                password,
            })
            .then(async (res) => {
                console.log(res);
                setID(res.data._id);
                setToken(res.data.token);
                setIsAuth(true);
                const response = await axios.get(
                    `http://13.67.48.52/api/accounts/${res.data._id}`,
                    { headers: { "x-auth-token": res.data.token } }
                );
                setAccount(response.data);
                fetchBilling();
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <>
            <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
            {!isAuth ? (
                <div className="container-fluid bg-application">
                    <div className="row py-5 justify-content-center my-3">
                        <div className=" col-sm-12 col-md-10 col-xl-4 col-lg-6 text-navy">
                            <div className="card my-5 border-0 shadow-lg">
                                <div className="card-header text-light py-3 bg-navy border-gold-3">
                                    <span className="h5">
                                        LOGIN TO YOUR ACCOUNT
                                    </span>
                                </div>
                                <div className="card-body">
                                    <>
                                        <label
                                            htmlFor="email"
                                            className="form-label"
                                        >
                                            ACCOUNT NUMBER
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="email"
                                            value={username}
                                            onChange={(e) => {
                                                setUsername(e.target.value);
                                            }}
                                            onKeyPress={(e) => {
                                                if (e.key === "Enter")
                                                    handleSubmit();
                                            }}
                                            required
                                        />

                                        <label
                                            htmlFor="password"
                                            className="form-label mt-3"
                                        >
                                            PASSWORD
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            value={password}
                                            onChange={(e) => {
                                                setPassword(e.target.value);
                                            }}
                                            onKeyPress={(e) => {
                                                if (e.key === "Enter")
                                                    handleSubmit();
                                            }}
                                            style={{ textTransform: "none" }}
                                            required
                                        />
                                        <button
                                            className="btn btn-link mt-2 fst-italic"
                                            onClick={() => {
                                                console.log(
                                                    "I am stupid, I forgot my password!"
                                                );
                                            }}
                                        >
                                            Forgot your password?
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-primary mt-3 fw-bolder float-end btn-gold"
                                            onClick={handleSubmit}
                                            disabled={isLoading}
                                        >
                                            {isLoading ? "LOADING" : "LOGIN"}
                                        </button>
                                    </>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container-fluid px-3">
                    <div className="row my-5 py-5">
                        <div className="col-3">
                            <div className="card border-0 shadow">
                                <div className="card-header bg-navy border-gold-2 text-light fs-3">
                                    ACCOUNT DETAILS
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">Account Name:</div>
                                    </div>
                                    <div className="row">
                                        <div className="col h5">
                                            {`${
                                                account?.accountName?.firstName
                                            } ${
                                                !account?.accountName
                                                    ?.middleName[0]
                                                    ? ""
                                                    : `${account?.accountName?.middleName[0]}.`
                                            } ${
                                                account?.accountName?.lastName
                                            }`}
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                Account Number:
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col h5">
                                                {`${
                                                    account?.prefix
                                                }${account?.acc_ctr
                                                    ?.toString()
                                                    .padStart(3, "0")}`}
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                Current Plan:
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col h5">
                                                {`${account?.packageID?.description}`}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="card border-0 shadow">
                                <div className="card-header bg-navy border-gold-2 text-light fs-3">
                                    TRANSACTION HISTORY
                                </div>
                                <div className="card-body">
                                    {[...payments, ...invoices].length !== 0 ? (
                                        <table className="table table-borderless table-striped shadow fs-6">
                                            <thead className="text-light bg-navy border-gold-2 text-center">
                                                <tr>
                                                    <th>TRANSACTION NUMBER</th>
                                                    <th>TRANSACTION DATE</th>
                                                    <th>TRANSACTION TYPE</th>
                                                    <th>A/R TYPE</th>
                                                    <th>AMOUNT</th>
                                                    <th>PAID AMOUNT</th>
                                                    <th>BALANCE</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {[...payments, ...invoices]
                                                    .sort((a, b) => {
                                                        return (
                                                            new Date(a.date) -
                                                            new Date(b.date)
                                                        );
                                                    })
                                                    .map((value) => {
                                                        return (
                                                            <tr key={value._id}>
                                                                <td>
                                                                    {`${
                                                                        value.prefix
                                                                    }${
                                                                        value.pay_ctr
                                                                            ?.toString()
                                                                            .padStart(
                                                                                3,
                                                                                "0"
                                                                            ) ??
                                                                        value.inv_ctr
                                                                            ?.toString()
                                                                            .padStart(
                                                                                3,
                                                                                "3"
                                                                            )
                                                                    }`}
                                                                </td>
                                                                <td>
                                                                    {new Date(
                                                                        value.date
                                                                    )
                                                                        .toLocaleString(
                                                                            undefined,
                                                                            {
                                                                                year: "numeric",
                                                                                month: "long",
                                                                                day: "numeric",
                                                                            }
                                                                        )
                                                                        .toUpperCase()}
                                                                </td>
                                                                <td className="text-center">
                                                                    {value.modeOfPayment ??
                                                                        "INVOICE"}
                                                                </td>
                                                                <td className="text-center">
                                                                    {value.inv_ctr
                                                                        ? "INV"
                                                                        : ""}
                                                                    {value.pay_ctr
                                                                        ? "PAY"
                                                                        : ""}
                                                                </td>
                                                                <td className="text-end">
                                                                    {value.amountDue?.toLocaleString(
                                                                        undefined,
                                                                        {
                                                                            minimumFractionDigits: 2,
                                                                            maximumFractionDigits: 2,
                                                                        }
                                                                    ) ?? "0.00"}
                                                                </td>
                                                                <td className="text-end">
                                                                    {value.amountPaid?.toLocaleString(
                                                                        undefined,
                                                                        {
                                                                            minimumFractionDigits: 2,
                                                                            maximumFractionDigits: 2,
                                                                        }
                                                                    ) ??
                                                                        value.checkAmount?.toLocaleString(
                                                                            undefined,
                                                                            {
                                                                                minimumFractionDigits: 2,
                                                                                maximumFractionDigits: 2,
                                                                            }
                                                                        ) ??
                                                                        "0.00"}
                                                                </td>
                                                                <td className="text-end">
                                                                    {""}
                                                                </td>
                                                            </tr>
                                                        );
                                                    })}
                                            </tbody>
                                            <tfoot>
                                                <tr className="fs-5">
                                                    <td
                                                        colSpan={4}
                                                        className="fw-bold text-end"
                                                    >
                                                        TOTAL
                                                    </td>
                                                    <td className="text-end">
                                                        {invoices
                                                            .reduce(
                                                                (acc, obj) =>
                                                                    acc +
                                                                    obj.amountDue,
                                                                0
                                                            )
                                                            ?.toLocaleString(
                                                                undefined,
                                                                {
                                                                    minimumFractionDigits: 2,
                                                                    maximumFractionDigits: 2,
                                                                }
                                                            ) ?? "0.00"}
                                                    </td>
                                                    <td className="text-end">
                                                        {payments
                                                            .reduce(
                                                                (acc, obj) =>
                                                                    acc +
                                                                        obj.amountPaid ??
                                                                    obj.checkAmount,
                                                                0
                                                            )
                                                            ?.toLocaleString(
                                                                undefined,
                                                                {
                                                                    minimumFractionDigits: 2,
                                                                    maximumFractionDigits: 2,
                                                                }
                                                            ) ?? "0.00"}
                                                    </td>
                                                    <td className="text-end fw-bold">
                                                        {(
                                                            invoices.reduce(
                                                                (acc, obj) =>
                                                                    acc +
                                                                    obj.amountDue,
                                                                0
                                                            ) -
                                                            payments.reduce(
                                                                (acc, obj) =>
                                                                    acc +
                                                                        obj.amountPaid ??
                                                                    obj.checkAmount,
                                                                0
                                                            )
                                                        )?.toLocaleString(
                                                            undefined,
                                                            {
                                                                minimumFractionDigits: 2,
                                                                maximumFractionDigits: 2,
                                                            }
                                                        ) ?? "0.00"}
                                                    </td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    ) : (
                                        "No balance yet! "
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Login;
