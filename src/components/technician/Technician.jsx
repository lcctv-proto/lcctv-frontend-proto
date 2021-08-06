//module imports
import {
    People,
    CalendarWeek,
    BrightnessAltHigh,
    Geo,
} from "react-bootstrap-icons";
import { Switch, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// component imports
import Home from "./Home.jsx";
import Sidebar from "../SideBar.jsx";
import Header from "../Header.jsx";

// component-specific imports
import Dispatch from "./Dispatch.jsx";

function Technician() {
    const [header, setHeader] = useState("");

    const location = useLocation().pathname;

    useEffect(() => {
        if (location.includes("dispatch")) setHeader("Dispatch | List View");
        if (location.includes("calendar"))
            setHeader("Dispatch | Calendar View");
        if (location.includes("daily")) setHeader("Dispatch | Daily View");
        if (location.includes("area")) setHeader("Area Assigned");
    }, [location]);

    const navItems = [
        {
            icon: <People />,
            title: "DISPATCH LIST",
            path: "/tech/dispatch",
        },
        {
            icon: <CalendarWeek />,
            title: "CALENDAR",
            path: "/tech/calendar",
        },
        {
            icon: <BrightnessAltHigh />,
            title: "DAILY VIEW",
            path: "/tech/daily",
        },
        {
            icon: <Geo />,
            title: "AREA ASSIGNED",
            path: "/tech/area",
        },
    ];

    return (
        <Switch>
            <Route exact path="/portal/tech">
                <Home />
            </Route>
            <Route path="/portal/tech/*">
                <div className="d-flex">
                    <Sidebar
                        title="TECHNICIAN MODULE"
                        name="tech"
                        path="tech"
                        navItems={navItems}
                    />
                    <div className="container-fluid px-3">
                        <Header
                            title={header}
                            user="Technician123"
                            name="tech"
                        />
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
            </Route>
        </Switch>
    );
}

export default Technician;
