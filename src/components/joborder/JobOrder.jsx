//module imports
import {
    Pen,
    LightningCharge,
    Tools,
    Check2Circle,
    CalendarWeek,
    JournalAlbum,
} from "react-bootstrap-icons";
import { Switch, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// component imports
import Home from "./Home";
import Sidebar from "../SideBar";
import Header from "../Header";

// job order imports
import Accounts from "./Accounts";
import Activation from "./Activation";
import Maintenance from "./Maintenance";
import Closing from "./Closing";
import Calendar from "./Calendar";
import View from "./View";

function JobOrder() {
    const [header, setHeader] = useState("");

    const location = useLocation().pathname;

    useEffect(() => {
        if (location.includes("accounts")) setHeader("NEW ACCOUNTS");
        if (location.includes("activation")) setHeader("ACCOUNT ACTIVATION");
        if (location.includes("maintenance")) setHeader("MAINTENANCE");
        if (location.includes("closing")) setHeader("JOB ORDER CLOSING");
        if (location.includes("calendar")) setHeader("CALENDAR");
        if (location.includes("view")) setHeader("VIEW JOB ORDERS");
    }, [location]);

    const navItems = [
        {
            icon: <Pen />,
            title: "NEW ACCOUNTS",
            path: "/joborder/accounts",
            count: 9,
        },
        {
            icon: <LightningCharge />,
            title: "ACTIVATION",
            path: "/joborder/activation",
            count: 15,
        },
        {
            icon: <Tools />,
            title: "MAINTENANCE",
            path: "/joborder/maintenance",
            count: 23,
        },
        {
            icon: <Check2Circle />,
            title: "CLOSING",
            path: "/joborder/closing",
            count: 5,
        },
        {
            icon: <CalendarWeek />,
            title: "CALENDAR",
            path: "/joborder/calendar",
        },
        {
            icon: <JournalAlbum />,
            title: "VIEW JOB ORDERS",
            path: "/joborder/view",
        },
    ];

    return (
        <Switch>
            <Route exact path="/portal/joborder">
                <Home />
            </Route>
            <Route path="/portal/joborder/*">
                <div className="d-flex">
                    <Sidebar
                        title="JOB ORDERS MODULE"
                        name="jo"
                        path="joborder"
                        navItems={navItems}
                    />
                    <div className="container-fluid px-3">
                        <Header title={header} user="JO123" name="jo" />
                        <Switch>
                            <Route path="/portal/joborder/accounts">
                                <Accounts />
                            </Route>
                            <Route path="/portal/joborder/activation">
                                <Activation />
                            </Route>
                            <Route path="/portal/joborder/maintenance">
                                <Maintenance />
                            </Route>
                            <Route path="/portal/joborder/closing">
                                <Closing />
                            </Route>
                            <Route path="/portal/joborder/calendar">
                                <Calendar />
                            </Route>
                            <Route path="/portal/joborder/view">
                                <View />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Route>
        </Switch>
    );
}

export default JobOrder;
