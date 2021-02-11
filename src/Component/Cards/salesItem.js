import React from "react";
import SALES_DATA from "./SalesProductData";
import HeaderCard from "./HeaderCard";

class SalesItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SALES_DATA,
        };
    }
    render() {
        const {collections} = this.state;
        return (   <section id="deals" className='text-center my-5'>
            <h2 className='h1-responsive font-weight-bold text-center my-5'>WEEKLY DEALS</h2>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <HeaderCard key={id} {...otherCollectionProps} />
                ))
            }

        </section>);
    }
}
export default SalesItem;
