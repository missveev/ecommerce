import React from 'react';
import CollectionItem from "../collection-item/collection-item";
import './preview-collection.scss';
import {MDBContainer} from "mdbreact";
const CollectionPreview = ({title, items}) => (

    <div className='collection-preview'>
        <MDBContainer>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((item, index) => index <5).map((item )=> (
                    <CollectionItem key={item.id} item={item}/>
                ))}
        </div>
        </MDBContainer>
    </div>

);
export default CollectionPreview;