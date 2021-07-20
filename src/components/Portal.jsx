import { useEffect } from "react";
import Card from "./Card.jsx";
import logo from "../assets/Images/logo.png";
import { Switch, Route } from "react-router-dom";

import AdminHome from "./administrator/Home.jsx";
import CashierHome from "./cashier/Home.jsx";
import CeoHome from "./ceo/Home.jsx";
import FrontHome from "./frontdesk/Home.jsx";
import JOHome from "./jopersonnel/Home.jsx";

import Technician from "./technician/Technician.jsx";
import Administrator from "./administrator/Administrator.jsx";

function Portal() {
    return (
        <Switch>
            <Route exact path="/portal">
                <div className="container-fluid text-white p-5 mt-5">
                    <div className="row mt-5">
                        <div className="col-lg-6 col-sm-12 mx-auto text-center border-navy-1">
                            <img
                                src={logo}
                                className="my-3"
                                width="150"
                                alt="Icon"
                            />
                            <h2 className="text-navy ff-logo">
                                Lake Community Cable TV
                            </h2>
                            <p className="text-navy ms-3 fw-light fs-4">
                                Online Management System
                            </p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <Card title="ADMIN" path="admin" name="admin" />
                        <Card title="CASHIER" path="cashier" name="cashier" />
                        <Card title="CEO" path="ceo" name="ceo" />
                        <Card
                            title="FRONT DESK"
                            path="frontdesk"
                            name="front"
                        />
                        <Card title="JO PERSONNEL" path="joborder" name="jo" />
                        <Card title="TECHNICIAN" path="tech" name="tech" />
                    </div>
                </div>
            </Route>
            <Route path="/portal/*">
                <Switch>
                    <Route path="/portal/admin" component={Administrator} />
                    <Route path="/portal/cashier" component={CashierHome} />
                    <Route path="/portal/ceo" component={CeoHome} />
                    <Route path="/portal/frontdesk" component={FrontHome} />
                    <Route path="/portal/joborder" component={JOHome} />
                    <Route path="/portal/tech" component={Technician} />
                </Switch>
            </Route>
        </Switch>
    );
}

export default Portal;
