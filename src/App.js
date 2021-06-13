import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Cart from './components/Cart'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
      <Cart />
    </>
  )
}

export default App
