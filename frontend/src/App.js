import './App.css';
import React from 'react';
import Index from './components/admin/Index';
import ProfileInfo from './pages/admin/profileInfo';
import FoodSection from './pages/food/section/Section';
import FoodCategory from './pages/food/category/FoodCategory';
import Food from './pages/food/foodItem/Food';
import HomePage from './pages/homepage/Index';
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
              <Route exact path="/" component={HomePage} />
              <Route exact path="/admin/index" component={Index} />
              <Route exact path="/admin/profile" component={ProfileInfo} />
              <Route exact path="/admin/food-section" component={FoodSection} />
              <Route exact path="/admin/food-category" component={FoodCategory} />
              <Route exact path="/admin/food" component={Food} />
            </Switch>
          </Router>
        </tbody>
      </table>
    </div>
  );
}

export default App;
