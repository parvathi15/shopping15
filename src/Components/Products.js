import React, { Component } from 'react';
import {ProductConsumer} from './Context';
import Product from "./Product";

export default class Products extends Component {
  constructor(props) {
    super(props);
  
  this.state = { 
   searchTerm: '',
   
    };
  };

  search=e=> {
    this.setState({
        searchTerm: e.target.value
    });
  }
  render() {
    return (
      <ProductConsumer>
      {value=>{
       const{data,closeNavCart, addToCart}= value;
       return(
           <div className="products">
           {/* <h2>Product List</h2> */}
           <form method="POST" action="#" class="mt-2 mb-5">
     <div class="row mt-5">
       <div class="col-md-8 mt-1" style={{ margin: "0 auto" }}>
         <input
           className="search"
           name="search"
           type="text"
           placeholder="Search Product"
           value={this.state.searchTerm}
           onChange={this.search}
          
         />
           </div>
           </div>
           </form>
    
           <div className="products-center">
               {data.filter(user => {
   return user.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
})
               
               .map(data=>{
                   return <Product key={data.id} data={data} addToCart={()=>addToCart(data.id)}  />
               })}
             </div>  
         </div>
       )
      }}
   </ProductConsumer>
    )
  }
}
