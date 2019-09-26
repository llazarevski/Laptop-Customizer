import React, {Component} from 'react';
import './Cart.css';
import CartListItem from '../CartListItem/CartListItem';
import CartTotal from '../CartTotal/CartTotal';       
        
        
 class Cart extends React.Component{       
    render(){
        return(
        <section className="main__summary">
            <CartListItem 
                selected = {this.props.selected}
                usCurrencyFormat = {this.props.usCurrencyFormat}
                updateFeature = {this.props.updateFeature}
            />
            <CartTotal 
              usCurrencyFormat = {this.props.usCurrencyFormat}
              selected ={this.props.selected}
              updateFeature= {this.props.updateFeature}
            />
          </section>
        )
    }
 }

 export default Cart;