import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

function PaymentsButton({ icon, title }) {
    return (
        <Col xs={12} lg={4} className="p-1">
            <Button
                size="lg"
                className="btn-jumbo w-100"
                onClick={() => {
                    console.log(title);
                }}
            >
                {icon}
                <p className="fs-5 pt-2 ff-jumbo border-top-cashier">{title}</p>
            </Button>
        </Col>
    );
}

export default PaymentsButton;
