import React from 'react';
import CollectionItem from "../../Component/collection-item/collection-item";
import {connect} from 'react-redux';
import {selectCollection} from "../../redux/shop/shop.selector";

import './Collection.scss';
import {MDBContainer} from "mdbreact";

const CollectionPage =({collection})=> {
    const {title, items} = collection;
    return (
        <section id="collection-page" className='text-center my-5'>
            <MDBContainer>
            <h2 className='h1-responsive font-weight-bold text-center my-5'>{title}</h2>
            <div className="row banner">

                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item}/>
                    )) }


        </div>
            </MDBContainer>
        </section>
    );
};
const mapStateToProps =(state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);