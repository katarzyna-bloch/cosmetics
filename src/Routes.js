import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomeSpa from './containers/HomeSpa'
import Care from './containers/Care'
import Cleaning from './containers/Cleaning'
import Product from'./containers/Product'
import Search from './containers/Search'
import Sale from './containers/Sale'
import Home from './components/Home'

const Routes = () => (
  <Switch>
    <Route path="/home-spa" component={HomeSpa} />
    <Route path="/care" component={Care} />
    <Route path="/cleaning" component={Cleaning} />
    <Route path="/products/:id" component={Product} />
    <Route path="/search" component={Search} />
    <Route path="/sale" component={Sale} />
    <Route exact path="/" component={Home} />
  </Switch>
)

export default Routes
