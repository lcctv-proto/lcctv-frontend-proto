//module imports
import { Wallet2, CardChecklist } from "react-bootstrap-icons";
import { Switch, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// component imports
import Home from "./Home.jsx";
import Sidebar from "../SideBar.jsx";
import Header from "../Header.jsx";

function Cashier() {
    const [header, setHeader] = useState("");

    const location = useLocation().pathname;

    useEffect(() => {
        if (location.includes("accounts")) setHeader("Accounts");
        if (location.includes("payments")) setHeader("Payments List");
    }, [location]);

    const navItems = [
        {
            icon: <Wallet2 />,
            title: "ACCOUNTS PAYMENT",
            path: "/cashier/accounts",
        },
        {
            icon: <CardChecklist />,
            title: "PAYMENT LIST",
            path: "/cashier/payments",
        },
    ];

    return (
        <Switch>
            <Route exact path="/portal/cashier">
                <Home />
            </Route>
            <Route path="/portal/cashier/*">
                <div className="d-flex">
                    <Sidebar
                        title="CASHIER MODULE"
                        name="cashier"
                        path="cashier"
                        navItems={navItems}
                    />
                    <div className="container-fluid p-3 pt-0">
                        <Header
                            title={header}
                            user="Cashier123"
                            name="cashier"
                        />
                        <Switch>
                            <Route path="/portal/cashier/accounts">
                                <h1>Hi accounts</h1>
                            </Route>
                            <Route path="/portal/cashier/payments">
                                <h1>Hi payments</h1>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Route>
        </Switch>
    );
}

export default Cashier;
