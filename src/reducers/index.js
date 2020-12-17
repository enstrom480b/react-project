
import {SET_RECIPES} from '../actions';
import {combineReducers} from 'redux';
function recipes(state=[],action)
{

    switch(action.type)
    {

       case SET_RECIPES:
       return action.items
       default:
       return state;
    }
}
const rootreducer=combineReducers({recipes})
export default rootreducer 