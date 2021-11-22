//module imports
import {
    People,
    // CalendarWeek,
    // BrightnessAltHigh,
    Geo,
} from "react-bootstrap-icons";
import { Switch, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// component imports
import Home from "./Home";
import Sidebar from "../SideBar";
import Header from "../Header";

// technician specific imports
import Dispatch from "./Dispatch";
import Calendar from "./Calendar";
import Daily from "./Daily";
import Area from "./Area";

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
        // {
        //     icon: <CalendarWeek />,
        //     title: "CALENDAR",
        //     path: "/tech/calendar",
        // },
        // {
        //     icon: <BrightnessAltHigh />,
        //     title: "DAILY VIEW",
        //     path: "/tech/daily",
        // },
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
                                <Calendar />
                            </Route>
                            <Route path="/portal/tech/daily">
                                <Daily />
                            </Route>
                            <Route path="/portal/tech/area">
                                <Area />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Route>
        </Switch>
    );
}

export default Technician;
