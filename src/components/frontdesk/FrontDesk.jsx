//module imports
import { Tools, Receipt, Pen } from "react-bootstrap-icons";
import { Switch, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// component imports
import Home from "./Home.jsx";
import Sidebar from "../SideBar.jsx";
import Header from "../Header.jsx";

// frontdesk specific imports
import Applications from "./Applications.jsx";
import Inquiries from "./Inquiries.jsx";

function FrontDesk() {
    const [header, setHeader] = useState("");

    const location = useLocation().pathname;

    useEffect(() => {
        if (location.includes("applications")) setHeader("Applications List");
        if (location.includes("inquiries")) setHeader("Inquiries List");
        if (location.includes("accounts")) setHeader("Accounts");
    }, [location]);

    const navItems = [
        {
            icon: <Receipt />,
            title: "APPLICATIONS",
            path: "/frontdesk/applications",
            count: 3,
        },
        {
            icon: <Tools />,
            title: "INQUIRIES",
            path: "/frontdesk/inquiries",
            count: 3,
        },
        {
            icon: <Pen />,
            title: "ACCOUNTS",
            path: "/frontdesk/accounts",
            count: 1,
        },
    ];

    return (
        <Switch>
            <Route exact path="/portal/frontdesk">
                <Home />
            </Route>
            <Route path="/portal/frontdesk/*">
                <div className="d-flex">
                    <Sidebar
                        title="FRONT DESK MODULE"
                        name="front"
                        path="frontdesk"
                        navItems={navItems}
                    />
                    <div className="container-fluid px-3">
                        <Header
                            title={header}
                            user="Frontdesk123"
                            name="front"
                        />
                        <Switch>
                            <Route path="/portal/frontdesk/applications">
                                <Applications />
                            </Route>
                            <Route path="/portal/frontdesk/inquiries">
                                <Inquiries />
                            </Route>
                            <Route path="/portal/frontdesk/accounts">
                                <h1>Hi accounts</h1>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Route>
        </Switch>
    );
}

export default FrontDesk;
