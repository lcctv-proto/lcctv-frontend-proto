import { Switch, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import About from "./About";
import Channels from "./Channels";
import Channel from "./Channel";
import Contact from "./Contact";
import Applications from "./Applications";
import Apply from "./Apply";
import Plans from "./Plans";
import Services from "./Services";
import Inquiry from "./Inquiry";
import Technical from "./Technical";

import Navbar from "./Navbar";
import Footer from "./Footer";

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
                        <Route path="/channel" component={Channel} />
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
