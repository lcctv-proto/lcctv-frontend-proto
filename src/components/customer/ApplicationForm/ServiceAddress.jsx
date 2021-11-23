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
}) {
    return (
        <div>
            <p className="fw-bold fs-5 mt-2">Home / Installation Address</p>

            <label htmlFor="house_num" className="form-label mt-2">
                Unit/ House Number:
            </label>
            <input
                type="text"
                className="form-control"
                id="house_num"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
            />
            <label htmlFor="street" className="form-label mt-2">
                Street:
            </label>
            <input
                type="text"
                className="form-control"
                id="street"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                required
            />
            <label htmlFor="barangay" className="form-label mt-2">
                Barangay:
            </label>
            <input
                type="text"
                className="form-control"
                id="barangay"
                value={barangay}
                onChange={(e) => setBarangay(e.target.value)}
                required
            />
            <label htmlFor="municipality" className="form-label mt-2">
                Municipality:
            </label>
            <input
                type="text"
                className="form-control"
                id="municipality"
                value={municipality}
                onChange={(e) => setMunicipality(e.target.value)}
                required
            />
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
            <input
                type="text"
                className="form-control"
                id="yrs_resid"
                value={residencyYear}
                onChange={(e) => setResidencyYear(e.target.value)}
                required
            />
            <label htmlFor="province" className="form-label mt-2">
                Province:
            </label>
            <input
                type="text"
                className="form-control"
                id="province"
                value={province}
                onChange={(e) => setProvince(e.target.value)}
                required
            />
            <label htmlFor="zip" className="form-label mt-2">
                Zip Code:
            </label>
            <input
                type="text"
                className="form-control"
                id="zip"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                required
            />
            <label htmlFor="landmark" className="form-label mt-2">
                Nearest Landmark:
            </label>
            <input
                type="text"
                className="form-control"
                id="landmark"
                value={nearestLandmark}
                onChange={(e) => setNearestLandmark(e.target.value)}
                required
            />
        </div>
    );
}

export default ServiceAddress;
