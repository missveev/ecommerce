import SALES_DATA from "../../Component/Cards/SalesProductData";
const INITIAL_STATE ={
    sales: SALES_DATA
};

const headerCardReducer = (state = INITIAL_STATE, action)=> {
    switch (action.type) {
        default:
            return state;
    }
};
export default headerCardReducer;
