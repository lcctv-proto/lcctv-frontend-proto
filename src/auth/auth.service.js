import axios from "axios";

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
                localStorage.setItem("user", JSON.stringify(response.data));
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
    const roleID = JSON.parse(localStorage.getItem("user"))?.roleID;
    return axios
        .get(`https://lcctv-backend.herokuapp.com/api/roles/${roleID}`)
        .then((res) => res.data.description);
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
