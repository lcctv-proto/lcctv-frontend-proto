import { BrowserRouter as Router, Route } from "react-router-dom";

import Auth from "./auth/Auth.jsx";
import Portal from "./components/Portal.jsx";
import Customer from "./components/customer/Customer.jsx";

import "../src/components/styles.css";

function App() {
    return (
        <Router>
            <Auth>
                <Route path="/" component={Customer} />
                <Route path="/portal" component={Portal} />
            </Auth>
        </Router>
    );
}

export default App;
