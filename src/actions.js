import {
    CHANGE_SEARCH_FIELD,
    REQUEST_FRIENDS_FAILED,
    REQUEST_FRIENDS_SUCCESS,
    REQUEST_FRIENDS_PENDING
} from './constants';
import friends  from './models/friends.json';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestFriends = () => (dispatch) => {
    dispatch({ type: REQUEST_FRIENDS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => friends)
        .then(data => dispatch({ type: REQUEST_FRIENDS_SUCCESS, payload: data}))
        .catch(error => dispatch({ type: REQUEST_FRIENDS_FAILED, payload: error}))
}