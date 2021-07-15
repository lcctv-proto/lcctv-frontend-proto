function ContactInformation({
    cellphoneNumber,
    setCellphoneNumber,
    telephoneNumber,
    setTelephoneNumber,
    email,
    setEmail,
    motherFirstName,
    setMotherFirstName,
    motherMiddleName,
    setMotherMiddleName,
    motherLastName,
    setMotherLastName,
    spouseFirstName,
    setSpouseFirstName,
    spouseMiddleName,
    setSpouseMiddleName,
    spouseLastName,
    setSpouseLastName,
    civilStatus,
}) {
    return (
        <div>
            <label htmlFor="number" className="form-label mt-2">
                Cellphone Number:
            </label>
            <input
                type="text"
                className="form-control"
                id="number"
                value={cellphoneNumber}
                onChange={(e) => {
                    setCellphoneNumber(e.target.value);
                }}
            />
            <label htmlFor="tele" className="form-label mt-2">
                Telephone Number:
            </label>
            <input
                type="text"
                className="form-control"
                id="tele"
                value={telephoneNumber}
                onChange={(e) => {
                    setTelephoneNumber(e.target.value);
                }}
            />

            <label htmlFor="email" className="form-label mt-2">
                Email Address:
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />
            <p className="fw-bold fs-5 mt-4">Mother's Maiden Name</p>

            <label htmlFor="surname" className="form-label mt-2">
                Family Name:
            </label>
            <input
                type="text"
                className="form-control"
                id="surname"
                value={motherLastName}
                onChange={(e) => {
                    setMotherLastName(e.target.value);
                }}
            />
            <label htmlFor="firstname" className="form-label mt-2">
                First Name:
            </label>
            <input
                type="text"
                className="form-control"
                id="firstname"
                value={motherFirstName}
                onChange={(e) => {
                    setMotherFirstName(e.target.value);
                }}
            />
            <label htmlFor="middlename" className="form-label mt-2">
                Middle Name:
            </label>
            <input
                type="text"
                className="form-control"
                id="middlename"
                value={motherMiddleName}
                onChange={(e) => {
                    setMotherMiddleName(e.target.value);
                }}
            />
            {(civilStatus === "MARRIED" || civilStatus === "WIDOWED") && (
                <>
                    <p className="fw-bold fs-5 mt-4">Spouse's Name</p>
                    <label htmlFor="spouse_surname" className="form-label mt-2">
                        Family Name:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="spouse_surname"
                        value={spouseLastName}
                        onChange={(e) => {
                            setSpouseLastName(e.target.value);
                        }}
                    />
                    <label
                        htmlFor="spouse_firstname"
                        className="form-label mt-2"
                    >
                        First Name:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="spouse_firstname"
                        value={spouseFirstName}
                        onChange={(e) => {
                            setSpouseFirstName(e.target.value);
                        }}
                    />
                    <label
                        htmlFor="spouse_middlename"
                        className="form-label mt-2"
                    >
                        Middle Name:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="spouse_middlename"
                        value={spouseMiddleName}
                        onChange={(e) => {
                            setSpouseMiddleName(e.target.value);
                        }}
                    />
                </>
            )}
        </div>
    );
}

export default ContactInformation;
