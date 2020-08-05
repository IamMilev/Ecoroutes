import React, { useContext} from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ProfilePage from './pages/profile'
import EcotrailListPage from "./pages/ecotrail-list";
import AddEcotrailPage from "./pages/add-ecotrail";
import Login from "./pages/sign-in";
import Register from "./pages/sign-up";
import UserContext from "./context/userContext";
import LandingPage from "./pages/landing-page";

const Navigation = () => {
    const context = useContext(UserContext)
    const loggedIn = context.userData.loggedIn

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/ecotrail" component={EcotrailListPage} />
                <Route path="/addecotrail">
                    {loggedIn ? (<AddEcotrailPage />): (<Redirect to="/signin" />)}
                </Route>
                <Route path="/profile/:userid" >
                    {loggedIn ? (<ProfilePage />): (<Redirect to="/signin" />)}
                </Route>
                <Route path="/signin">
                    {loggedIn ? (<Redirect to="/" />): (<Login />)}
                </Route>
                <Route path="/signup">
                    {loggedIn ? (<Redirect to="/" />): (<Register />)}
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation