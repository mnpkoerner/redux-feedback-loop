import React from 'react';
import axios from 'axios';
import './App.css';
import Home from '../Home/Home';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments'
import Submit from '../Submit/Submit'
import { HashRouter as Router, Route, Link} from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <Route
        path='/'
        exact
        component={Home} />
        <Route
        path='/feeling'
        exact
        component={Feeling} />
        <Route
        path='/understanding'
        exact
        component={Understanding} />
        <Route
        path='/support'
        exact
        component={Support} />
        <Route
        path='/comments'
        exact
        component={Comments} />
        <Route
        path='/submit'
        exact
        component={Submit} />
      </div>
    </Router>
  );
}

export default App;
