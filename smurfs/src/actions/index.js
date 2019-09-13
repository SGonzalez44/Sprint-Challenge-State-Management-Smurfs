import axios from 'axios';

export const FETCHING_SMURFS_START = "FETCHING_SMURFS_START";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCHING_SMURFS_START });
    axios
        .get("http://localhost:3333/smurfs/")
        .then(res => {
            dispatch({ 
                type: FETCHING_SMURFS_SUCCESS,
                PAYLOAD: res.data });
        })
};