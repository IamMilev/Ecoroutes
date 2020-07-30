import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import EcoroutesListPage from "./pages/ecoroutes-list/index"
import AddEcoroutePage from "./pages/add-ecoroute/index";

const Navigation = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/ecoroutes" component={EcoroutesListPage} />
                <Route path="/addecoroute" component={AddEcoroutePage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation