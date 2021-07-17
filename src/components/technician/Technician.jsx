import Sidebar from "../SideBar.jsx";
import Header from "../Header.jsx";
import {
    People,
    CalendarWeek,
    BrightnessAltHigh,
    Geo,
} from "react-bootstrap-icons";
import { Switch, Route } from "react-router-dom";
import Dispatch from "./Dispatch.jsx";

function Technician() {
    const navItems = [
        {
            icon: <People />,
            title: "DISPATCH",
            path: "dispatch",
            isActive: true,
        },
        {
            icon: <CalendarWeek />,
            title: "CALENDAR",
            path: "calendar",
            isActive: false,
        },
        {
            icon: <BrightnessAltHigh />,
            title: "DAILY VIEW",
            path: "daily",
            isActive: false,
        },
        {
            icon: <Geo />,
            title: "AREA ASSIGNED",
            path: "area",
            isActive: false,
        },
    ];

    return (
        <div className="d-flex">
            <Sidebar title="JOB ORDER MODULE" name="tech" navItems={navItems} />
            <div className="container-fluid p-3">
                <Header title="Dispatch" user="Technician123" name="tech" />
                <Switch>
                    <Route path="/portal/tech/dispatch">
                        <Dispatch />
                    </Route>
                    <Route path="/portal/tech/calendar">
                        <h1>Hi calendar</h1>
                    </Route>
                    <Route path="/portal/tech/daily">
                        <h1>Hi daily</h1>
                    </Route>
                    <Route path="/portal/tech/area">
                        <h1>Hi area</h1>
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default Technician;
