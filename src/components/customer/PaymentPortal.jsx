function PaymentPortal({ logo, title, steps, isRight }) {
    return (
        <div className="row mt-5">
            <div
                className={`col-xs-12 col-lg-3 mb-3 mb-lg-0 d-flex align-items-center order-xs-0 ${
                    isRight ? "order-lg-1" : "order-lg-0"
                }`}
            >
                <img
                    className="portal-logo d-block mx-auto shadow"
                    src={logo}
                    alt="Gcash Logo"
                />
            </div>
            <div
                className={`col-xs-12 col-lg-9 order-xs-1 ${
                    isRight ? "order-lg-0" : "order-lg-1"
                }`}
            >
                <div className="card shadow">
                    <div className="card-header border-gold-3 bg-navy text-white">
                        <h4 className="m-0">{title} STEPS</h4>
                    </div>
                    <div className="card-body">
                        <ol className="list-group list-group-numbered list-group-flush">
                            {steps.map((value, index) => {
                                return (
                                    <li key={index} className="list-group-item">
                                        {value}
                                    </li>
                                );
                            })}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentPortal;
