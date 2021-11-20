//module imports
import {
    PieChart,
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
import Home from "./Home";
import Sidebar from "../SideBar";
import Header from "../Header";

// admin specific imports
import Teams from "./Teams";
import Employees from "./Employees";
import Applications from "./Applications";
import Channels from "./Channels";
import Reports from "./Reports";
import Plans from "./Plans";
import Equipments from "./Equipments";

function Administrator() {
    const [header, setHeader] = useState("");

    const location = useLocation().pathname;

    useEffect(() => {
        if (location.includes("teams")) setHeader("TEAMS");
        if (location.includes("employees")) setHeader("EMPLOYEES");
        if (location.includes("applications")) setHeader("APPLICATIONS");
        if (location.includes("channels")) setHeader("CHANNELS");
        if (location.includes("reports")) setHeader("REPORTS");
        if (location.includes("equipments")) setHeader("EQUIPMENTS");
        if (location.includes("plans")) setHeader("PLANS");
        // if (location.includes("notes")) setHeader("MY NOTES");
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
            icon: <PieChart />,
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
        // {
        //     icon: <Journals />,
        //     title: "MY NOTES",
        //     path: "/admin/notes",
        // },
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
                    <div className="container-fluid px-3">
                        <Header title={header} name="admin" />
                        <Switch>
                            <Route path="/portal/admin/teams">
                                <Teams />
                            </Route>
                            <Route path="/portal/admin/employees">
                                <Employees />
                            </Route>
                            <Route path="/portal/admin/applications">
                                <Applications />
                            </Route>
                            <Route path="/portal/admin/channels">
                                <Channels />
                            </Route>
                            <Route path="/portal/admin/reports">
                                <Reports />
                            </Route>
                            <Route path="/portal/admin/equipments">
                                <Equipments />
                            </Route>
                            <Route path="/portal/admin/plans">
                                <Plans />
                            </Route>
                            {/* <Route path="/portal/admin/notes">
                                <Notes />
                            </Route> */}
                        </Switch>
                    </div>
                </div>
            </Route>
        </Switch>
    );
}

export default Administrator;
