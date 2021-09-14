import gcash from "../../assets/Images/Customer/Portals/gcash.png";
import paymaya from "../../assets/Images/Customer/Portals/paymaya.png";
import shopee from "../../assets/Images/Customer/Portals/shopee.png";
import bayadcenter from "../../assets/Images/Customer/Portals/bayadcenter.png";
import dragonpay from "../../assets/Images/Customer/Portals/dragonpay.png";

import PaymentPortal from "./PaymentPortal";

function Payment() {
    const portals = [
        {
            logo: gcash,
            title: "GCash",
            steps: [
                "Log-in to your GCash Account.",
                "Select PAY BILLS. Under the CABLE/INTERNET category, select SOUTH LUZON CABLE TV.",
                "Input your Name and 13-digit Account Number/Reference Number.",
                "Input the amount you have to pay.",
                "Click Next to PROCEED to CONFIRM transaction.",
                "Take a SCREENSHOT of the successful payment transaction for proof of payment.",
            ],
        },
        {
            logo: paymaya,
            title: "PayMaya",
            steps: [
                "Log-in to your PayMaya Account.",
                "Select PAY BILLS. Under the CABLE/INTERNET category, select SOUTH LUZON CABLE TV.",
                "Input your Name and 13-digit Account Number/Reference Number.",
                "Input the amount you have to pay.",
                "Click Next to PROCEED to CONFIRM transaction.",
                "Take a SCREENSHOT of the successful payment transaction for proof of payment.",
            ],
        },
        {
            logo: shopee,
            title: "ShopeePay",
            steps: [
                "Log-in to your Shopee Account.",
                "Select LOAD & BILLS. Under the TV CABLE category, select PostPaid.",
                "Go to Biller and select South Luzon Cable TV.",
                "Input your Account Number, Subscriber Name, and Amount to pay.",
                "Click Continue to PROCEED to CONFIRM transaction.",
                "Take a SCREENSHOT of the successful payment transaction for proof of payment.",
            ],
        },
        {
            logo: dragonpay,
            title: "dragonpay",
            steps: [
                "Log-in to your dragonpay Account.",
                "Select LOAD & BILLS. Under the TV CABLE category, select PostPaid.",
                "Go to Biller and select South Luzon Cable TV.",
                "Input your Account Number, Subscriber Name, and Amount to pay.",
                "Click Continue to PROCEED to CONFIRM transaction.",
                "Take a SCREENSHOT of the successful payment transaction for proof of payment.",
            ],
        },
        {
            logo: bayadcenter,
            title: "Bayad Center",
            steps: [
                "Log-in to your Bayad Center Account.",
                "Select LOAD & BILLS. Under the TV CABLE category, select PostPaid.",
                "Go to Biller and select South Luzon Cable TV.",
                "Input your Account Number, Subscriber Name, and Amount to pay.",
                "Click Continue to PROCEED to CONFIRM transaction.",
                "Take a SCREENSHOT of the successful payment transaction for proof of payment.",
            ],
        },
    ];

    return (
        <div className="container p-5">
            <div className="row">
                <div className="col">
                    <p className="h1 py-3 mb-3 text-navy border-gold-3">
                        PAYMENT PORTALS
                    </p>
                </div>
            </div>
            {portals.map((value, index) => {
                return (
                    <PaymentPortal
                        logo={value.logo}
                        title={value.title}
                        steps={value.steps}
                        isRight={index % 2 === 1}
                        key={index}
                    />
                );
            })}
        </div>
    );
}

export default Payment;
