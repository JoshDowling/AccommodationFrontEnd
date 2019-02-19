import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import UpdateForm from './Components/UpdateForm';
import FilterBar from './Components/FilterBar';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          {/* <Route exact path="/" component={Home} /> */}
          <FilterBar/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
