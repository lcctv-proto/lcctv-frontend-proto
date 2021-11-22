import Navbar from "./Login/Navbar";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        console.log("submit");
    };

    return (
        <>
            <Navbar />
            <div className="container-fluid bg-application">
                <div className="row py-5 justify-content-center my-3">
                    <div className=" col-sm-12 col-md-10 col-xl-4 col-lg-6 text-navy">
                        <div className="card my-5 border-0 shadow-lg">
                            <div className="card-header text-light py-3 bg-navy border-gold-3">
                                <span className="h5">
                                    LOGIN TO YOUR ACCOUNT
                                </span>
                            </div>
                            <div className="card-body">
                                <>
                                    <label
                                        htmlFor="email"
                                        className="form-label"
                                    >
                                        ACCOUNT NUMBER
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="email"
                                        value={username}
                                        onChange={(e) => {
                                            setUsername(e.target.value);
                                        }}
                                        onKeyPress={(e) => {
                                            if (e.key === "Enter")
                                                handleSubmit();
                                        }}
                                        required
                                    />

                                    <label
                                        htmlFor="password"
                                        className="form-label mt-3"
                                    >
                                        PASSWORD
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                        }}
                                        onKeyPress={(e) => {
                                            if (e.key === "Enter")
                                                handleSubmit();
                                        }}
                                        style={{ textTransform: "none" }}
                                        required
                                    />
                                    <button
                                        className="btn btn-link mt-2 fst-italic"
                                        onClick={() => {
                                            console.log(
                                                "I am stupid, I forgot my password!"
                                            );
                                        }}
                                    >
                                        Forgot your password?
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-primary mt-3 fw-bolder float-end btn-gold"
                                        onClick={handleSubmit}
                                        disabled={isLoading}
                                    >
                                        {isLoading ? "LOADING" : "LOGIN"}
                                    </button>
                                </>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
