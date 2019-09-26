import React, {Component} from 'react';
import './FeatureList.css';
import FeatureItem from './FeatureItem/FeatureItem';

class FeatureList extends React.Component{
    render(){
        return(
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <FeatureItem features={this.props.features}/>
          </form>
        )

    }
}

export default FeatureList;