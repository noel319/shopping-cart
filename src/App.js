import React from 'react'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'component={Home}/>
        <Route exact path='/products'component={Products}/>
        <Route exact path='/contact'component={Contact}/>
      </Switch>
    </Router>
  )
}

export default App
