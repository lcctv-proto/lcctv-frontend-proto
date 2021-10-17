import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://lcctv-backend.herokuapp.com/api/personnel/";

// const register = (username, email, password) => {
//     return axios.post(API_URL + "signup", {
//         username,
//         email,
//         password,
//     });
// };

const login = (username, password) => {
    return axios
        .post(API_URL + "login", {
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
                    });
            }
            return response.data;
        })
        .catch((err) => {
            console.error(err);
            console.log("User not found!");
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const getCurrentUserRole = () => {
    return JSON.parse(localStorage.getItem("user"))?.description;
};

const getCurrentUserName = () => {
    return JSON.parse(localStorage.getItem("user"))?.username;
};

const exportMethods = {
    login,
    logout,
    getCurrentUser,
    getCurrentUserRole,
    getCurrentUserName,
};

export default exportMethods;
