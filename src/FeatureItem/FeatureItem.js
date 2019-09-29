import React, {Component} from 'react';
import './FeatureItem.css';
import slugify from 'slugify';


class FeatureItem extends React.Component{
        render() {
          return (
            <>
                <div key={this.props.itemHash} className="feature__item">
                <input
                    type="radio"
                    id={this.props.itemHash}
                    className="feature__option"
                    name={slugify(this.props.feature)}
                    checked={this.props.item.name === this.props.selected[this.props.feature].name}
                    onChange={e => this.updateFeature(this.props.feature, this.props.item)}
                />
                <label htmlFor={this.props.itemHash} className="feature__label">
                    {this.props.item.name} ({this.props.usCurrencyFormat.format(this.props.item.cost)})
                </label>    
                </div>
                <fieldset className="feature" key={this.props.featureHash}>
                    <legend className="feature__name">
                    <h3>{this.props.feature}</h3>
                    </legend>
                    {this.props.options}
                </fieldset>
            </>
            
            );
        };
}

export default FeatureItem;