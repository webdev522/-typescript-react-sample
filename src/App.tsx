import * as React from 'react';
import Profile from './components/Profile';
import CounterContainer from './containers/CounterContainer';
import TodoListContainer from './containers/TodoListContainer';
// import TodoList from './components/TodoList';

// import CounterContainer from './containers/CounterContainer';
// import TodoListContainer from './containers/TodoListContainer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Profile
          name="webdev522"
          job="react expert"
        />
        <CounterContainer/>
        <TodoListContainer />
        {/* <TodoList/> */}
        {/* <CounterContainer />
        <TodoListContainer /> */}
      </div>
    );
  }
}

export default App;
