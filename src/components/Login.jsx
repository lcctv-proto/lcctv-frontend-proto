import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Images/logo.png";

function Login({ title, path, name }) {
    useEffect(() => {
        document.body.classList.add("bg-navy");

        return function cleanup() {
            document.body.classList.remove("bg-navy");
        };
    });

    return (
        <div className="container mt-5 pt-5">
            <div className="row">
                <div className="col-lg-12 mx-auto text-light text-center">
                    <img src={logo} width="150" alt="Icon" />

                    <h1 className="ff-logo">Lake Community Cable TV</h1>
                    <p className={`fs-4 fw-light pb-3 mb-3 border-${name}`}>
                        Online Management System
                    </p>
                </div>
            </div>
            <div className={`row mx-auto justify-content-center text-white`}>
                <div
                    className={`col-xl-3 col-lg-6 col-md-9 p-3 mt-3  rounded shadow border-all-${name}`}
                >
                    <p className={`fw-bold fs-4 text-${name}`}>
                        {title} Portal
                    </p>
                    <form action="">
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className={`form-control form-control-${name}`}
                                id="username"
                                placeholder="username"
                            />
                            <label htmlFor="username" className="form-label">
                                Username
                            </label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="password"
                                className={`form-control form-control-${name}`}
                                id="password"
                                placeholder="password"
                            />
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                        </div>
                        <div className="mt-4">
                            <Link
                                to={`/${path}`}
                                className={`btn w-100 fw-bolder btn-${name}-alt`}
                            >
                                Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
