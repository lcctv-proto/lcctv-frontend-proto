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
import Home from "./Home.jsx";
import Sidebar from "../SideBar.jsx";
import Header from "../Header.jsx";

function JobOrder() {
    const [header, setHeader] = useState("");

    const location = useLocation().pathname;

    useEffect(() => {
        if (location.includes("accounts")) setHeader("New Accounts");
        if (location.includes("activation")) setHeader("Account Activation");
        if (location.includes("maintenance")) setHeader("Maintenance");
        if (location.includes("closing")) setHeader("Job Order Closing");
        if (location.includes("calendar")) setHeader("Calendar View");
        if (location.includes("view")) setHeader("View Job Orders");
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
                    <div className="container-fluid p-3 pt-0">
                        <Header title={header} user="JO123" name="jo" />
                        <Switch>
                            <Route path="/portal/joborder/accounts">
                                <h1>Hi accounts</h1>
                            </Route>
                            <Route path="/portal/joborder/activation">
                                <h1>Hi activation</h1>
                            </Route>
                            <Route path="/portal/joborder/maintenance">
                                <h1>Hi maintenance</h1>
                            </Route>
                            <Route path="/portal/joborder/closing">
                                <h1>Hi closing</h1>
                            </Route>
                            <Route path="/portal/joborder/calendar">
                                <h1>Hi calendar</h1>
                            </Route>
                            <Route path="/portal/joborder/view">
                                <h1>Hi view</h1>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Route>
        </Switch>
    );
}

export default JobOrder;
