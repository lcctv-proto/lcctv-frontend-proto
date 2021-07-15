import { useState } from "react";
import PersonalInfo from "./ApplicationForm/PersonalInfo.jsx";
import ServiceAddress from "./ApplicationForm/ServiceAddress.jsx";
import ContactInformation from "./ApplicationForm/ContactInformation.jsx";
import IDandProof from "./ApplicationForm/IDandProof.jsx";

function Apply() {
    const [page, setPage] = useState(1);

    const [accountFirstName, setAccountFirstName] = useState("");
    const [accountMiddleName, setAccountMiddleName] = useState("");
    const [accountLastName, setAccountLastName] = useState("");

    const [birthdate, setBirthdate] = useState("");
    const [nationality, setNationality] = useState("");
    const [gender, setGender] = useState("");
    const [civilStatus, setCivilStatus] = useState("");

    const [unit, setUnit] = useState("");
    const [street, setStreet] = useState("");
    const [barangay, setBarangay] = useState("");
    const [municipality, setMunicipality] = useState("");
    const [province, setProvince] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [homeOwnership, setHomeOwnership] = useState("");
    const [residencyYear, setResidencyYear] = useState("");
    const [nearestLandmark, setNearestLandmark] = useState("");

    const [cellphoneNumber, setCellphoneNumber] = useState("");
    const [telephoneNumber, setTelephoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [motherFirstName, setMotherFirstName] = useState("");
    const [motherMiddleName, setMotherMiddleName] = useState("");
    const [motherLastName, setMotherLastName] = useState("");
    const [spouseFirstName, setSpouseFirstName] = useState("");
    const [spouseMiddleName, setSpouseMiddleName] = useState("");
    const [spouseLastName, setSpouseLastName] = useState("");

    const [packageID, setPackageID] = useState("");
    const [governmentIdImageURL, setGovernmentIdImageURL] = useState("");
    const [billingImageURL, setBillingImageURL] = useState("");

    function HandleSubmit(e) {
        const accountName = {
            accountFirstName,
            accountMiddleName,
            accountLastName,
        };

        const additionalInfo = {
            birthdate,
            nationality,
            gender,
            civilStatus,
        };

        const serviceAddress = {
            unit,
            street,
            barangay,
            municipality,
            province,
            zipCode,
            homeOwnership,
            residencyYear,
            nearestLandmark,
        };

        const contactInfo = {
            cellphoneNumber,
            telephoneNumber,
            email,
            motherMaidenName: {
                motherFirstName,
                motherMiddleName,
                motherLastName,
            },
            spouseMaidenName: {
                spouseFirstName,
                spouseMiddleName,
                spouseLastName,
            },
        };

        const account = {
            accountName,
            additionalInfo,
            serviceAddress,
            contactInfo,
            packageID,
            governmentIdImageURL,
            billingImageURL,
        };

        e.preventDefault();
        console.log(account);
        // fetch("localhost:3000/api/accounts", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(account),
        // }).then(console.log("Account added!"));
    }

    function PrevPage() {
        if (page === 1) return;
        setPage((page) => page - 1);
    }

    function NextPage() {
        if (page === 4) return;
        setPage((page) => page + 1);
    }

    return (
        <div className="container p-5">
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-12 col-md-12">
                    <div className="card mb-5 border-0 shadow-lg">
                        <div className="card-header text-light py-3 bg-navy border-gold-3">
                            <span className="fs-5">
                                APPLICATION FORM -
                                {page === 1 && " PERSONAL INFORMATION"}
                                {page === 2 && " SERVICE ADDRESS"}
                                {page === 3 && " CONTACT INFORMATION"}
                                {page === 4 && " ID & PROOF OF BILLING"}
                            </span>
                        </div>
                        <div className="card-body">
                            {page === 1 && (
                                <PersonalInfo
                                    accountFirstName={accountFirstName}
                                    setAccountFirstName={setAccountFirstName}
                                    accountMiddleName={accountMiddleName}
                                    setAccountMiddleName={setAccountMiddleName}
                                    accountLastName={accountLastName}
                                    setAccountLastName={setAccountLastName}
                                    birthdate={birthdate}
                                    setBirthdate={setBirthdate}
                                    nationality={nationality}
                                    setNationality={setNationality}
                                    gender={gender}
                                    setGender={setGender}
                                    civilStatus={civilStatus}
                                    setCivilStatus={setCivilStatus}
                                />
                            )}
                            {page === 2 && (
                                <ServiceAddress
                                    unit={unit}
                                    setUnit={setUnit}
                                    street={street}
                                    setStreet={setStreet}
                                    barangay={barangay}
                                    setBarangay={setBarangay}
                                    municipality={municipality}
                                    setMunicipality={setMunicipality}
                                    province={province}
                                    setProvince={setProvince}
                                    zipCode={zipCode}
                                    setZipCode={setZipCode}
                                    homeOwnership={homeOwnership}
                                    setHomeOwnership={setHomeOwnership}
                                    residencyYear={residencyYear}
                                    setResidencyYear={setResidencyYear}
                                    nearestLandmark={nearestLandmark}
                                    setNearestLandmark={setNearestLandmark}
                                />
                            )}
                            {page === 3 && (
                                <ContactInformation
                                    cellphoneNumber={cellphoneNumber}
                                    setCellphoneNumber={setCellphoneNumber}
                                    telephoneNumber={telephoneNumber}
                                    setTelephoneNumber={setTelephoneNumber}
                                    email={email}
                                    setEmail={setEmail}
                                    motherFirstName={motherFirstName}
                                    setMotherFirstName={setMotherFirstName}
                                    motherMiddleName={motherMiddleName}
                                    setMotherMiddleName={setMotherMiddleName}
                                    motherLastName={motherLastName}
                                    setMotherLastName={setMotherLastName}
                                    spouseFirstName={spouseFirstName}
                                    setSpouseFirstName={setSpouseFirstName}
                                    spouseMiddleName={spouseMiddleName}
                                    setSpouseMiddleName={setSpouseMiddleName}
                                    spouseLastName={spouseLastName}
                                    setSpouseLastName={setSpouseLastName}
                                    civilStatus={civilStatus}
                                />
                            )}

                            {page === 4 && (
                                <IDandProof
                                    billingImageURL={billingImageURL}
                                    setBillingImageURL={setBillingImageURL}
                                    governmentIdImageURL={governmentIdImageURL}
                                    setGovernmentIdImageURL={
                                        setGovernmentIdImageURL
                                    }
                                />
                            )}
                        </div>
                        <div className="card-footer mt-3 d-flex">
                            <button
                                className="btn btn-warning btn-lg bg-gold text-navy"
                                onClick={PrevPage}
                            >
                                Back
                            </button>
                            {page !== 4 && (
                                <button
                                    className="btn btn-warning btn-lg bg-gold text-navy ms-auto"
                                    onClick={NextPage}
                                >
                                    Next
                                </button>
                            )}
                            {page === 4 && (
                                <button
                                    className="btn btn-warning btn-lg bg-gold text-navy ms-auto"
                                    onClick={HandleSubmit}
                                >
                                    Submit
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Apply;
