import { ArrowRepeat } from "react-bootstrap-icons";

function RefreshButton({ name, click }) {
    return (
        <div className="col-auto">
            <button
                className="btn btn-navy fw-bold d-flex align-items-center"
                onClick={click}
            >
                <ArrowRepeat className="me-2" /> REFRESH {name}
            </button>
        </div>
    );
}

export default RefreshButton;
