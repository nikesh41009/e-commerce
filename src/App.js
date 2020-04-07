import React, {Component} from 'react';
import Homepage from './pages/homepage/homepage.jsx';
import './App.css'
import {Switch,Route} from 'react-router-dom';
import Shop from './pages/shop/shop.jsx';

class App extends Component 
{
  render()
    {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={Shop} />
      </Switch>
     
  </div>
  );
    }
}

export default App;
