import Navbar from "./components/customer/Navbar.jsx";
import Footer from "./components/customer/Footer.jsx";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./components/customer/LandingPage.jsx";
import About from "./components/customer/About.jsx";
import Channels from "./components/customer/Channels.jsx";
import Contact from "./components/customer/Contact.jsx";
import Applications from "./components/customer/Applications.jsx";
import Plans from "./components/customer/Plans.jsx";
import Services from "./components/customer/Services.jsx";
import Inquiry from "./components/customer/Inquiry.jsx";
import Technical from "./components/customer/Technical.jsx";

import Portal from "./components/Portal.jsx";
import Login from "./components/Login.jsx";

import AdminHome from "./components/administrator/Home.jsx";
import CashierHome from "./components/cashier/Home.jsx";
import CeoHome from "./components/ceo/Home.jsx";
import FrontHome from "./components/frontdesk/Home.jsx";
import JOHome from "./components/jopersonnel/Home.jsx";
import TechHome from "./components/technician/Home.jsx";

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/plans" component={Plans} />
                <Route path="/channels" component={Channels} />
                <Route path="/applications" component={Applications} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/services" component={Services} />
                <Route path="/general" component={Inquiry} />
                <Route path="/technical" component={Technical} />

                {/* ONLINE MANAGEMENT SYSTEM ROUTES */}
                <Route path="/portal" exact component={Portal} />
                <Route path="/portal/admin" exact component={AdminHome} />
                <Route path="/portal/cashier" exact component={CashierHome} />
                <Route path="/portal/ceo" exact component={CeoHome} />
                <Route path="/portal/frontdesk" exact component={FrontHome} />
                <Route path="/portal/joborder" exact component={JOHome} />
                <Route path="/portal/tech" exact component={TechHome} />

                <Route
                    path="/portal/admin/login"
                    render={(props) => (
                        <Login
                            {...props}
                            title="Admin"
                            path="portal/admin/"
                            name="admin"
                        />
                    )}
                />
                <Route
                    path="/portal/cashier/login"
                    render={(props) => (
                        <Login
                            {...props}
                            title="Cashier"
                            path="portal/cashier/"
                            name="cashier"
                        />
                    )}
                />
                <Route
                    path="/portal/ceo/login"
                    render={(props) => (
                        <Login
                            {...props}
                            title="Ceo"
                            path="portal/ceo/"
                            name="ceo"
                        />
                    )}
                />
                <Route
                    path="/portal/frontdesk/login"
                    render={(props) => (
                        <Login
                            {...props}
                            title="Front Desk"
                            path="portal/frontdesk/"
                            name="front"
                        />
                    )}
                />
                <Route
                    path="/portal/joborder/login"
                    render={(props) => (
                        <Login
                            {...props}
                            title="JO Personnel"
                            path="portal/joborder/"
                            name="jo"
                        />
                    )}
                />
                <Route
                    path="/portal/tech/login"
                    render={(props) => (
                        <Login
                            {...props}
                            title="Technician"
                            path="portal/tech/"
                            name="tech"
                        />
                    )}
                />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
