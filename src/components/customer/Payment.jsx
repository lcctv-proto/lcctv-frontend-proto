import gcash from "../../assets/Images/Customer/Portals/gcash.png";
import paymaya from "../../assets/Images/Customer/Portals/paymaya.png";
import shopee from "../../assets/Images/Customer/Portals/paymaya.png";

import PaymentPortal from "./PaymentPortal";

function Payment() {
    const portals = [
        {
            logo: gcash,
            title: "GCash",
            steps: [
                "Log-in to your Gcash Account.",
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
                "Log-in to your PayMaya Account.",
                "Select PAY BILLS. Under the CABLE/INTERNET category, select SOUTH LUZON CABLE TV.",
                "Input your Name and 13-digit Account Number/Reference Number.",
                "Input the amount you have to pay.",
                "Click Next to PROCEED to CONFIRM transaction.",
                "Take a SCREENSHOT of the successful payment transaction for proof of payment.",
                "Take a SCREENSHOT of the successful payment transaction for proof of payment.",
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
    ];

    return (
        <div className="container p-5">
            {portals.map((value, index) => {
                return (
                    <PaymentPortal
                        logo={value.logo}
                        title={value.title}
                        steps={value.steps}
                        isRight={index % 2 == 1}
                        key={index}
                    />
                );
            })}
        </div>
    );
}

export default Payment;
