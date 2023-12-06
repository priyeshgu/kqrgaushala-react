import React from 'react'
import Homepage from './pages/Landing/Landing'
import Aboutpage from './pages/Aboutpage/About'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


export default function Routes() {
  return (
    <Router>
        <Switch>
            <Route path="/" exact component={Homepage}/>
            <Route path="/about" component={Aboutpage}/>
            </Switch>
    </Router>
  )
}
