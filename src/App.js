import React from "react";
import "./App.css";
import { Container, ThemeProvider } from "@material-ui/core";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Logout from "./pages/Logout/Logout";
import InternalServer from "./pages/errorPages/InternalServer/InternalServer";
import NotFound from "./pages/errorPages/NotFound/NotFound";
import InfoBox from "./components/InfoBoxes/InfoBox/InfoBox";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { basic } from "./themes/themes";
import Profile from "./pages/Profile/Profile";

function App(props) {
  return (
    <div className="App">
      <Content />
    </div>
  );
}

function Content() {
  return (
    <Router>
      <ThemeProvider theme={basic}>
        <Header />
        <Container>
          <InfoBox />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/logout" exact component={Logout} />
            <Route path="/500" component={InternalServer} />
            <Route path="*" component={NotFound} />
            <Route path="/profile" exact component={Profile} />
          </Switch>
        </Container>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
