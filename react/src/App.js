import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import Layout from "./components/Layout";
import IndexContainer from "./containers/IndexContainer"

const App = props => {
  return(
    <div>
      <Router history={browserHistory}>
        <Route path='/'>
          <IndexRoute component={IndexContainer}/>
          <Route path="/songs" component={IndexContainer}/>
        </Route>
      </Router>
    </div>
  );
};

export default App;
