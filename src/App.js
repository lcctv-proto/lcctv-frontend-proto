import Navbar from "./components/customer/Navbar.jsx";
import Footer from "./components/customer/Footer.jsx";

import LandingPage from "./components/customer/LandingPage.jsx";
import About from "./components/customer/About.jsx";
import Channels from "./components/customer/Channels.jsx";
import Contact from "./components/customer/Contact.jsx";
import Applications from "./components/customer/Applications.jsx";
import Plans from "./components/customer/Plans.jsx";
import Services from "./components/customer/Services.jsx";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Fragment } from "react";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Fragment>
                    <Navbar />
                    <div className="container py-5">
                        <Route path="/plans" component={Plans} />
                        <Route path="/channels" component={Channels} />
                        <Route path="/applications" component={Applications} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/services" component={Services} />
                    </div>
                    <Footer />
                </Fragment>
            </Switch>
        </Router>
    );
}

export default App;
