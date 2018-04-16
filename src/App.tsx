import * as React from 'react';
import Profile from './components/Profile';
import Counter from './components/Counter';

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
        <Counter/>
        {/* <CounterContainer />
        <TodoListContainer /> */}
      </div>
    );
  }
}

export default App;
