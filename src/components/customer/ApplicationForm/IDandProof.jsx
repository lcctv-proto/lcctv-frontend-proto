function IDandProof({
    governmentIdImageURL,
    setGovernmentIdImageURL,
    billingImageURL,
    setBillingImageURL,
    IDpreview,
    setIDPreview,
    POBpreview,
    setPOBPreview,
}) {
    return (
        <div>
            <p className="fw-bold fs-5 mt-2">Government Issued ID:</p>
            <p>Choose one ID from below:</p>
            <ul>
                <li>Passport</li>
                <li>SSS ID</li>
                <li>Driver's License</li>
                <li>PhilHealth ID</li>
                <li>Postal ID</li>
                <li>PRC ID</li>
                <li>Comelec ID</li>
            </ul>
            {IDpreview && (
                <img src={IDpreview} className="img-fluid mb-2" alt="id" />
            )}
            <div className="mb-3">
                <label htmlFor="formID" className="form-label">
                    Please select your government issued ID:
                </label>
                <input
                    className="form-control"
                    type="file"
                    id="formID"
                    accept="image/*"
                    onChange={(e) => {
                        setIDPreview(URL.createObjectURL(e.target.files[0]));
                        setGovernmentIdImageURL(e.target.files[0]);
                    }}
                    required
                />
            </div>
            <hr />
            <p className="fw-bold fs-5 mt-2">Proof of Billing:</p>
            <p>Choose one proof of billing from below:</p>
            <ul>
                <li>Electricity Bill</li>
                <li>Water Bill</li>
            </ul>
            {POBpreview && (
                <img src={POBpreview} className="img-fluid mb-2" alt="pob" />
            )}
            <div className="mb-3">
                <label htmlFor="formBilling" className="form-label">
                    Please select your proof of billing:
                </label>
                <input
                    className="form-control"
                    type="file"
                    id="formBilling"
                    accept="image/*"
                    onChange={(e) => {
                        setPOBPreview(URL.createObjectURL(e.target.files[0]));
                        setBillingImageURL(e.target.files[0]);
                    }}
                    required
                />
            </div>
        </div>
    );
}

export default IDandProof;
