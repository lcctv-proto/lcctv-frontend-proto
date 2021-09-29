import Alert from "react-bootstrap/Alert";

function AccountNotFoundDismissible({ show, setShow, title }) {
    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>{title.toUpperCase()} not found!</Alert.Heading>
                <h5>Please check your search terms and try again.</h5>
            </Alert>
        );
    } else {
        return null;
    }
}

export default AccountNotFoundDismissible;
