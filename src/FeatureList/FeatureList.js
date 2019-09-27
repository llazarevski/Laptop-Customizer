import React, {Component} from 'react';
import './FeatureList.css';
import FeatureItem from '../FeatureItem/FeatureItem';
import slugify from 'slugify';

class FeatureList extends React.Component{
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
          const featureHash = feature + '-' + idx;
          const options = this.props.features[feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
              <div key={this.itemHash} className="feature__item">
                <input
                  type="radio"
                  id={this.itemHash}
                  className="feature__option"
                  name={this.slugify(this.feature)}
                  checked={item.name === this.state.selected[this.feature].name}
                  onChange={e => this.updateFeature(feature, item)}
                />
                <label htmlFor={this.itemHash} className="feature__label">
                  {item.name} ({this.props.usCurrencyFormat.format(item.cost)})
                </label>
                
              </div>
              
            );
          });
        });
        return features;
}
}
export default FeatureList;