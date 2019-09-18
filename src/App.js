import React, { Component } from 'react';

import {Route, Switch, Link} from 'react-router-dom';
import Layout from '../src/containers/layout/layout';


import MoviedDetailPage from './containers/MovieDetailPage/MovieDetailPage';
import PopMoviesPage from './containers/PopMoviesPage/PopMoviesPage';

class App extends Component {
  render() {
    return (
      
      <div >
      <Layout>
      <Switch>
            <Route path="/movie-detail" component={MoviedDetailPage} />
            
            <Route path="/" exact component={PopMoviesPage} />


            
          </Switch>
          </Layout>
        
      </div>
      
    );
  }
}



export default App;
