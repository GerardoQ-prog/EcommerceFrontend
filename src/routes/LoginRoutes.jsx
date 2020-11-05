
import { Switch } from 'react-router-dom'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import Signin from '../views/Signin'
import Signup from '../views/Signup'

const LoginRoutes = () => {

    console.log('login')
    return (
        <div>
            <Switch>
                <Route exact path="/auth/sigin" component={Signin}></Route>
                <Route  exact path="/auth/signup" component={Signup}></Route>
                <Redirect to="/auth/sigin"></Redirect>
            </Switch>
        </div>
    )
}

export default LoginRoutes
