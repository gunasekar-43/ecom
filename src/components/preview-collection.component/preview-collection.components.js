 import React from 'react';
 import './preview-collection.components.scss';
 import CollectionItem from '../collection-items/collection-items.component';

 const CollectionPreview  = ({title , items}) => {
    return (
        <div className='collection-preview'>
            <h1 className="title">{title.toUpperCase}</h1>
            <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
        </div>
    )
};
export default  CollectionPreview;
