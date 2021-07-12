import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Product from'./containers/Product'
import Search from './containers/Search'
import Home from './components/Home'
import Category from './containers/Category'
import Sale from './containers/Sale'

const Routes = () => (
  <Switch>
    <Route path="/sale" component={Sale} />
    <Route path="/categories/:categoryUrl" component={Category} />
    <Route path="/products/:id" component={Product} />
    <Route path="/search" component={Search} />
    <Route exact path="/" component={Home} />
  </Switch>
)

export default Routes
