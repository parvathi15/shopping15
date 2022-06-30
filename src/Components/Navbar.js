import React, { Component } from "react";
import { ProductConsumer } from "./Context";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="mx-auto order-0">
          <a class="navbar-brand mx-auto" href="#">
            Shopping
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target=".dual-collapse2"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <ProductConsumer>
                {value => {
                  return (
                   
                      <span className="cart">
                        Cart
                        <i className="fas fa-shopping-cart cart">
                          <span>{value.cart.length}</span>
                        </i>
                      </span>
                    
                  );
                }}
              </ProductConsumer>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

