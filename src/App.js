import React, { Fragment } from "react";
import { Provider } from "./util/Context";
import {Container} from "@material-ui/core"
import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
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
        <Router>
            <Header />
            <Container>
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </Container>
            <Footer />
        </Router>
    );
}

export default App;
