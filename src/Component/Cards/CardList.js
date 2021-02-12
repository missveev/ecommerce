import React from 'react';
import MenuItem from "./CardListMenu";
import {selectDirectorySections} from "../../redux/cardlist/directory.selector";
import {createStructuredSelector} from "reselect";
import {connect} from 'react-redux';
import './HeaderCard.css';
import {MDBContainer, MDBGallery} from "mdbreact";


const CardList=({sections})=>(
            <section id="grab" className='text-center my-5'>
                <h2 className='h1-responsive font-weight-bold text-center my-5'>Grab N Go</h2>
               <MDBContainer>
                    <div className="row cardlist">

                        {
                            sections.map(({id, ...otherSectionProps}) => (
                                <MenuItem key={id} {...otherSectionProps}/>
                            ))
                        }
                    </div>
               </MDBContainer>
            </section>
        );
const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})
export default connect(mapStateToProps) (CardList);