import { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import authService from "../auth/auth.service";
import logo from "../assets/Images/logo.png";

// import Card from "./Card";

import Administrator from "./administrator/Administrator";
import Cashier from "./cashier/Cashier";
import CEO from "./ceo/CEO";
import FrontDesk from "./frontdesk/FrontDesk";
import JobOrder from "./joborder/JobOrder";
import Technician from "./technician/Technician";

function Portal() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userRole, setUserRole] = useState("");
    const history = useHistory();

    const login = async () => {
        await authService.login(username, password);
        getUserRole();
    };

    const getUserRole = async () => {
        setUserRole(await authService.getCurrentUserRole());
    };

    useEffect(() => {
        getUserRole();

        switch (userRole) {
            case "SUPERADMIN":
                return history.push("/portal/admin");
            case "ADMIN":
                return history.push("/portal/admin");
            case "CASHIER":
                return history.push("/portal/cashier");
            case "CEO":
                return history.push("/portal/ceo");
            case "FRONT DESK":
                return history.push("/portal/frontdesk");
            case "JO PERSONNEL":
                return history.push("/portal/joborder");
            case "TECHNICIAN":
                return history.push("/portal/tech");
            default:
                console.log("def");
        }
    }, [userRole, history]);

    // const cards = [
    //     { title: "ADMIN", path: "admin", name: "admin" },
    //     { title: "CASHIER", path: "cashier", name: "cashier" },
    //     { title: "CEO", path: "ceo", name: "ceo" },
    //     { title: "FRONT DESK", path: "frontdesk", name: "front" },
    //     { title: "JO PERSONNEL", path: "joborder", name: "jo" },
    //     { title: "TECHNICIAN", path: "tech", name: "tech" },
    // ];

    return (
        <Switch>
            <Route exact path="/portal">
                <div className="container-fluid">
                    <div className="row text-navy">
                        <div className="col-lg-6 col-sm-12 mx-auto text-center border-navy-1">
                            <img
                                src={logo}
                                className="my-3"
                                width="150"
                                alt="Icon"
                            />
                            <h2 className="ff-logo">Lake Community Cable TV</h2>
                            <p className="ms-3 fw-light fs-4">
                                Online Management System
                            </p>
                        </div>
                    </div>
                    <div className="row mt-5 pt-5 p-0 bg-login">
                        <div className="col pt-5 mb-5">
                            <div className="row pb-5 mb-5 justify-content-center">
                                <div className="col-3">
                                    <div className="card border-0 shadow">
                                        <div className="card-header bg-navy text-light border-gold-2">
                                            <span className="fs-4 fw-bold">
                                                LCCTV-OMS
                                            </span>
                                            <span className="fs-5 border-start ps-3 ms-3">
                                                LOGIN
                                            </span>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <label
                                                        htmlFor="username"
                                                        className="form-label"
                                                    >
                                                        USERNAME:
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        id="username"
                                                        value={username}
                                                        onChange={(e) =>
                                                            setUsername(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col">
                                                    <label
                                                        htmlFor="password"
                                                        className="form-label"
                                                    >
                                                        PASSWORD:
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="password"
                                                        id="password"
                                                        value={password}
                                                        onChange={(e) =>
                                                            setPassword(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <button
                                                className="d-flex ms-auto btn btn-gold fw-bold"
                                                onClick={login}
                                            >
                                                LOGIN
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* ) : (
                                    cards.map(
                                        ({ title, path, name }, index) => {
                                            return (
                                                <Card
                                                    title={title}
                                                    path={path}
                                                    name={name}
                                                    key={index}
                                                />
                                            );
                                        }
                                    )
                                )} */}
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
