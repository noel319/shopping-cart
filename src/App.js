import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Main />
      </Router>
      <Footer />
    </div>
  )
}

export default App
