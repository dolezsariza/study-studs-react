import React, { Fragment } from "react";
import { Provider } from "./util/Context";
import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./pages/Home/Home";
import NotFound from "./pages/errorPages/NotFound/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Provider>
                <Content />
            </Provider>
        </div>
    );
}

function Content() {
    return (
        <Fragment>
            <Header />
            <div className="page-container">
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </Router>
            </div>
            <Footer />
        </Fragment>
    );
}

export default App;
