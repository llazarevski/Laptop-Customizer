import React, {Component} from 'react';
import './FeatureItem.css';


class FeatureItem extends React.Component{
        render() {
          return (
            <fieldset className="feature" key={this.props.featureHash}>
                <legend className="feature__name">
                 <h3>{feature}</h3>
                </legend>
                {this.props.options}
            </fieldset>
            );
        };
}

export default FeatureItem;