import { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../auth/Auth";

const PrivateRoute = ({ comp: Component, ...otherProps }) => {
    const { checkAuth, isAuthenticated } = useContext(AuthContext);

    useEffect(() => {
        checkAuth();
    });

    return (
        <Route
            {...otherProps}
            render={(props) =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={
                            otherProps.redirectTo
                                ? otherProps.redirectTo
                                : "/portal"
                        }
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
