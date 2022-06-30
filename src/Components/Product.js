import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from './Context';

export default class Product extends Component {
    constructor(props){
        super(props);
        this.state={
          showMenu: false
        }
    
        this.showDiv = this.showDiv.bind(this);
 }

 showDiv() {
    this.setState({
      showMenu : !this.state.showMenu
  });
  }

render(props) {

const {id, img,title,price,details,isInCart}=this.props.data;
const {closeNavCart,addToCart} = this.props;

return (
<ProductConsumer>
{value=>{
    return(
<div className="product">
        <div className="img-div">
            <img src={img} alt=""/>

        </div>
    <div className="details">
    <h3>{title}</h3>
    <p>SEK {price}</p>

    <div className="cartBtn">
  <button onClick={() => {addToCart(id)}} className={isInCart ?'disabled mb-3':'add_to_button mb-3'}>{isInCart?"In cart ":"Add to cart"}</button>
    </div>
    <p className = "view_more" onClick={this.showDiv}>View Info {this.state.showMenu !== false ? 
    <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>
    }</p>
    {this.state.showMenu !== false ? (
    <p className='desc'>{details}</p>
    ):(
     null
    )}
    </div>
 </div>
 )
}}
</ProductConsumer>
)
}
}
