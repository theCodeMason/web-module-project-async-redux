import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchActivityFail, FETCH_ACTIVITY_FAIL, getActivity } from './../actions';

const Activity = ({ activity, isFetching, error, dispatch }) => {

    useEffect(() => {
        dispatch(getActivity());
    }, []);

    if (error) {
        return <h2> There is an error: {error} </h2>;
    }

    if (isFetching) {
        return <h2> Searching for the perfect activity to cure your boredom! </h2>;
    }

    const handleClick = () => {
        dispatch(getActivity());
    }

    return (
        <div> 
            <div className='suggestion'>
                <h3>{activity.activity}</h3>
                <p>Type: {activity.type}</p>
                <p>Participants: {activity.participants}</p>
                <p>Price: ${activity.price}</p>
                <a href={activity.link}>{activity.link}</a>
            </div>
            <button onClick={handleClick}>Click for a new activity</button>
            <button onClick={() => {dispatch(fetchActivityFail('Error Triggered'));}}>Trigger an error</button>
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        activity: state.activity,
        isFetching: state.isFetching,
        error: state.error
    }
}
export default connect(mapStatetoProps)(Activity);
