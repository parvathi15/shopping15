import React, { Component } from 'react';
import "./App.css";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
      {/* <Switch> */}
        {/* <Route exact path="/" component={Products} /> */}
        <Navbar />
        <Products />
        <Cart />
      {/* </Switch> */}
    </React.Fragment>
    )
  }
}
