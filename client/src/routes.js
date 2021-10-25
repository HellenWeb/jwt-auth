import React from 'react'
import { Auth } from './pages/Auth/Auth'
import { Log } from './pages/Log/Log'
import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
import { Switch, Route, Redirect } from 'react-router-dom'

export const Routes = isActivated => {
    if (isActivated) {
        return (
            <Switch>
                <Route path="/home" exact>
                    <Home />
                </Route>
                <Route path="/about" exact>
                    <About />
                </Route>
                <Redirect to="/home" />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/auth" exact>
                <Auth />
            </Route>
            <Route path="/login" exact>
                <Log />
            </Route>
            <Redirect to="/auth" />
        </Switch>
    )
}

export default Routes
