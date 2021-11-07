import axios from "axios";
import { createContext, useState, useEffect } from "react";
import authHeader from "./auth-header";

export const AuthContext = createContext({});

export default function Auth({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState("");
    const [role, setRole] = useState("");
    const [isLoading, setIsLoading] = useState();

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = () => {
        const user = JSON.parse(localStorage.getItem("user"));

        if (user) setIsAuthenticated(true);
        else setIsAuthenticated(false);
    };
    // axios
    //     .post("https://lcctv-backend.herokuapp.com/api/personnel/verify", {
    //         headers: authHeader(),
    //     })
    //     .then(() => setIsAuthenticated(true))
    //     .catch(() => setIsAuthenticated(false))
    //     .then(() => setIsLoading(false));

    const login = (username, password, callback) => {
        setIsLoading(true);
        axios
            .post("https://lcctv-backend.herokuapp.com/api/personnel/login", {
                username,
                password,
            })
            .then((response) => {
                if (response.data.token) {
                    axios
                        .get(
                            `https://lcctv-backend.herokuapp.com/api/roles/${response.data.roleID}`,
                            {
                                headers: authHeader(),
                            }
                        )
                        .then((res) => {
                            localStorage.setItem(
                                "user",
                                JSON.stringify({
                                    ...response.data,
                                    description: res.data.description,
                                })
                            );

                            setIsAuthenticated(true);
                            setUser(response.data.username);
                            setRole(res.data.description);
                            setIsLoading(false);
                            callback(res.data.description);
                        });
                }
            })
            .catch((err) => {
                alert(
                    "There are no accounts with these credentials. Please check and try again!"
                );
                setIsAuthenticated(false);
                setIsLoading(false);
            });
    };

    const logout = () => {
        localStorage.removeItem("user");
        setRole("");
        setIsAuthenticated(false);
        setIsLoading(false);
    };

    // const signUp = (credentials) =>
    //     authSignUp(credentials)
    //         .then(setIsAuthenticated(true))
    //         .catch((error) => {
    //             alert(error);
    //             setIsAuthenticated(false);
    //         });

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                isLoading,
                role,
                user,
                login,
                logout,
                checkAuth,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
