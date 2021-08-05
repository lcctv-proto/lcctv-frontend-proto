import {
    CreditCard2Front,
    QuestionOctagon,
    Tools,
} from "react-bootstrap-icons";
import ContactCard from "./ContactCard";

function Contact() {
    const cardContent = [
        {
            title: "TECHNICAL SUPPORT",
            desc: "Diagnose common technical and non-technical problems and perform basic troubleshooting by yourself.",
            path: "technical",
            icon: <Tools className="zoom d-block mx-auto mb-3" />,
        },
        {
            title: "GENERAL INQUIRIES",
            desc: "For general inquiries and other questions, you may contact us through this form.",
            path: "general",
            icon: <QuestionOctagon className="zoom d-block mx-auto mb-3" />,
        },
        {
            title: "PAYMENT INFORMATION",
            desc: "You can now pay your bills online through our payment partners.",
            path: "payment",
            icon: <CreditCard2Front className="zoom d-block mx-auto mb-3" />,
        },
    ];

    return (
        <div className="container py-5">
            <div className="row my-3">
                <div className="col mx-auto">
                    <h1 className="pb-4 text-navy border-gold-3">CONTACT US</h1>
                </div>
            </div>
            <div className="row row my-4 justify-content-center text-center">
                {cardContent.map(({ title, desc, path, icon }, index) => {
                    return (
                        <ContactCard
                            title={title}
                            desc={desc}
                            path={path}
                            icon={icon}
                            isLast={index === cardContent.length - 1}
                            key={index}
                        />
                    );
                })}
            </div>
            <div className="row my-3">
                <div className="col text-center">
                    <span className="fs-2 text-wrap  text-navy">
                        You may also contact us through our hotline numbers
                        below
                    </span>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-lg-6 mx-auto">
                    <table className="table table-borderless shadow">
                        <thead className="bg-navy border-gold-3 text-light">
                            <tr>
                                <th colSpan="2">ADDRESS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center" colSpan="2">
                                    Lina Bldg,Brgy.V-B Rizal Avenue Cor.
                                    Apolinario Mabini St, San Pablo City, 4000
                                    Laguna, Philippines
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <table className="table table-borderless shadow">
                        <thead className="bg-navy border-gold-3 text-light">
                            <tr>
                                <th colSpan="2">CONTACT US HERE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-bottom">
                                <th className="border-end">Mobile Number</th>
                                <td>0995 381 7833</td>
                            </tr>
                            <tr className="border-bottom">
                                <th className="border-end">Landline</th>
                                <td>+63 (49) 562 5600</td>
                            </tr>
                            <tr>
                                <th className="border-end">Email</th>
                                <td>LakeCoop@gmail.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Contact;
