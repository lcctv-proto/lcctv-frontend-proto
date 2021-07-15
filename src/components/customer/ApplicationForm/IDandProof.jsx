function IDandProof({
    governmentIdImageURL,
    setGovernmentIdImageURL,
    billingImageURL,
    setBillingImageURL,
}) {
    return (
        <div>
            <p className="fw-bold fs-5 mt-2">Government Issued ID:</p>
            <p>Select one from below:</p>
            <ul>
                <li>Passport</li>
                <li>SSS ID</li>
                <li>Driver's License</li>
                <li>PhilHealth ID</li>
                <li>Postal ID</li>
                <li>PRC ID</li>
                <li>Comelec ID</li>
            </ul>
            <div class="mb-3">
                {/* <label for="formID" class="form-label">
                    Please select your government issued ID:
                </label> */}
                <input
                    class="form-control"
                    type="file"
                    id="formID"
                    accept="image/*"
                />
            </div>
            <hr />
            <p className="fw-bold fs-5 mt-2">Proof of Billing:</p>
            <p>Select one from below:</p>
            <ul>
                <li>Electricity Bill</li>
                <li>Water Bill</li>
            </ul>
            <div class="mb-3">
                {/* <label for="formBilling" class="form-label">
                    Please select your proof of billing:
                </label> */}
                <input
                    class="form-control"
                    type="file"
                    id="formBilling"
                    accept="image/*"
                    value={billingImageURL}
                    onChange={(e) => {
                        console.log(e.target.files[0]);
                    }}
                />
            </div>
        </div>
    );
}

export default IDandProof;
