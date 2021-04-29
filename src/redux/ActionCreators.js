import * as ActionTypes from './ActionTypes'; //* acts as a wildcard that lets us import all the named actions from the ActionsTypes.js at once 
import { CAMPSITES } from '../shared/campsites'

export const addComment = (campsiteId,rating,author,text) => ({
 type:ActionTypes.ADD_COMMENT, //this lets us access ADD_COMMENTS export without explicitly defining it.
 payload: {
  campsiteId:campsiteId,
  rating:rating,
  author:author,
  text:text
 }
});

export const fetchCampsites = () => (dispatch) => { //the 2 arrows means that we've nested an arrow function inside of another arrow function
  dispatch(campsitesLoading());

  setTimeout(() => {
    dispatch(addCampsites(CAMPSITES))
  }, 2000); //simulates a 2 min delay
}

export const campsitesLoading = () => ({
  type: ActionTypes.CAMPSITES_LOADING,
});

export const campsitesFailed = (errMess) => ({
  type: ActionTypes.CAMPSITES_FAILED,
  payload: errMess,
});

export const addCampsites = (campsites) => ({
  type: ActionTypes.ADD_CAMPSITES,
  payload: campsites,
});