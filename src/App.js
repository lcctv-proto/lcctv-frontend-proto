import Navbar from "./components/customer/Navbar.jsx";
import Footer from "./components/customer/Footer.jsx";

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

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
                <Route path="/portal" component={Portal} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
