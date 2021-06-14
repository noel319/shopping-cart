import React from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Contact from '../pages/Contact'

const Main = () => {
  return (
    <MainWrapper>
      <Switch>
        <Route exact path="/shopping-cart" component={Home} />
        <Route exact path="/shopping-cart/products" component={Products} />
        <Route exact path="/shopping-cart/contact" component={Contact} />
      </Switch>
    </MainWrapper>
  )
}

const MainWrapper = styled.main`
  max-width: ${({ theme }) => theme.widths.content};
  margin: 0 auto;
  padding: 4rem;
`

export default Main
