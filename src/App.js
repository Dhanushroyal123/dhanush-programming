import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/course/Header'
import Coursebody from './components/course/body'
import Login from './components/course/LoginPage'
import Reset from './components/course/Reset'
import ResetPassword from './components/course/ResetPassword'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignUp from './components/course/signup'

function App() {
  return (
    <Router>
      <div className='container-fluidd'>
        <Switch>
          <Route exact path={['/', '/courses']}>
            <Header />
            <Coursebody />
          </Route>
          <Route path='/login'>
            <Header />
            <Login />
          </Route>
          <Route path='/signup'>
            <Header />
            <SignUp />
          </Route>
          <Route path='/reset'>
            <Header />
            <Reset />
          </Route>
          <Route path='/resetpass'>
            <Header />
            <ResetPassword />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
