import {
    People,
    CalendarWeek,
    BrightnessAltHigh,
    Geo,
} from "react-bootstrap-icons";
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
                            title="DISPATCH"
                            name="tech"
                            path="dispatch"
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
                            name="tech"
                            path="calendar"
                        />
                        <Button
                            icon={
                                <BrightnessAltHigh
                                    color="white"
                                    size="8rem"
                                    className="mb-2"
                                />
                            }
                            title="DAILY VIEW"
                            name="tech"
                            path="daily"
                        />
                        <Button
                            icon={
                                <Geo
                                    color="white"
                                    size="8rem"
                                    className="mb-2"
                                />
                            }
                            title="AREA ASSIGNED"
                            name="tech"
                            path="area"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
