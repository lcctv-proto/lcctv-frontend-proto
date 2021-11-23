import { useEffect, useState } from "react";

import PersonalInfo from "./ApplicationForm/PersonalInfo";
import ServiceAddress from "./ApplicationForm/ServiceAddress";
import ContactInformation from "./ApplicationForm/ContactInformation";
import IDandProof from "./ApplicationForm/IDandProof";
import Form from "react-bootstrap/Form";
import { useLocation, useHistory } from "react-router";
import axios from "axios";

import api from "../../api/api";

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
    const [packages, setPackages] = useState([]);

    const [governmentIdImageURL, setGovernmentIdImageURL] = useState("");
    const [billingImageURL, setBillingImageURL] = useState("");
    const [IDpreview, setIDPreview] = useState("");
    const [POBpreview, setPOBPreview] = useState("");

    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        const query = new URLSearchParams(location.search);

        setPackageID(
            packages?.filter(
                (value) =>
                    value.description.toString().split(" ")[0] ===
                    query.get("name")?.toString()
            )[0]?._id
        );
    }, [location.search, packages]);

    useEffect(() => {
        const fetchPackages = async () => {
            const res = await api.packages.get("");
            setPackages(res.data);
        };

        fetchPackages();
    }, []);

    async function HandleSubmit(e) {
        e.preventDefault();

        const accountName = {
            firstName: accountFirstName,
            middleName: accountMiddleName,
            lastName: accountLastName,
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
                firstName: motherFirstName,
                middleName: motherMiddleName,
                lastName: motherLastName,
            },
            spouseMaidenName: {
                firstName: spouseFirstName,
                middleName: spouseMiddleName,
                lastName: spouseLastName,
            },
        };

        const accountData = new FormData();

        accountData.append(
            "payload",
            JSON.stringify({
                accountName,
                additionalInfo,
                serviceAddress,
                contactInfo,
                packageID,
            })
        );
        accountData.append("governmentIdImageURL", governmentIdImageURL);
        accountData.append("billingImageURL", billingImageURL);
        console.log(...accountData);

        await axios
            .post("http://localhost:5000/api/accounts/", accountData)
            .then(async (res) => {
                await axios
                    .post("http://localhost:5000/api/applications/", {
                        accountID: res.data._id,
                        remarks: "",
                    })
                    .then((res) => {
                        console.log("Application Created!");
                        history.push("/");
                    })
                    .catch((err) => console.error(err));
                alert(
                    `${res.data.accountName.firstName} ${res.data.accountName.lastName}, account creation success! Please check your email(${res.data.contactInfo.email}) in the next 48 hours to see if your application is approved!`
                );
            })
            .catch((err) =>
                alert(
                    "There seems to be a problem with your application, please try again!"
                )
            );
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
                            <p className="mb-2">Select Plan: </p>

                            <form action="">
                                <Form.Group>
                                    <Form.Select
                                        value={packageID}
                                        onChange={(e) => {
                                            setPackageID(e.target.value);
                                        }}
                                    >
                                        {packages.map((value, index) => {
                                            return (
                                                <option
                                                    key={index}
                                                    value={value._id}
                                                >
                                                    {value.description}
                                                </option>
                                            );
                                        })}
                                    </Form.Select>
                                </Form.Group>
                                <hr />
                                {page === 1 && (
                                    <PersonalInfo
                                        accountFirstName={accountFirstName}
                                        setAccountFirstName={
                                            setAccountFirstName
                                        }
                                        accountMiddleName={accountMiddleName}
                                        setAccountMiddleName={
                                            setAccountMiddleName
                                        }
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
                                        setMotherMiddleName={
                                            setMotherMiddleName
                                        }
                                        motherLastName={motherLastName}
                                        setMotherLastName={setMotherLastName}
                                        spouseFirstName={spouseFirstName}
                                        setSpouseFirstName={setSpouseFirstName}
                                        spouseMiddleName={spouseMiddleName}
                                        setSpouseMiddleName={
                                            setSpouseMiddleName
                                        }
                                        spouseLastName={spouseLastName}
                                        setSpouseLastName={setSpouseLastName}
                                        civilStatus={civilStatus}
                                    />
                                )}

                                {page === 4 && (
                                    <IDandProof
                                        billingImageURL={billingImageURL}
                                        setBillingImageURL={setBillingImageURL}
                                        governmentIdImageURL={
                                            governmentIdImageURL
                                        }
                                        setGovernmentIdImageURL={
                                            setGovernmentIdImageURL
                                        }
                                        IDpreview={IDpreview}
                                        setIDPreview={setIDPreview}
                                        POBpreview={POBpreview}
                                        setPOBPreview={setPOBPreview}
                                    />
                                )}
                            </form>
                        </div>
                        <div className="card-footer mt-3 d-flex">
                            {page !== 1 && (
                                <button
                                    className="btn btn-warning btn-lg btn-gold"
                                    onClick={PrevPage}
                                >
                                    Back
                                </button>
                            )}

                            {page !== 4 && (
                                <button
                                    className="btn btn-warning btn-lg btn-gold ms-auto"
                                    onClick={NextPage}
                                >
                                    Next
                                </button>
                            )}
                            {page === 4 && (
                                <button
                                    className="btn btn-warning btn-lg btn-gold ms-auto"
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
