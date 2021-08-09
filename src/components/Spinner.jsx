function Spinner({ name }) {
    return (
        <div className="text-center mt-5 pt-5">
            <div
                className={`spinner spinner-border text-${name} mx-2`}
                role="status"
            >
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

export default Spinner;
