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
      <div className="container cart-page">

         {cart.length===0 ?
         
          
               <div className='empty'>
                  {/* cart is currently empty */}
               </div>
          :

<div className="container">
  <h3 className="text-center mt-5 pt-3 pb-3 mb-2">Cart</h3>
<div className="row">
 <div class="col-md-12">
 <div class="panel panel-info panel-shadow">
<div class="panel-body">
        <div class="table-responsive">
        <table class="table">
                              <thead>
                                <tr>
                                  <th>Car</th>
                                  <th>Price</th>
                                  <th>Qty</th>
                                  <th>Remove</th>
                                  <th>Total</th>
                                </tr>
                              </thead>
                              <tbody>
{cart.map(product=>{
    return(

    <tr>
     <td> <img
                                          style={{
                                            width: "6rem",
                                            height: "4rem"
                                          }}
                                          src={product.img}
                                          className="img-fluid"
                                        /></td>
                                        <td>{product.price}</td>
                                        {" "}
                                        <button
                                          onClick={() =>
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
                                        </button>
                                        <td>   <button
                                          onClick={() => {
                                            value.deleteItem(product.id);
                                          }}
                                          className="btn btn-danger"
                                        >
                                          Delete
                                        </button></td>
                                        <td><b>{product.price*product.count}</b></td>
     
     </tr>
     
     
    )
})}
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>

{/* total */}
<div className="text-right">
<h3><span>amount:</span>${total}</h3>

<div className="shipping">
<h3><span>shipping: </span>{total}</h3>
</div>
<h3><span>total amount :</span>${total}</h3>
</div>

</div> 


        }



          
        </div>
    )
}}
</ProductConsumer>
)
}
