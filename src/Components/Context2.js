import React, { Component } from 'react';
import {Data} from './Data';

const ProductContext = React.createContext();

 class ProductProvider extends Component {
    state={
        data:Data,
        cart:[],
        total:0    
    }

    addToCart=(id)=>{
      console.log(id);
      let check=this.state.cart.find(item=>item.id===id);
      if(!check) {
      const product = this.state.data.filter(item => {
        return item.id===id
      });
      console.log(product);
      product.forEach(item=>{
        item.isInCart=true
    })
       this.setState(() => {
        return {
          cart: [...this.state.cart, product]
        };
      });
      }
   }
deleteProduct=(id)=>{
  console.log(id);
   const {cart} = this.state;
   cart.forEach((item, index)=>{
    if(id===item.id) {
      cart.splice(index,1)
    }
    item.isInCart = false;
   })
 }


  render() {
    return (
        <ProductContext.Provider value={{
             
            ...this.state,
            addToCart:this.addToCart,
            deleteProduct:this.deleteProduct

           }}>
               {this.props.children}
           </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;


export {ProductProvider, ProductConsumer}