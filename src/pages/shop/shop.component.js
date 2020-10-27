
import React from 'react';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/preview-collection.component/preview-collection.components';

class SHOPPAGES extends React.Component  {

    constructor(){
        super();

        this.state = {

            collection: SHOP_DATA
        }
        
        }
        render(){
            const {collection} = this.state;
            return(
                <div className="shop-page">
                    {
                        collection.map(({id, ...othercollectionprops}) =>(
                        < CollectionPreview key={id}{...othercollectionprops}/>))
                    }
                </div>
            );
            
    }

};
export default SHOPPAGES  ;