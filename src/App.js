import React, { useContext } from "react";
import "./App.css";
import { Container, ThemeProvider } from "@material-ui/core";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./pages/Home/Home";
import Topic from "./pages/Topic/Topic";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Logout from "./pages/Logout/Logout";
import PostToTopic from "./pages/PostToTopic/PostToTopic";
import NoConnection from "./pages/errorPages/NoConnection/NoConnection";
import InternalServer from "./pages/errorPages/InternalServer/InternalServer";
import NotFound from "./pages/errorPages/NotFound/NotFound";
import InfoBox from "./components/InfoBoxes/InfoBox/InfoBox";
import GroupWithTopics from "./pages/GroupWithTopics/GroupWithTopics";
import TopicToGroup from "./pages/TopicToGroup/TopicToGroup";
import GroupToSite from "./pages/GroupToSite/GroupToSite";
import JoinGroup from "./pages/JoinGroup/JoinGroup";
import LeaveGroup from "./pages/LeaveGroup/LeaveGroup";
import history from "./history";
import { Route, Switch } from "react-router-dom";
import { Router } from "react-router";
import { basic } from "./themes/themes";
import Profile from "./pages/Profile/Profile";
import Editprofile from "./pages/EditProfile/Editprofile";
import FileUpload from "./pages/Upload/FileUpload";
import UserProvider, { UserContext } from "./context/UserContext";
import GroupProvider from './context/GroupContext';
import { setup } from "./axios/axios";
import FilesPage from "./pages/Files/FilesPage";

function App(props) {
    return (
        <UserProvider>
            <GroupProvider>
                <div className="App">
                    <Content />
                </div>
            </GroupProvider>
        </UserProvider>
    );
}

function Content() {
    const userContext = useContext(UserContext);
    setup.setupInterceptors(userContext);

    return (
        <Router history={history}>
            <ThemeProvider theme={basic}>
                <Header />
                <Container>
                    <InfoBox />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/groups" exact component={GroupToSite} />
                        <Route
                            path="/topics/:id/fileupload"
                            exact
                            component={FileUpload}
                        />
                        <Route
                            path="/topics/:id/allfile"
                            exact
                            component={FilesPage}
                        />
                        <Route
                            path="/groups/:id"
                            exact
                            component={GroupWithTopics}
                        />
                        <Route
                            path="/groups/:id/topic"
                            component={TopicToGroup}
                        />
                        <Route
                            path="/topics/:id/post"
                            component={PostToTopic}
                        />
                        <Route path="/groups/:id/join" exact component={JoinGroup}/>
                        <Route path="/groups/:id/leave" exact component={LeaveGroup}/>
                        <Route path="/topics/:id" component={Topic} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/register" exact component={Register} />
                        <Route path="/logout" exact component={Logout} />
                        <Route
                            path="/profile/edit"
                            exact
                            component={Editprofile}
                        />
                        <Route
                            path="/profile/:username"
                            exact
                            component={Profile}
                        />
                        <Route path="/500" component={InternalServer} />
                        <Route path="/no-connection" component={NoConnection} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </Container>
                <Footer />
            </ThemeProvider>
        </Router>
    );
}

export default App;
