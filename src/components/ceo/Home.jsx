import { People, Clipboard } from "react-bootstrap-icons";
import Button from "../Button";
import NavbarPortal from "../NavbarPortal";

function Home() {
    return (
        <>
            <NavbarPortal title="CEO" name="ceo" user="CEO123" />
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col">
                        <div className="row my-4 pt-4 px-4 justify-content-center">
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
                                path="/ceo/employees"
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
                                path="/ceo/reports"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
