import Spin from "react-bootstrap/Spinner";

function Spinner({ name, small }) {
    return (
        <div className={`text-center ${small ? "" : "mt-5 pt-5"}`}>
            <Spin animation="border" className={`spinner text-${name} mx-2`} />
        </div>
    );
}

export default Spinner;
