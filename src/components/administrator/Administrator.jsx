//module imports
import {
    ClipboardCheck,
    Journals,
    Nut,
    People,
    Person,
    Receipt,
    Grid3x3Gap,
    Tv,
} from "react-bootstrap-icons";
import { Switch, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// component imports
import Home from "./Home.jsx";
import Sidebar from "../SideBar.jsx";
import Header from "../Header.jsx";

function Administrator() {
    const [header, setHeader] = useState("");

    const location = useLocation().pathname;

    useEffect(() => {
        if (location.includes("teams")) setHeader("Teams");
        if (location.includes("employees")) setHeader("Employees");
        if (location.includes("applications")) setHeader("Applications");
        if (location.includes("channels")) setHeader("Channels");
        if (location.includes("reports")) setHeader("Reports");
        if (location.includes("equipments")) setHeader("Equipments");
        if (location.includes("plans")) setHeader("Plans");
        if (location.includes("notes")) setHeader("My Notes");
    }, [location]);

    const navItems = [
        {
            icon: <People />,
            title: "TEAMS",
            path: "/admin/teams",
        },
        {
            icon: <Person />,
            title: "EMPLOYEES",
            path: "/admin/employees",
        },
        {
            icon: <Receipt />,
            title: "APPLICATIONS",
            path: "/admin/applications",
        },
        {
            icon: <Tv />,
            title: "CHANNELS",
            path: "/admin/channels",
        },
        {
            icon: <ClipboardCheck />,
            title: "REPORTS",
            path: "/admin/reports",
        },
        {
            icon: <Nut />,
            title: "EQUIPMENTS",
            path: "/admin/equipments",
        },
        {
            icon: <Grid3x3Gap />,
            title: "PLANS",
            path: "/admin/plans",
        },
        {
            icon: <Journals />,
            title: "MY NOTES",
            path: "/admin/notes",
        },
    ];

    return (
        <Switch>
            <Route exact path="/portal/admin">
                <Home />
            </Route>
            <Route path="/portal/admin/*">
                <div className="d-flex">
                    <Sidebar
                        title="ADMIN MODULE"
                        name="admin"
                        path="admin"
                        navItems={navItems}
                    />
                    <div className="container-fluid p-3">
                        <Header title={header} user="Admin123" name="admin" />
                        <Switch>
                            <Route path="/portal/admin/teams">
                                <h1>Hi teams</h1>
                            </Route>
                            <Route path="/portal/admin/employees">
                                <h1>Hi employees</h1>
                            </Route>
                            <Route path="/portal/admin/applications">
                                <h1>Hi applications</h1>
                            </Route>
                            <Route path="/portal/admin/channels">
                                <h1>Hi channels</h1>
                            </Route>
                            <Route path="/portal/admin/reports">
                                <h1>Hi reports</h1>
                            </Route>
                            <Route path="/portal/admin/equipments">
                                <h1>Hi equipments</h1>
                            </Route>
                            <Route path="/portal/admin/plans">
                                <h1>Hi plans</h1>
                            </Route>
                            <Route path="/portal/admin/notes">
                                <h1>Hi notes</h1>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Route>
        </Switch>
    );
}

export default Administrator;
