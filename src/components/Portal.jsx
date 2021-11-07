import { useState, useContext } from "react";
import { Switch, Route } from "react-router-dom";

import logo from "../assets/Images/logo.png";

import Card from "./Card";

import Administrator from "./administrator/Administrator";
import Cashier from "./cashier/Cashier";
import CEO from "./ceo/CEO";
import FrontDesk from "./frontdesk/FrontDesk";
import JobOrder from "./joborder/JobOrder";
import Technician from "./technician/Technician";
import PrivateRoute from "./PrivateRoute";
import { AuthContext } from "../auth/Auth";

import admin from "../assets/Icons/exe.svg";
import cashier from "../assets/Icons/xls.svg";
import ceo from "../assets/Icons/ppt.svg";
import front from "../assets/Icons/gif.svg";
import jo from "../assets/Icons/doc.svg";
import tech from "../assets/Icons/bat.svg";

function Portal({ history }) {
    const { isLoading, login } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (username && password)
            login(username, password, (role) => redirect(role));
        else alert("Please enter username and password");
    };

    function redirect(role) {
        if (role === "SUPERADMIN") return setShow(true);
        if (role === "ADMIN") return history.push("/portal/admin");
        if (role === "CASHIER") return history.push("/portal/cashier");
        if (role === "CEO") return history.push("/portal/ceo");
        if (role === "FRONT DESK") return history.push("/portal/frontdesk");
        if (role === "JO PERSONNEL") return history.push("/portal/joborder");
        if (role === "TECHNICIAN") return history.push("/portal/tech");
    }

    const cards = [
        { title: "ADMIN", path: "admin", name: "admin", icon: admin },
        { title: "CASHIER", path: "cashier", name: "cashier", icon: cashier },
        { title: "CEO", path: "ceo", name: "ceo", icon: ceo },
        {
            title: "FRONT DESK",
            path: "frontdesk",
            name: "front",
            icon: front,
        },
        { title: "JO PERSONNEL", path: "joborder", name: "jo", icon: jo },
        { title: "TECHNICIAN", path: "tech", name: "tech", icon: tech },
    ];

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
                                {show ? (
                                    cards.map(
                                        (
                                            { title, path, name, icon },
                                            index
                                        ) => {
                                            return (
                                                <Card
                                                    title={title}
                                                    path={path}
                                                    name={name}
                                                    key={index}
                                                    setShow={setShow}
                                                    icon={icon}
                                                />
                                            );
                                        }
                                    )
                                ) : (
                                    <>
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
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                onKeyPress={(
                                                                    e
                                                                ) => {
                                                                    if (
                                                                        e.key ===
                                                                        "Enter"
                                                                    )
                                                                        handleLogin();
                                                                }}
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
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                onKeyPress={(
                                                                    e
                                                                ) => {
                                                                    if (
                                                                        e.key ===
                                                                        "Enter"
                                                                    )
                                                                        handleLogin();
                                                                }}
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
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Route>
            <Route path="/portal/*">
                <Switch>
                    <PrivateRoute path="/portal/cashier" comp={Cashier} />
                    <PrivateRoute path="/portal/ceo" comp={CEO} />
                    <PrivateRoute path="/portal/frontdesk" comp={FrontDesk} />
                    <PrivateRoute path="/portal/joborder" comp={JobOrder} />
                    <PrivateRoute path="/portal/admin" comp={Administrator} />
                    <PrivateRoute path="/portal/tech" comp={Technician} />
                </Switch>
            </Route>
        </Switch>
    );
}

export default Portal;
