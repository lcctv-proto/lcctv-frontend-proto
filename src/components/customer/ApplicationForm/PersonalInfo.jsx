function PersonalInfo({
    accountFirstName,
    setAccountFirstName,
    accountMiddleName,
    setAccountMiddleName,
    accountLastName,
    setAccountLastName,
    birthdate,
    setBirthdate,
    nationality,
    setNationality,
    gender,
    setGender,
    civilStatus,
    setCivilStatus,
}) {
    return (
        <div>
            <label htmlFor="firstname" className="form-label mt-2">
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

            <label htmlFor="middlename" className="form-label mt-2">
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

            <label htmlFor="surname" className="form-label mt-2">
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

            <label htmlFor="nationality" className="form-label mt-2">
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
            <label htmlFor="birthdate" className="form-label mt-2">
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
            <select
                className="form-select"
                value={civilStatus}
                id="civil"
                onChange={(e) => {
                    setCivilStatus(e.target.value);
                }}
            >
                <option defaultValue hidden>
                    SELECT CIVIL STATUS
                </option>
                <option value="SINGLE">SINGLE</option>
                <option value="MARRIED">MARRIED </option>
                <option value="DIVORCED">DIVORCED </option>
            </select>
        </div>
    );
}

export default PersonalInfo;
