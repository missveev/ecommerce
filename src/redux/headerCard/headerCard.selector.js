import {createSelector} from "reselect";

const selectHeaderCard= state => state.headerCard;

export const selectSales= createSelector(
    [selectHeaderCard],
    headerCard => headerCard.sales
);