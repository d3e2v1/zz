import React, { Component } from 'react'

import { Route,BrowserRouter as Router,Switch } from 'react-router-dom';


import Home from '../page/home/home'
import Wish from '../page/wish/wish'
import Hidden from '../page/hidden/hidden'
import Nav from '../page/nav/nav'
import Sendwish from '../page/sendwish/sendwish'
import Rejected from '../page/Rejected/rejected'
class Routes extends Component
{
    render()
        {
            return(
                <Router>
                  
                 <Switch>
                     
                     <Route exact path="/" component={Home}/>
                     <Route exact path="/wish" component={Wish}/>
                     <Route exact path="/hidden" component={Hidden}/>
                     <Route exact path="/nav" component={Nav}/>
                     <Route exact path="/sendwish" component={Sendwish}/>
                     <Route exact path="/Rejected" component={Rejected}/>
                   
                  </Switch>
                   
                </Router>
            );
        }
}
export default Routes;