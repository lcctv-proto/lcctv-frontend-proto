import { Link, useLocation } from "react-router-dom";

function NotFound() {
    const location = useLocation().pathname;
    const isCustomer = !location.includes("portal");

    if (isCustomer)
        return (
            <div className="container">
                <div className="row error">
                    <div className="col">
                        <h1 className="py-5">404 Error!</h1>

                        <p>
                            Hi, there's no pages for this route, don't worry you
                            can always head back to our{" "}
                            <Link to="/">homepage</Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    else return <></>;
}

export default NotFound;
