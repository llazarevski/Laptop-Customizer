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
              <FeatureItem />
              
            );
          });
        });
        return features
        
}
}
export default FeatureList;