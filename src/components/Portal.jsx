import { useState, useContext } from "react";
import { Switch, Route } from "react-router-dom";

import logo from "../assets/Images/logo.png";

// import Card from "./Card";

import Administrator from "./administrator/Administrator";
import Cashier from "./cashier/Cashier";
import CEO from "./ceo/CEO";
import FrontDesk from "./frontdesk/FrontDesk";
import JobOrder from "./joborder/JobOrder";
import Technician from "./technician/Technician";
import PrivateRoute from "./PrivateRoute";
import { AuthContext } from "../auth/Auth";

function Portal({ history }) {
    const { isLoading, login } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        console.log("click");
        login(username, password, (role) => redirect(role));

        // await authService.login(username, password);
    };

    function redirect(role) {
        if (role === "SUPERADMIN") return history.push("/portal/admin");
        if (role === "ADMIN") return history.push("/portal/admin");
        if (role === "CASHIER") return history.push("/portal/cashier");
        if (role === "CEO") return history.push("/portal/ceo");
        if (role === "FRONT DESK") return history.push("/portal/frontdesk");
        if (role === "JO PERSONNEL") return history.push("/portal/joborder");
        if (role === "TECHNICIAN") return history.push("/portal/tech");
    }

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
                                <div className="col-9 col-md-6 col-xl-3">
                                    <div className="card border-0 shadow">
                                        <div className="card-header bg-navy text-light border-gold-2">
                                            <span className="fs-4 fw-bold">
                                                LCCTV-OMS
                                            </span>
                                            <span className="fs-5 border-start ps-3 ms-3">
                                                LOGIN MODULE
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
                                                        style={{
                                                            textTransform:
                                                                "none",
                                                        }}
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
                                                        style={{
                                                            textTransform:
                                                                "none",
                                                        }}
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
                                                disabled={isLoading}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleLogin();
                                                }}
                                            >
                                                {isLoading
                                                    ? "LOADING"
                                                    : "LOGIN"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* {cards.map(({ title, path, name }, index) => {
                                    return (
                                        <Card
                                            title={title}
                                            path={path}
                                            name={name}
                                            key={index}
                                        />
                                    );
                                })} */}
                            </div>
                        </div>
                    </div>
                </div>
            </Route>
            <Route path="/portal/*">
                <Switch>
                    <PrivateRoute path="/portal/admin" comp={Administrator} />
                    <Route path="/portal/cashier" comp={Cashier} />
                    <Route path="/portal/ceo" comp={CEO} />
                    <Route path="/portal/frontdesk" comp={FrontDesk} />
                    <Route path="/portal/joborder" comp={JobOrder} />
                    <PrivateRoute path="/portal/tech" comp={Technician} />
                </Switch>
            </Route>
        </Switch>
    );
}

export default Portal;
