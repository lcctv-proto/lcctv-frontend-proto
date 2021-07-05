import { Wallet2 } from "react-bootstrap-icons";
import Button from "../Button";

function Home() {
    return (
        <div className="container-fluid p-5 mt-5">
            <div className="row mt-3">
                <div className="col">
                    <div className="row my-4 pt-4 px-4">
                        <Button
                            icon={
                                <Wallet2
                                    color="white"
                                    size="8rem"
                                    className="mb-2"
                                />
                            }
                            name="ACCOUNT PAYMENT"
                            path="payment"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
