import { combineReducers } from 'redux';
import counter, { CounterState } from './counter';
import todos, { TodosState } from './todos';

export default combineReducers({
  counter,
  todos
});

// store state type definition
export interface StoreState {
  counter: CounterState;
  todos: TodosState;
}