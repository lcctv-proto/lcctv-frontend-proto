import {
    FieldFeedback,
    FieldFeedbacks,
    Input,
} from "react-form-with-constraints-bootstrap";

function ServiceAddress({
    unit,
    setUnit,
    street,
    setStreet,
    barangay,
    setBarangay,
    municipality,
    setMunicipality,
    province,
    setProvince,
    zipCode,
    setZipCode,
    homeOwnership,
    setHomeOwnership,
    residencyYear,
    setResidencyYear,
    nearestLandmark,
    setNearestLandmark,
    form,
}) {
    return (
        <div>
            <p className="fw-bold fs-5 mt-2">Home / Installation Address</p>

            <label htmlFor="house_num" className="form-label mt-2">
                Unit/ House Number:
            </label>
            <Input
                type="text"
                className="form-control"
                id="house_num"
                name="house_num"
                value={unit}
                onChange={async (e) => {
                    setUnit(e.target.value); 
                    await form.current.validateFields(e.target);
                }}
                required
            />
            <FieldFeedbacks for="house_num">
                <FieldFeedback when="*" />
                <FieldFeedback when="valid">Looks good!</FieldFeedback>
            </FieldFeedbacks>

            <label htmlFor="street" className="form-label mt-2">
                Street:
            </label>
            <Input
                type="text"
                className="form-control"
                id="street"
                name="street"
                value={street}
                onChange={async (e) => {
                    setStreet(e.target.value); 
                    await form.current.validateFields(e.target);
                }}
                required
            />
            <FieldFeedbacks for="street">
                <FieldFeedback when="*" />
                <FieldFeedback when="valid">Looks good!</FieldFeedback>
            </FieldFeedbacks>

            <label htmlFor="barangay" className="form-label mt-2">
                Barangay:
            </label>
            <Input
                type="text"
                className="form-control"
                id="barangay"
                name="barangay"
                value={barangay}
                onChange={async (e) => {
                    setBarangay(e.target.value); 
                    await form.current.validateFields(e.target);
                }}
                required
            />
            <FieldFeedbacks for="barangay">
                <FieldFeedback when="*" />
                <FieldFeedback when="valid">Looks good!</FieldFeedback>
            </FieldFeedbacks>

            <label htmlFor="municipality" className="form-label mt-2">
                Municipality:
            </label>
            <Input
                type="text"
                className="form-control"
                id="municipality"
                name="municipality"
                value={municipality}
                onChange={async (e) => {
                    setMunicipality(e.target.value); 
                    await form.current.validateFields(e.target);
                }}
                required
            />
            <FieldFeedbacks for="municipality">
                <FieldFeedback when="*" />
                <FieldFeedback when="valid">Looks good!</FieldFeedback>
            </FieldFeedbacks>

            <label htmlFor="home_owner" className="form-label mt-2">
                Home Ownership:
            </label>
            <select
                value={homeOwnership}
                className="form-select"
                onChange={(e) => setHomeOwnership(e.target.value)}
                required
            >
                <option value="OWNED">OWNED</option>
                <option value="LIVING WITH RELATIVES">
                    LIVING WITH RELATIVES
                </option>
                <option value="RENTED">RENTED</option>
            </select>

            <label htmlFor="yrs_resid" className="form-label mt-2">
                Years of Residency:
            </label>
            <Input
                type="number"
                className="form-control"
                id="yrs_resid"
                name="yrs_resid"
                value={residencyYear}
                onChange={async (e) => {
                    setResidencyYear(e.target.value); 
                    await form.current.validateFields(e.target);
                }}
                required
            />
            <FieldFeedbacks for="yrs_resid">
                <FieldFeedback when="*" />
                <FieldFeedback when="valid">Looks good!</FieldFeedback>
            </FieldFeedbacks>

            <label htmlFor="province" className="form-label mt-2">
                Province:
            </label>
            <input
                type="text"
                className="form-control"
                id="province"
                name="province"
                value={province}
                onChange={async (e) => {
                    setProvince(e.target.value); 
                    await form.current.validateFields(e.target);
                }}
                required
            />
            <FieldFeedbacks for="province">
                <FieldFeedback when="*" />
                <FieldFeedback when="valid">Looks good!</FieldFeedback>
            </FieldFeedbacks>

            <label htmlFor="zip" className="form-label mt-2">
                Zip Code:
            </label>
            <input
                type="number"
                className="form-control"
                id="zip"
                name="zip"
                value={zipCode}
                onChange={async (e) => {
                    setZipCode(e.target.value); 
                    await form.current.validateFields(e.target);
                }}
                required
            />
            <FieldFeedbacks for="zip">
                <FieldFeedback when="*" />
                <FieldFeedback when="valid">Looks good!</FieldFeedback>
            </FieldFeedbacks>

            <label htmlFor="landmark" className="form-label mt-2">
                Nearest Landmark:
            </label>
            <input
                type="text"
                className="form-control"
                id="landmark"
                name="landmark"
                value={nearestLandmark}
                onChange={async (e) => {
                    setNearestLandmark(e.target.value); 
                    await form.current.validateFields(e.target);
                }}
                required
            />
            <FieldFeedbacks for="landmark">
                <FieldFeedback when="*" />
                <FieldFeedback when="valid">Looks good!</FieldFeedback>
            </FieldFeedbacks>
        </div>
    );
}

export default ServiceAddress;
