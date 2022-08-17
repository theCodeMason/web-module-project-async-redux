import { FETCH_ACTIVITY_START, FETCH_ACTIVITY_FAIL, FETCH_ACTIVITY_SUCCESS } from './../actions';


const initialState = {
    activity: {
        activity: 'Think of a new business idea',
        type: 'recreational',
        participants: 1,
        price: 0,
        link: ''
    },
    isFetching: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ACTIVITY_START:
            return {
                ...state,
                activity: {},
                isFetching: true,
                error: ''
            };
        case FETCH_ACTIVITY_FAIL:
            return {
                ...state,
                activity: {},
                isFetching: false,
                error: action.payload
            };
        case FETCH_ACTIVITY_SUCCESS:
            return {
                ...state,
                activity: action.payload,
                isFetching: false,
                error: ''
            }
        default:
            return state;
    }
};
