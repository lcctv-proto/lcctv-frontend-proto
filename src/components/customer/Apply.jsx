import { useState } from "react";

function Apply() {
    const [name, setName] = useState("");

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
    const [homeOwnership, setHomeOwnershipUnit] = useState("");
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

    const [startDate, setStartDate] = useState("");
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
            name,
            accountName,
            additionalInfo,
            serviceAddress,
            contactInfo,
            startDate,
            packageID,
            governmentIdImageURL,
            billingImageURL,
        };
        e.preventDefault();
        console.log(accountName, additionalInfo);
        // fetch("localhost:3000/api/accounts", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(account),
        // }).then(console.log("Account added!"));
    }

    return (
        <div className="container p-5">
            <div className="row justify-content-center">
                <div className="col-6">
                    <div className="card mb-5 border-0 shadow-lg">
                        <div className="card-header text-light py-3 bg-navy border-gold-3">
                            <span className="fs-5">
                                APPLICATION FORM - PERSONAL INFORMATION
                            </span>
                        </div>
                        <div className="card-body">
                            <label htmlFor="surname" className="form-label">
                                Family Name:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="surname"
                                value={accountLastName}
                                onChange={(e) => {
                                    setAccountLastName(e.target.value);
                                }}
                            />
                            <label
                                htmlFor="firstname"
                                className="form-label mt-2"
                            >
                                First Name:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstname"
                                value={accountFirstName}
                                onChange={(e) => {
                                    setAccountFirstName(e.target.value);
                                }}
                            />
                            <label
                                htmlFor="middlename"
                                className="form-label mt-2"
                            >
                                Middle Name:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="middlename"
                                value={accountMiddleName}
                                onChange={(e) => {
                                    setAccountMiddleName(e.target.value);
                                }}
                            />

                            <label
                                htmlFor="nationality"
                                className="form-label mt-2"
                            >
                                Nationality:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="nationality"
                                value={nationality}
                                onChange={(e) => {
                                    setNationality(e.target.value);
                                }}
                            />
                            <label
                                htmlFor="birthdate"
                                className="form-label mt-2"
                            >
                                Birth Date:
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                id="birthdate"
                                value={birthdate}
                                onChange={(e) => {
                                    setBirthdate(e.target.value);
                                }}
                            />

                            <label htmlFor="gender" className="form-label mt-2">
                                Gender:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="gender"
                                value={gender}
                                onChange={(e) => {
                                    setGender(e.target.value);
                                }}
                            />

                            <label htmlFor="civil" className="form-label mt-2">
                                Civil Status:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="civil"
                                value={civilStatus}
                                onChange={(e) => {
                                    setCivilStatus(e.target.value);
                                }}
                            />
                        </div>
                        <div className="card-footer">
                            <button
                                className="btn btn-warning btn-lg bg-gold text-navy mt-2"
                                onClick={HandleSubmit}
                            >
                                SUBMIT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Apply;
