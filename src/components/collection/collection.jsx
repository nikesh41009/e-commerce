import React from 'react';
import './collection.scss';
import CollectionItem from './collection-item.jsx';

export const Collection = ({title,items}) => (
    <div className ="collections">
        <h1 className="title"> {title} </h1>
        < div className ="Preview">
        {
        items
        .filter((item, idx) => idx < 4)
        .map(( item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

 