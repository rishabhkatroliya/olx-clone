import { FETCH_CLASSIFIED_ADS_SUCCESS,POST_CLASSIFIED_ADS_SUCCESS,DEL_CLASSIFIED_ADS_SUCCESS } from "./actionTypes";


const initialState = {
    classifiedAds:[]
};


export const reducer = (state=initialState,action) => {

    switch(action.type){
     case FETCH_CLASSIFIED_ADS_SUCCESS : {
        return{classifiedAds:action.payload}
     }
     case POST_CLASSIFIED_ADS_SUCCESS : {
        return{classifiedAds:[...state.classifiedAds,action.payload]}
     }
     case DEL_CLASSIFIED_ADS_SUCCESS:{
        return{classifiedAds:[...state.classifiedAds]};
      }
        default : return state;

    }
};
