import React, { memo } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Error404 from '../pages/Error404';
import Navbar from '../Navbar/Navbar';
import Explore from '../pages/Explore';

const AppRouter = () => {
   return (
      <Router>
         <Navbar />
         <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/explore' component={Explore} />
            <Route exact path='/playlist/:playlist' component={Error404} />
            <Route path='*' component={Error404} />
         </Switch>
      </Router>
   );
};

export default memo(AppRouter);
