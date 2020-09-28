import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/common/Navbar'
import Home from './components/common/Home'
import WinesIndex from './components/wines/WinesIndex'
import WinesShow from './components/wines/WinesShow'
import WinesNew from './components/wines/WinesNew'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/wines" component={WinesIndex} />
        <Route exact path="/wines/new" component={WinesNew} />
        <Route exact path="/wines/:id" component={WinesShow} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
