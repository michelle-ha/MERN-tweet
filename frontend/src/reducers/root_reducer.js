import { combineReducers } from 'redux';
import session from './session_reducer';
<<<<<<< HEAD
import errors from "./errors_reducer";
import tweets from './tweets_reducer';


const RootReducer = combineReducers({
  session,
  errors,
  tweets
=======

const RootReducer = combineReducers({
  session
>>>>>>> eb681c57e46ddaebf195b9577c740c61c90230f7
});

export default RootReducer;