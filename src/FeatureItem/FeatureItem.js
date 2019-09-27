import React, {Component} from 'react';
import './FeatureItem.css';


class FeatureItem extends React.Component{
        render() {
          return (
              <>
            <div key={this.itemHash} className="feature__item">
            <input
              type="radio"
              id={this.itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === this.props.selected[feature].name}
              onChange={e => this.updateFeature(feature, item)}
            />
            <label htmlFor={this.itemHash} className="feature__label">
              {item.name} ({this.props.usCurrencyFormat.format(item.cost)})
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