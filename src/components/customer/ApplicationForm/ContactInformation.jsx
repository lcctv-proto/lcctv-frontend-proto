import {
    FieldFeedback,
    FieldFeedbacks,
    Input,
} from "react-form-with-constraints-bootstrap";

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
    form,
}) {
    return (
        <div>
            <label htmlFor="number" className="form-label mt-2">
                Cellphone Number:
            </label>
            <Input
                type="number"
                className="form-control"
                id="number"
                name="number"
                value={cellphoneNumber}
                onChange={async (e) => {
                    setCellphoneNumber(e.target.value);
                    await form.current.validateFields(e.target);
                }}
                required
                pattern="((^(\+)(\d){12}$)|(^\d{11}$))"
            />
            <FieldFeedbacks for="number">
                <FieldFeedback when="valueMissing" />
                <FieldFeedback when="patternMismatch">
                    Enter valid phone number.
                </FieldFeedback>
                <FieldFeedback when="valid">Looks good!</FieldFeedback>
            </FieldFeedbacks>

            <label htmlFor="tele" className="form-label mt-2">
                Telephone Number:
            </label>
            <Input
                type="number"
                className="form-control"
                id="tele"
                name="tele"
                value={telephoneNumber}
                onChange={async (e) => {
                    setTelephoneNumber(e.target.value);
                    await form.current.validateFields(e.target);
                }}
                required
            />
            <FieldFeedbacks for="tele">
                <FieldFeedback when="*" />
                <FieldFeedback when="valid">Looks good!</FieldFeedback>
            </FieldFeedbacks>

            <label htmlFor="email" className="form-label mt-2">
                Email Address:
            </label>
            <Input
                type="email"
                className="form-control"
                id="email"
                name="email"
                style={{ textTransform: "none" }}
                value={email}
                onChange={async (e) => {
                    setEmail(e.target.value);
                    await form.current.validateFields(e.target);
                }}
                required
            />
            <FieldFeedbacks for="email">
                <FieldFeedback
                    when={(value) =>
                        // eslint-disable-next-line
                        !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                            value
                        )
                    }
                    warning
                >
                    Enter valid email.
                </FieldFeedback>
                <FieldFeedback when="valid">Looks good!</FieldFeedback>
            </FieldFeedbacks>

            <p className="fw-bold fs-5 mt-4">Mother's Maiden Name</p>
            <label htmlFor="firstname" className="form-label mt-2">
                First Name:
            </label>
            <Input
                type="text"
                className="form-control"
                id="firstname"
                name="firstname"
                value={motherFirstName}
                onChange={async (e) => {
                    setMotherFirstName(e.target.value);
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
                value={motherMiddleName}
                onChange={async (e) => {
                    setMotherMiddleName(e.target.value);
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
                value={motherLastName}
                onChange={async (e) => {
                    setMotherLastName(e.target.value);
                    await form.current.validateFields(e.target);
                }}
                required
            />
            <FieldFeedbacks for="surname">
                <FieldFeedback when="*" />
                <FieldFeedback when="valid">Looks good!</FieldFeedback>
            </FieldFeedbacks>

            {(civilStatus === "MARRIED" || civilStatus === "WIDOWED") && (
                <>
                    <p className="fw-bold fs-5 mt-4">Spouse's Name</p>
                    <label
                        htmlFor="spouse_firstname"
                        className="form-label mt-2"
                    >
                        First Name:
                    </label>
                    <Input
                        type="text"
                        className="form-control"
                        id="spouse_firstname"
                        name="spouse_firstname"
                        value={spouseFirstName}
                        onChange={async (e) => {
                            setSpouseFirstName(e.target.value);
                            await form.current.validateFields(e.target);
                        }}
                        required={civilStatus === "MARRIED"}
                    />
                    <FieldFeedbacks for="spouse_firstname">
                        <FieldFeedback when="*" />
                        <FieldFeedback when="valid">Looks good!</FieldFeedback>
                    </FieldFeedbacks>

                    <label
                        htmlFor="spouse_middlename"
                        className="form-label mt-2"
                    >
                        Middle Name:
                    </label>
                    <Input
                        type="text"
                        className="form-control"
                        id="spouse_middlename"
                        name="spouse_middlename"
                        value={spouseMiddleName}
                        onChange={async (e) => {
                            setSpouseMiddleName(e.target.value);
                            await form.current.validateFields(e.target);
                        }}
                    />
                    <FieldFeedbacks for="spouse_middlename">
                        <FieldFeedback when="*" />
                        <FieldFeedback when="valid">Looks good!</FieldFeedback>
                    </FieldFeedbacks>

                    <label htmlFor="spouse_surname" className="form-label mt-2">
                        Family Name:
                    </label>
                    <Input
                        type="text"
                        className="form-control"
                        id="spouse_surname"
                        name="spouse_surname"
                        value={spouseLastName}
                        onChange={async (e) => {
                            setSpouseLastName(e.target.value);
                            await form.current.validateFields(e.target);
                        }}
                        required={civilStatus === "MARRIED"}
                    />
                    <FieldFeedbacks for="spouse_surname">
                        <FieldFeedback when="*" />
                        <FieldFeedback when="valid">Looks good!</FieldFeedback>
                    </FieldFeedbacks>
                </>
            )}
        </div>
    );
}

export default ContactInformation;
