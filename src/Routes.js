import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomeSpa from './containers/HomeSpa'
import Care from './containers/Care'
import Cleaning from './containers/Cleaning'
import Home from './components/Home'
import Product from'./components/Product'

const Routes = () => (
  <Switch>
    <Route path="/home-spa" component={HomeSpa} />
    <Route path="/care" component={Care} />
    <Route path="/cleaning" component={Cleaning} />
    <Route path="/products/:id" component={Product} />
    <Route exact path="/" component={Home} />
  </Switch>
)

export default Routes
