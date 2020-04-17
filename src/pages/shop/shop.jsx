import React from 'react';
import './shop.scss';
import {Route} from 'react-router-dom'; 
import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection/collection';

 const Shop = ({match}) =>
 ( 

            <div className ="shoppage"> 
            <Route exact path = {`${match.path}`} component = {CollectionsOverview} />
            <Route  path = {`${match.path}/:collectionId`}  component ={CollectionPage}  />
            </div>
 );

export default Shop;