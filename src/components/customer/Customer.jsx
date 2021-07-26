import { Switch, Route } from "react-router-dom";

import LandingPage from "./LandingPage.jsx";
import About from "./About.jsx";
import Channels from "./Channels.jsx";
import Contact from "./Contact.jsx";
import Applications from "./Applications.jsx";
import Apply from "./Apply.jsx";
import Plans from "./Plans.jsx";
import Services from "./Services.jsx";
import Inquiry from "./Inquiry.jsx";
import Technical from "./Technical.jsx";

import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

function Customer() {
    return (
        <>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/*">
                    <Navbar />
                    <Switch>
                        <Route path="/plans" component={Plans} />
                        <Route path="/channels" component={Channels} />
                        <Route path="/applications" component={Applications} />
                        <Route path="/apply" component={Apply} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/services" component={Services} />
                        <Route path="/general" component={Inquiry} />
                        <Route path="/technical" component={Technical} />
                    </Switch>
                </Route>
            </Switch>
            <Footer />
        </>
    );
}

export default Customer;
