import React from 'react'
import styled from 'styled-components'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import { Route, Switch } from 'react-router-dom'

const Main = () => {
  return (
    <MainWrapper>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </MainWrapper>
  )
}

const MainWrapper = styled.main`
  width: ${({ theme }) => theme.widths.content};
  padding: 12rem 0;
  margin: 0 auto;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 8rem 0;
  }
`

export default Main
