import {
    Pen,
    LightningCharge,
    Tools,
    Check2Circle,
    CalendarWeek,
    JournalAlbum,
} from "react-bootstrap-icons";

import Button from "../Button";
import NavbarPortal from "../NavbarPortal";

function Home() {
    return (
        <>
            <NavbarPortal title="JOB ORDER" name="jo" user="JO123" />
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col">
                        <div className="row my-4 pt-4 px-4 justify-content-center">
                            <Button
                                icon={
                                    <Pen
                                        color="white"
                                        size="8rem"
                                        className="mb-2"
                                    />
                                }
                                title="NEW ACCOUNTS"
                                name="jo"
                                path="accounts"
                            />
                            <Button
                                icon={
                                    <LightningCharge
                                        color="white"
                                        size="8rem"
                                        className="mb-2"
                                    />
                                }
                                title="ACTIVATION"
                                name="jo"
                                path="activation"
                            />
                            <Button
                                icon={
                                    <Tools
                                        color="white"
                                        size="8rem"
                                        className="mb-2"
                                    />
                                }
                                title="MAINTENANCE"
                                name="jo"
                                path="maintenance"
                            />
                        </div>
                        <div className="row my-4 pt-4 px-4  justify-content-center">
                            <Button
                                icon={
                                    <Check2Circle
                                        color="white"
                                        size="8rem"
                                        className="mb-2"
                                    />
                                }
                                title="CLOSING"
                                name="jo"
                                path="closing"
                            />
                            <Button
                                icon={
                                    <CalendarWeek
                                        color="white"
                                        size="8rem"
                                        className="mb-2"
                                    />
                                }
                                title="CALENDAR"
                                name="jo"
                                path="calendar"
                            />
                            <Button
                                icon={
                                    <JournalAlbum
                                        color="white"
                                        size="8rem"
                                        className="mb-2"
                                    />
                                }
                                title="VIEW JOs"
                                name="jo"
                                path="view"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
