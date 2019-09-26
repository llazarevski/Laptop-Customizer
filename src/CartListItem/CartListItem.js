import React, {Component} from 'react';
import './CartListItem.css';


class CartListItem extends React.Component{
    render(){
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = this.props.selected[feature];
        });
        return(
            <div className='CartListItem'>
                <h2>Your cart</h2>
                  <div className="summary__option" key={featureHash}>
                    <div className="summary__option__label">{this.props.feature} </div>
                    <div className="summary__option__value">{selectedOption.name}</div>
                    <div className="summary__option__cost">
                      {this.props.usCurrencyFormat.format(selectedOption.cost)}
                    </div>
                  </div>
            </div>
                );
    };
}


export default CartListItem;