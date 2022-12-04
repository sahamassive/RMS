import './App.css';
import React from 'react';
import Index from './components/admin/Index';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <table class="table">
        <thead>
        </thead>
        <tbody>
          <Router>
            <Switch>
            <Route exact path="/"/>
            <Route exact path="/admin/index" component={Index} />
            </Switch>
          </Router>
        </tbody>
      </table>
    </div>
  );
}

export default App;
