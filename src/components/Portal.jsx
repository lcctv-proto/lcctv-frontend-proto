import Card from "./Card";
import logo from "../assets/Images/logo.png";
import { Switch, Route } from "react-router-dom";

import Administrator from "./administrator/Administrator";
import Cashier from "./cashier/Cashier";
import CEO from "./ceo/CEO";
import FrontDesk from "./frontdesk/FrontDesk";
import JobOrder from "./joborder/JobOrder";
import Technician from "./technician/Technician";

function Portal() {
    return (
        <Switch>
            <Route exact path="/portal">
                <div className="container-fluid text-white">
                    <div className="row">
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
                    <div className="row mt-5 pt-5 p-0 bg-login">
                        <div className="col pt-5 mb-5">
                            <div className="row pb-5 mb-5 justify-content-center">
                                <Card title="ADMIN" path="admin" name="admin" />
                                <Card
                                    title="CASHIER"
                                    path="cashier"
                                    name="cashier"
                                />
                                <Card title="CEO" path="ceo" name="ceo" />
                                <Card
                                    title="FRONT DESK"
                                    path="frontdesk"
                                    name="front"
                                />
                                <Card
                                    title="JO PERSONNEL"
                                    path="joborder"
                                    name="jo"
                                />
                                <Card
                                    title="TECHNICIAN"
                                    path="tech"
                                    name="tech"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Route>
            <Route path="/portal/*">
                <Switch>
                    <Route path="/portal/admin" component={Administrator} />
                    <Route path="/portal/cashier" component={Cashier} />
                    <Route path="/portal/ceo" component={CEO} />
                    <Route path="/portal/frontdesk" component={FrontDesk} />
                    <Route path="/portal/joborder" component={JobOrder} />
                    <Route path="/portal/tech" component={Technician} />
                </Switch>
            </Route>
        </Switch>
    );
}

export default Portal;
