import axios from 'axios';

export const getActivity = () => (dispatch) => {
    dispatch(fetchActivityStart());
    axios.get('http://www.boredapi.com/api/activity')
        .then(resp => {
            dispatch(fetchActivitySuccess(resp.data));
        })
        .catch(err => {
            dispatch(fetchActivityFail(err));
        })
}

export const FETCH_ACTIVITY_START = 'FETCH_ACTIVITY_START';
export const fetchActivityStart = () => {
    return({type:FETCH_ACTIVITY_START});
}

export const FETCH_ACTIVITY_FAIL = 'FETCH_ACTIVITY_FAIL';
export const fetchActivityFail = (errorMessage) => {
    return({type:FETCH_ACTIVITY_FAIL, payload: errorMessage});
}

export const FETCH_ACTIVITY_SUCCESS = 'FETCH_ACTIVITY_SUCCESS'; 
export const fetchActivitySuccess = (activity) => {
    return({type:FETCH_ACTIVITY_SUCCESS, payload: activity});
}
