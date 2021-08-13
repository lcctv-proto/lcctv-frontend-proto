//module imports
import { Wallet2, CardChecklist } from "react-bootstrap-icons";
import { Switch, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// component imports
import Home from "./Home";
import Sidebar from "../SideBar";
import Header from "../Header";

// cashier specific imports
import Accounts from "./Accounts";
import Payments from "./Payments";

function Cashier() {
    const [header, setHeader] = useState("");

    const location = useLocation().pathname;

    useEffect(() => {
        if (location.includes("accounts")) setHeader("ACCOUNTS");
        if (location.includes("payments")) setHeader("PAYMENTS");
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
                    <div className="container-fluid px-3">
                        <Header
                            title={header}
                            user="Cashier123"
                            name="cashier"
                        />
                        <Switch>
                            <Route path="/portal/cashier/accounts">
                                <Accounts />
                            </Route>
                            <Route path="/portal/cashier/payments">
                                <Payments />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Route>
        </Switch>
    );
}

export default Cashier;
