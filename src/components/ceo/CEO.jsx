//module imports
import { People, Clipboard } from "react-bootstrap-icons";
import { Switch, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// component imports
import Home from "./Home";
import Sidebar from "../SideBar";
import Header from "../Header";

// ceo specific imports
import Employees from "./Employees";
import Reports from "./Reports";

function CEO() {
    const [header, setHeader] = useState("");

    const location = useLocation().pathname;

    useEffect(() => {
        if (location.includes("employees")) setHeader("EMPLOYEES");
        if (location.includes("reports")) setHeader("REPORTS");
    }, [location]);

    const navItems = [
        {
            icon: <People />,
            title: "EMPLOYEES",
            path: "/ceo/employees",
        },
        {
            icon: <Clipboard />,
            title: "REPORTS",
            path: "/ceo/reports",
        },
    ];

    return (
        <Switch>
            <Route exact path="/portal/ceo">
                <Home />
            </Route>
            <Route path="/portal/ceo/*">
                <div className="d-flex">
                    <Sidebar
                        title="CEO MODULE"
                        name="ceo"
                        path="ceo"
                        navItems={navItems}
                    />
                    <div className="container-fluid px-3">
                        <Header title={header} user="CEO123" name="ceo" />
                        <Switch>
                            <Route path="/portal/ceo/employees">
                                <Employees />
                            </Route>
                            <Route path="/portal/ceo/reports">
                                <Reports />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Route>
        </Switch>
    );
}

export default CEO;
