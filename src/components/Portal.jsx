import { useEffect } from "react";
import Card from "./Card.jsx";
import logo from "../assets/Images/logo.png";

function Portal() {
    useEffect(() => {
        document.body.classList.add("bg-navy");

        return function cleanup() {
            document.body.classList.remove("bg-navy");
        };
    });

    return (
        <div className="container-fluid text-white p-5 mt-5">
            <div className="row mt-5">
                <div className="col-lg-3 col-sm-12 mx-auto text-center">
                    <img src={logo} width="150" alt="Icon" />
                    <h2 className="ff-logo">Lake Community Cable TV</h2>
                    <p className="ms-3 fw-light fs-4">
                        Online Management System
                    </p>
                </div>
            </div>
            <div className="row mt-5">
                <Card title="ADMIN" path="admin" name="admin" />
                <Card title="CASHIER" path="cashier" name="cashier" />
                <Card title="CEO" path="ceo" name="ceo" />
                <Card title="FRONT DESK" path="frontdesk" name="front" />
                <Card title="JO PERSONNEL" path="joborder" name="jo" />
                <Card title="TECHNICIAN" path="tech" name="tech" />
            </div>
        </div>
    );
}

export default Portal;
