import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import EcoroutesListPage from "./pages/ecoroutes-list/index"
import AddEcoroutePage from "./pages/add-ecoroute/index";
import SignInPage from "./pages/sign-in";
import SignUpPage from "./pages/sign-up";

const Navigation = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/ecoroutes" component={EcoroutesListPage} />
                <Route path="/addecoroute" component={AddEcoroutePage} />
                <Route path="/signin" component={SignInPage} />
                <Route path="/signup" component={SignUpPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation