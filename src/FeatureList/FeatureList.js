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
                <div key={itemHash} className="feature__item">
                <input
                    type="radio"
                    id={itemHash}
                    className="feature__option"
                    name={slugify(feature)}
                    checked={item.name === this.props.selected[feature].name}
                    onChange={e => this.updateFeature(this.props.feature, this.props.item)}
                />
                <label htmlFor={itemHash} className="feature__label">
                    {item.name} ({this.props.usCurrencyFormat.format(this.props.item.cost)})
                </label>    
                </div>
              
            );
          });
          return (
            <FeatureItem key={this.props.itemHash}
            options={options}
            featureHash={featureHash}
            itemHash ={this.props.itemHash}
            item={this.props.item}/>
          )
        });
       console.log(features)
        return features
        
        
        
}
}
export default FeatureList;