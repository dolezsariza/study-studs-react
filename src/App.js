import React, { useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { Provider } from "./util/Context";
import "./App.css";
import { Container } from "@material-ui/core";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import InternalServer from './pages/errorPages/InternalServer/InternalServer';
import NotFound from "./pages/errorPages/NotFound/NotFound";
import InfoBox from "./components/InfoBoxes/InfoBox/InfoBox"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App(props) {
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
                <InfoBox/>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/500" component={InternalServer} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Container>
            <Footer />
        </Router>
    );
}

export default App;
