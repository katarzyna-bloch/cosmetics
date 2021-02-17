import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomeSpa from './components/HomeSpa'
import Care from './components/Care'
import Cleaning from './components/Cleaning'
import Home from './components/Home'

const Routes = () => (
  <Switch>
    <Route path="/home-spa" component={HomeSpa} />
    <Route path="/care" component={Care} />
    <Route path="/cleaning" component={Cleaning} />
    <Route exact path="/" component={Home} />
  </Switch>
)

export default Routes
