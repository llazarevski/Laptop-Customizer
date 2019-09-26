import React, {Component} from 'react';
import './Cart.css';
import CartListItem from '../CartListItem/CartListItem';
import CartTotal from '../CartTotal/CartTotal';       
        
        
 class Cart extends React.Component{       
    render(){
        return(
        <section className="main__summary">
            <CartListItem />
            <CartTotal />
          </section>
        )
    }
 }

 export default Cart;