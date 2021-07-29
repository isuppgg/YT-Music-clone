import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Error404 from '../pages/Error404';

const AppRouter = () => {
   return (
      <Router>
         <Switch>
            <Route exact path='/' component={Home} />
            <Route path='*' component={Error404} />
         </Switch>
      </Router>
   );
};

export default AppRouter;
