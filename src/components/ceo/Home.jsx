import { People, Clipboard } from "react-bootstrap-icons";
import Button from "../Button";

function Home() {
    return (
        <div className="container-fluid p-5 mt-5">
            <div className="row mt-3">
                <div className="col">
                    <div className="row my-4 pt-4 px-4">
                        <Button
                            icon={
                                <People
                                    color="white"
                                    size="8rem"
                                    className="mb-2"
                                />
                            }
                            title="EMPLOYEES"
                            name="ceo"
                            path="employees"
                        />
                        <Button
                            icon={
                                <Clipboard
                                    color="white"
                                    size="8rem"
                                    className="mb-2"
                                />
                            }
                            title="REPORTS"
                            name="ceo"
                            path="reports"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
