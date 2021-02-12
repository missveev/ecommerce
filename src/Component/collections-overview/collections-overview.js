import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import './collections-overview.scss';
import CollectionPreview from "../preview-collection/preview-collection";
import {selectCollectionForPreview} from "../../redux/shop/shop.selector";
import {MDBContainer} from "mdbreact";

const CollectionsOverview =({collections}) => (
    <section id="collection-section" className='text-center my-5'>
        <MDBContainer>
    <div className='collections-overview'>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }

    </div>
        </MDBContainer>
    </section>
);


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
});
export default connect(mapStateToProps)(CollectionsOverview);