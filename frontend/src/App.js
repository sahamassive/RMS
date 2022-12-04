import './App.css';
import React from 'react';
import Index from './components/admin/Index';
import ProfileInfo from './pages/admin/profileInfo';
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
            <Route exact path="/admin/profile" component={ProfileInfo} />
            </Switch>
          </Router>
        </tbody>
      </table>
    </div>
  );
}

export default App;
