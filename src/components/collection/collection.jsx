import React from 'react';
import './collection.scss';
import CollectionItem from './collection-item.jsx';

const Collection = ({title,items}) =>
(
    <div className ="collections">
        <h1 className="title"> {title} </h1>
        < div className ="Preview">
           
        {
        items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default Collection; 