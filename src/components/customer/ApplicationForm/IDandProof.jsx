import {
    FieldFeedback,
    FieldFeedbacks,
    Input,
} from "react-form-with-constraints-bootstrap";

function IDandProof({
    governmentIdImageURL,
    setGovernmentIdImageURL,
    billingImageURL,
    setBillingImageURL,
    IDpreview,
    setIDPreview,
    POBpreview,
    setPOBPreview,
    form
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
                <Input
                    className="form-control"
                    type="file"
                    id="formID"
                    name="formID"
                    accept="image/*"
                    onChange={async (e) => {
                        setIDPreview(URL.createObjectURL(e.target.files[0]));
                        setGovernmentIdImageURL(e.target.files[0]);
                        await form.current.validateFields(e.target);
                    }}
                    required
                />
                <FieldFeedbacks for="formID">
                <FieldFeedback when="*" />
                <FieldFeedback when="valid">Looks good!</FieldFeedback>
                </FieldFeedbacks>
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
                <Input
                    className="form-control"
                    type="file"
                    id="formBilling"
                    name="formBilling"
                    accept="image/*"
                    onChange={async (e) => {
                        setPOBPreview(URL.createObjectURL(e.target.files[0]));
                        setBillingImageURL(e.target.files[0]);
                        await form.current.validateFields(e.target);
                    }}
                    required
                />
                <FieldFeedbacks for="formBilling">
                <FieldFeedback when="*" />
                <FieldFeedback when="valid">Looks good!</FieldFeedback>
                </FieldFeedbacks>
            </div>
        </div>
    );
}

export default IDandProof;
