import authHeader from "../auth/auth-header";
import axios from "axios";

const API = axios.create({
    baseURL: "https://lcctv-backend.herokuapp.com/api/",
    // baseURL: "http://localhost:5000/api/",
});

const accounts = {
    get: async (id, params) =>
        await API.get(`/accounts/${id}`, { params, headers: authHeader() }),
    post: (body) => API.post("/accounts", body),
};

const applications = {
    get: async (id, params) =>
        await API.get(`/applications/${id}`, { params, headers: authHeader() }),
    post: async (accountID, remarks) =>
        await API.post(`/applications`, { data: { accountID, remarks } }),
    patch: async (id, status, step) => {
        await API.patch(
            `/applications/status/${id}`,
            {
                status,
                step,
            },
            { headers: authHeader() }
        );
    },
};

const areas = {
    get: async (id, params) =>
        await API.get(`/areas/${id}`, { params, headers: authHeader() }),
};

const channels = {
    get: async (id, params) => await API.get(`/channels/${id}`, { params }),
};

const equipments = {
    get: async (id, params) =>
        await API.get(`/equipments/${id}`, { params, headers: authHeader() }),
};

const fees = {
    get: async (id, params) =>
        await API.get(`/fees/${id}`, { params, headers: authHeader() }),
};

const inquiries = {
    get: async (id, params) =>
        await API.get(`/inquiries/${id}`, { params, headers: authHeader() }),
    post: async (body) => API.post("/inquiries", body),
};

const invoices = {
    get: async (id, params) =>
        await API.get(`/invoices/${id}`, { params, headers: authHeader() }),
};

const jo = {
    get: async (id, params) =>
        await API.get(`/jo/${id}`, { params, headers: authHeader() }),
};

const packages = {
    get: async (id, params) => await API.get(`/packages/${id}`, { params }),
};

const payments = {
    get: async (id, params) =>
        await API.get(`/payments/${id}`, { params, headers: authHeader() }),
};

const personnel = {
    get: async (id, params) =>
        await API.get(`/personnel/${id}`, { params, headers: authHeader() }),
};

const roles = {
    get: async (id, params) =>
        await API.get(`/roles/${id}`, { params, headers: authHeader() }),
};

const teams = {
    get: async (id, params) =>
        await API.get(`/teams/${id}`, { params, headers: authHeader() }),
};

const endpoints = {
    accounts,
    applications,
    areas,
    channels,
    equipments,
    fees,
    inquiries,
    invoices,
    jo,
    packages,
    payments,
    personnel,
    roles,
    teams,
};

export default endpoints;
