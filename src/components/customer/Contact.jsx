import ContactCard from "./ContactCard";

function Contact() {
    return (
        <div className="container-fluid">
            <div className="row py-5 bg-gold">
                <div className="col-4 mx-auto">
                    <p className="h1 py-3 fw-bolder text-center text-navy border-navy-2">
                        CONTACT US
                    </p>
                </div>
            </div>
            <div className="row row pt-5 justify-content-center text-center">
                <ContactCard
                    title="TECHNICAL SUPPORT"
                    desc="Diagnose common technical and non-technical problems and perform basic troubleshooting by yourself."
                    path="technical"
                    icon="Tools"
                    isLast={false}
                />
                <ContactCard
                    title="GENERAL INQUIRIES"
                    desc="For general inquiries and other questions, you may contact us through this form."
                    path="general"
                    icon="QuestionOctagon"
                    isLast={false}
                />
                <ContactCard
                    title="PAYMENT INFORMATION"
                    desc="You can now pay your bills online through our payment partners."
                    path="payment"
                    icon="CreditCard2Front"
                    isLast={true}
                />
            </div>
            <div className="row mt-4 mb-3">
                <div className="col text-center">
                    <span className="fs-2 text-wrap  text-navy">
                        You may also contact us through our hotline numbers
                        below
                    </span>
                </div>
            </div>
            <div className="row mt-4 mb-3">
                <div className="col-6 mx-auto">
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

                    <table className="table table-borderless shadow mt-4">
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
