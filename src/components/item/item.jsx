import React from 'react';
import './items.scss';
import {withRouter} from 'react-router-dom';

const Item = ({title,imageUrl,size,history,linkUrl,match}) =>
(
    <div className= {`${size} item`} 
    onClick = {() => history.push (`${match.url}${linkUrl}`)}> 
        <div className ="background"
        style=   {{
            backgroundImage:`url(${imageUrl})`
                }} />
        
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>

);

export default withRouter(Item) ;