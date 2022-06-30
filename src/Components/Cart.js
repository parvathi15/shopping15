import React from 'react';
import {ProductConsumer} from './Context';
import {Link} from 'react-router-dom';

export default function Cart(props) {
    // const {cartOpen,closeNavCart, handleCartNav, shipping}=props.valueProps;
    return (
<ProductConsumer>
{value=>{
    const {cart,total,deleteItem,increaseItem, decreaseItem}=value;
    return(
      
      <div className="cart-page container">
        
      {/* <div class="col-xs-12">  */}
      {cart.length===0 ?
     <div className='empty'>
    {/* cart is currently empty */}
     </div>:
<div className="container">
<div className="row">
{/* col-md-9 */}
 <div class="col-md-9 p-5" style = {{background:"white",padding:"29px 15px"}}> 
 {cart.map(product=>{
    return(
      <div class="row">
      <div class="col-md-2 col-md-offset-1 mt-2 mb-2">
      <div className="img-cart">
           <img src={product.img}  alt="img"/>
       </div>
      </div>
      <div class="col-md-2  mt-2 mb-2"><b>{product.title}</b> </div>
      <div class="col-md-2  mt-2 mb-2">
       <button onClick={() =>
       value.increaseItem(product.id)
                                          }
                                          className="btn btn-outline-primary btn-sm mr-1"
                                        >
                                          +
                                        </button>
                                        <b>{product.count}</b>
                                        <button
                                          onClick={() =>
                                            value.decreaseItem(product.id)
                                          }
                                          className="btn btn-outline-primary btn-sm ml-1"
                                        >
                                          -
                                        </button></div>
                                        <div class="col-md-2  mt-2 mb-2">
      <button
                                          onClick={() => {
                                            value.deleteItem(product.id);
                                          }}
                                          className="btn btn-danger"
                                        >
                                          <i className="fa fa-trash"></i>
                                        </button>
      </div>
      <div class="col-md-2  mt-2 mb-2">
      <b>{product.price*product.count} SEK</b>
        </div>
    </div>
    )
 })}
</div>




{/* total */}
<div class="col-md-3 p-5" style = {{background:"#343a40",color:"white"}}> 
<div className="text-center mt-3">
<p style = {{fontSize:"23px"}}>Subtotal {cart.length} items</p>
<h3><span>Total:</span>{total} SEK</h3>
<button type="button" class="btn btn-outline-light mt-2">Proceed to Checkout</button>
</div>
</div>
</div> 
</div>
}
{/* </div> */}
</div>
)
}}
</ProductConsumer>
)
}


