import React,{Component} from 'react';
import './shop.scss';
import Data from './data.jsx';
import Collection from '../../components/collection/collection.jsx';

class Shop extends Component 
{
constructor(props)
    {
        super(props);
         this.state = 
         {
             collections: Data
         }
    }
    render()
    {
        const {collections} =this.state;
        return (
            <div className ="shoppage"> 
                {
                collections.map(({id,...Collections}) => (
                <Collection key ={id} {...Collections} />
                )) 
                }
            </div>
        )
    }

}

export default Shop;