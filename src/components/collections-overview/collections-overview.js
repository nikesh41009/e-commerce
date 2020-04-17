import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {Collection} from '../collection/collection.jsx';
import  {selectCollectionsForPreview} from '../../redux/shop/shop.selector';
import './collections-overview.scss';
const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
     {
                collections.map(({id,...Collections}) => (
                <Collection key ={id} {...Collections} />
                )) 
                }
  </div>
);

const mapStateToProps =createStructuredSelector({
    collections:selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);