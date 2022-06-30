import React, { Component } from 'react';
import {Data} from './Data';


const ProductContext = React.createContext();

// provider :provides all the data and generally give us access to data from context

// consumer which as word say consumes the data fro contxt

class ProductProvider extends Component {


state={
    data:Data,
    cart:[],
    total:0,
}

// for open close


// add to cart functionality
addToCart=(id)=>{

console.log(`item ${id} added to cart`);

const {data,cart}=this.state;

let check=this.state.cart.find(item=>item.id===id);

if(!check){
const filterData=data.filter(item=>{
        return item.id===id
    })
filterData.forEach(item=>{
    item.isInCart=true

})
  
this.setState({
cart:[...this.state.cart, ...filterData],
cartOpen:true,
},()=>{
this.totalItems();
})
}
else{
 }
}



// delete single items
deleteItem=(id)=>{

const {cart}=this.state;
cart.forEach((item, index)=>{
    if(item.id===id){
        cart.splice(index,1)
    }

    item.isInCart=false
})


this.setState({
    cart:cart
})

}

// increase

increaseItem=(id)=>{
 const {cart}=this.state;
 cart.forEach(item=>{
     if(item.id===id){
       item.count +=1;
     }
 })

 this.setState({
     cart:cart
 },()=>{
     this.totalItems();
 })
}


// decrease item
decreaseItem=(id)=>{
 const {cart}=this.state;
 
 cart.forEach(item=>{
     if(item.id===id){
         item.count===1?item.count=1:item.count -=1;

     }

     this.setState({
         cart:cart
     },()=>{
         this.totalItems();
     })
 })
}


// get total items in cart
totalItems=()=>{
const {cart}=this.state;

const cartTotal= cart.reduce((prev,item)=>{
    return prev + (item.price*item.count)
},0)

this.setState({
    total:cartTotal
})
}


    render() {
        return (
           <ProductContext.Provider value={{
             ...this.state,
            addToCart:this.addToCart,
            deleteItem:this.deleteItem,
            increaseItem:this.increaseItem,
            decreaseItem:this.decreaseItem

           }}>
               {this.props.children}
           </ProductContext.Provider>
        )
    }
}


const ProductConsumer = ProductContext.Consumer;


export {ProductProvider, ProductConsumer}
