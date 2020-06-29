import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Home} from './components/Home';
import {Service} from './components/Service';
import {Blog} from './components/Blog';
import {Contact} from './components/Contact';
import {NoMatch} from './components/NoMatch';
import {Layout} from './components/Layout';
import {Menu} from './components/Nav';
function App() {
  return (
    <React.Fragment>
     
      <Router>
      <Menu />
        <Switch>

          <Route exact path="/" component={Home} />
          <Route path="/services" component={Service} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
      
    </React.Fragment>
  );
}

export default App;
