import { Archive, Tools, Pen } from "react-bootstrap-icons";
import Button from "../Button";
import NavbarPortal from "../NavbarPortal";

function Home() {
    return (
        <>
            <NavbarPortal title="FRONT DESK" name="front" user="FrontDesk123" />
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col">
                        <div className="row my-4 pt-4 px-4 justify-content-center">
                            <Button
                                icon={
                                    <Archive
                                        color="white"
                                        size="8rem"
                                        className="mb-2"
                                    />
                                }
                                title="APPLICATIONS"
                                name="front"
                                path="applications"
                            />
                            <Button
                                icon={
                                    <Tools
                                        color="white"
                                        size="8rem"
                                        className="mb-2"
                                    />
                                }
                                title="SUPPORT"
                                name="front"
                                path="inquiries"
                            />
                            <Button
                                icon={
                                    <Pen
                                        color="white"
                                        size="8rem"
                                        className="mb-2"
                                    />
                                }
                                title="ACCOUNTS"
                                name="front"
                                path="accounts"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
