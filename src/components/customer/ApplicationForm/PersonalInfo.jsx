import {
    FieldFeedback,
    FieldFeedbacks,
    Input,
} from "react-form-with-constraints-bootstrap";

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
    form,
}) {
    return (
        <div>
            <label htmlFor="firstname" className="form-label mt-2">
                First Name:
            </label>
            <Input
                type="text"
                className="form-control"
                id="firstname"
                name="firstname"
                value={accountFirstName}
                onChange={async (e) => {
                    setAccountFirstName(e.target.value);
                    await form.current.validateFields(e.target);
                }}
                required
            />
            <FieldFeedbacks for="firstname">
                <FieldFeedback when="*" />
                <FieldFeedback when="valid">Looks good!</FieldFeedback>
            </FieldFeedbacks>

            <label htmlFor="middlename" className="form-label mt-2">
                Middle Name:
            </label>
            <Input
                type="text"
                className="form-control"
                id="middlename"
                name="middlename"
                value={accountMiddleName}
                onChange={async (e) => {
                    setAccountMiddleName(e.target.value);
                    await form.current.validateFields(e.target);
                }}
            />
            <FieldFeedbacks for="middlename">
                <FieldFeedback when="*" />
                <FieldFeedback when="valid">Looks good!</FieldFeedback>
            </FieldFeedbacks>

            <label htmlFor="surname" className="form-label mt-2">
                Family Name:
            </label>
            <Input
                type="text"
                className="form-control"
                id="surname"
                name="surname"
                value={accountLastName}
                onChange={async (e) => {
                    setAccountLastName(e.target.value);
                    await form.current.validateFields(e.target);
                }}
                required
            />
            <FieldFeedbacks for="surname">
                <FieldFeedback when="*" />
                <FieldFeedback when="valid">Looks good!</FieldFeedback>
            </FieldFeedbacks>

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
                required
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
                min={new Date(1900, 1, 1)}
                max={new Date(2002, 1, 1)}
                required
            />

            <label htmlFor="gender" className="form-label mt-2">
                SEX:
            </label>

            <select
                className="form-select"
                id="gender"
                value={gender}
                onChange={(e) => {
                    setGender(e.target.value);
                }}
                required
            >
                <option defaultValue hidden>
                    SELECT SEX
                </option>
                <option value="MALE"> MALE </option>
                <option value="FEMALE"> FEMALE </option>
                <option value="OTHER"> PREFER NOT TO SAY </option>
            </select>

            <label htmlFor="civil" className="form-label mt-2">
                Civil Status:
            </label>
            <select
                className="form-select"
                value={civilStatus}
                id="civil"
                onChange={(e) => {
                    setCivilStatus(e.target.value);
                }}
                required
            >
                <option defaultValue hidden>
                    SELECT CIVIL STATUS
                </option>
                <option value="SINGLE"> SINGLE </option>
                <option value="MARRIED"> MARRIED </option>
                <option value="WIDOWED"> WIDOWED </option>
                <option value="SEPARATED"> SEPARATED </option>
                <option value="DIVORCED"> DIVORCED </option>
            </select>
        </div>
    );
}

export default PersonalInfo;
