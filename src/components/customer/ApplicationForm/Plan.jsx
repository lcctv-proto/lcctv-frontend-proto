function Plan({ _id, placeholder, packageID }) {
    return (
        <>
            <input
                type="radio"
                className="btn-check"
                name="set-package-option"
                id={_id}
                checked={_id === packageID}
                autoComplete="off"
            />
            <label
                className="btn btn-navy shadow-none mt-2 mt-md-0"
                htmlFor={_id}
            >
                {placeholder}
            </label>
        </>
    );
}

export default Plan;
