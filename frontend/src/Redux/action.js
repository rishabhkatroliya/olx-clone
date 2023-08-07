import axios from 'axios';
import {DEL_CLASSIFIED_ADS_FAILURE,DEL_CLASSIFIED_ADS_REQUEST,DEL_CLASSIFIED_ADS_SUCCESS,FETCH_CLASSIFIED_ADS_SUCCESS,FETCH_CLASSIFIED_ADS_REQUEST,FETCH_CLASSIFIED_ADS_FAILURE,POST_CLASSIFIED_ADS_FAILURE,POST_CLASSIFIED_ADS_REQUEST,POST_CLASSIFIED_ADS_SUCCESS} from './actionTypes';


export const postClassifiedAdsRequest = () => {
    return{
        type:POST_CLASSIFIED_ADS_REQUEST
    }
};

export const postClassifiedAdsSuccess = (data) => {
    console.log("hhh",data);
    return{
        type:POST_CLASSIFIED_ADS_SUCCESS,
        payload:data
    }
};

export const postClassifiedAdsFailure = () => {
    return{
        type:POST_CLASSIFIED_ADS_FAILURE
    }
};


export const postClassifiedAd = (product) => async (dispatch) => {
    dispatch(postClassifiedAdsRequest());

    try{
        const res=await axios.post(`http://localhost:8080/product/browse`,product);
        console.log("add",res);
        dispatch(postClassifiedAdsSuccess(res.data));

  } catch (error) {
    dispatch(postClassifiedAdsFailure())
}
};

export const deleteClassifiedAdsRequest = () => {
    return{
        type:DEL_CLASSIFIED_ADS_REQUEST
    }
};

export const deleteClassifiedAdsSuccess = (data) => {
    console.log("hhh",data);
    return{
        type:DEL_CLASSIFIED_ADS_SUCCESS,
        payload:data
    }
};

export const deleteClassifiedAdsFailure = () => {
    return{
        type:DEL_CLASSIFIED_ADS_FAILURE
    }
};


export const delClassifiedAd = (id) => async (dispatch) => {
    dispatch(deleteClassifiedAdsRequest());

    try{
        const res=await axios.delete(`http://localhost:8080/product/delete/${id}`);
        console.log("del",res);
        dispatch(deleteClassifiedAdsSuccess(res));


  } catch (error) {
    dispatch(deleteClassifiedAdsFailure())
}
};




export const fetchClassifiedAdsRequest = () => {
    return{
        type:FETCH_CLASSIFIED_ADS_REQUEST
    }
};

export const fetchClassifiedAdsSuccess = (data) => {
    console.log("hhh",data);
    return{
        type:FETCH_CLASSIFIED_ADS_SUCCESS,
        payload:data
    }
};

export const fetchClassifiedAdsFailure = () => {
    return{
        type:FETCH_CLASSIFIED_ADS_FAILURE
    }
};


export const fetchClassifiedAds = (filters) => async (dispatch) => {
    dispatch(fetchClassifiedAdsRequest());

  try {
    if(filters && filters.length>0){
        const res = await axios.get(`http://localhost:8080/product/browse?category=${filters.category}&search=${filters.search}&sortBy=${filters.sortBy}`);
        dispatch(fetchClassifiedAdsSuccess(res.data));

    }
    else{
        const res = await axios.get(`http://localhost:8080/product/browse`);
        dispatch(fetchClassifiedAdsSuccess(res.data));

    }

  } catch (error) {
    dispatch(fetchClassifiedAdsFailure())
}
};
