import { BrowserRouter as Router, Route } from "react-router-dom";

import Portal from "./components/Portal.jsx";
import Customer from "./components/customer/Customer.jsx";

import "../src/components/styles.css";

function App() {
    return (
        <Router>
            <Route path="/" component={Customer} />
            <Route path="/portal" component={Portal} />
        </Router>
    );
}

export default App;
