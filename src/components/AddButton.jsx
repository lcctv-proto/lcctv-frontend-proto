import { PlusCircle } from "react-bootstrap-icons";

function AddButton({ name, click }) {
    return (
        <div className="col-auto">
            <button
                type="button"
                className="btn btn-navy fw-bold d-flex align-items-center"
                onClick={(e) => click(e)}
            >
                <PlusCircle className="me-2" /> NEW {name}
            </button>
        </div>
    );
}

export default AddButton;
