//module imports
import { Tools, Receipt, Pen } from "react-bootstrap-icons";
import { Switch, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// component imports
import Home from "./Home";
import Sidebar from "../SideBar";
import Header from "../Header";

// frontdesk specific imports
import Applications from "./Applications";
import Inquiries from "./Inquiries";
import Accounts from "./Accounts";

function FrontDesk() {
    const [header, setHeader] = useState("");

    const location = useLocation().pathname;

    useEffect(() => {
        if (location.includes("applications")) setHeader("APPLICATIONS");
        if (location.includes("inquiries")) setHeader("INQUIRIES");
        if (location.includes("accounts")) setHeader("ACCOUNTS");
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
                                <Accounts />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Route>
        </Switch>
    );
}

export default FrontDesk;
