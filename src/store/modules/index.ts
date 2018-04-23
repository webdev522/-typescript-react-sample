import { combineReducers } from 'redux';
import counter, { CounterState } from './counter';

export default combineReducers({
  counter
});

// store state type definition
export interface StoreState {
  counter: CounterState;
}