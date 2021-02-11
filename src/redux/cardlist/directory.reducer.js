import foods from "../../Component/Cards/SalesImages/food.jpg";
import baby from "../../Component/Cards/SalesImages/baby.jpg";
import drink from "../../Component/Cards/SalesImages/drink.jpg";
import cleaning from "../../Component/Cards/SalesImages/cleaning.jpg";
import kitchen from "../../Component/Cards/SalesImages/kitchen.jpg";

const INITIAL_STATE = {
    sections: [{
        title: 'Food',
        imageUrl: foods,
        id: 1,
        linkUrl: 'shop/foods'
    },
        {
            title: 'Baby Product',
            imageUrl: baby,
            id: 2,
            linkUrl: 'shop/babyproduct'
        },
        {
            title: 'Drinks',
            imageUrl: drink,
            id: 3,
            linkUrl: 'shop/drinks'
        },
        {
            title: 'Household Cleaning',
            imageUrl: cleaning,
            size: 'large',
            id: 4,
            linkUrl: 'shop/household'
        },
        {
            title: 'Home&Kitchen',
            imageUrl: kitchen,
            size: 'large',
            id: 5,
            linkUrl: 'shop/kitchen'
        }]

};
const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
export default directoryReducer;