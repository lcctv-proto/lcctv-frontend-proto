import gcash from "../../assets/Images/Customer/Portals/gcash.png";
import paymaya from "../../assets/Images/Customer/Portals/paymaya.png";
function Payment() {
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-xs-12  col-lg-3 mb-3 mb-lg-0 d-flex align-items-center">
                    <img
                        className="portal-logo d-block mx-auto shadow"
                        src={gcash}
                        alt="Gcash Logo"
                    />
                </div>
                <div className="col-xs-12 col-lg-9">
                    <div className="card shadow">
                        <div className="card-header border-gold-3 bg-navy text-white">
                            <h4 className="m-0">G-CASH STEPS</h4>
                        </div>
                        <div className="card-body">
                            <ol className="list-group list-group-numbered list-group-flush">
                                <li className="list-group-item">
                                    Log-in to your Gcash Account.
                                </li>
                                <li className="list-group-item">
                                    Select PAY BILLS. Under the CABLE/INTERNET
                                    category, select SOUTH LUZON CABLE TV.
                                </li>
                                <li className="list-group-item">
                                    Input your Name and 13-digit Account
                                    Number/Reference Number.
                                </li>
                                <li className="list-group-item">
                                    Input the amount you have to pay.
                                </li>
                                <li className="list-group-item">
                                    Click Next to PROCEED to CONFIRM
                                    transaction.
                                </li>
                                <li className="list-group-item">
                                    Take a SCREENSHOT of the successful payment
                                    transaction for proof of payment.
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-xs-12 col-lg-9">
                    <div className="card shadow">
                        <div className="card-header border-gold-3 bg-navy text-white">
                            <h4 className="m-0">PAYMAYA STEPS</h4>
                        </div>
                        <div className="card-body">
                            <ol className="list-group list-group-numbered list-group-flush">
                                <li className="list-group-item">
                                    Log-in to your Gcash Account.
                                </li>
                                <li className="list-group-item">
                                    Select PAY BILLS. Under the CABLE/INTERNET
                                    category, select SOUTH LUZON CABLE TV.
                                </li>
                                <li className="list-group-item">
                                    Input your Name and 13-digit Account
                                    Number/Reference Number.
                                </li>
                                <li className="list-group-item">
                                    Input the amount you have to pay.
                                </li>
                                <li className="list-group-item">
                                    Click Next to PROCEED to CONFIRM
                                    transaction.
                                </li>
                                <li className="list-group-item">
                                    Take a SCREENSHOT of the successful payment
                                    transaction for proof of payment.
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12  col-lg-3 mb-3 mb-lg-0 d-flex align-items-center">
                    <img
                        className="portal-logo d-block mx-auto shadow"
                        src={paymaya}
                        alt="Paymaya Logo"
                    />
                </div>
            </div>
        </div>
    );
}

export default Payment;
