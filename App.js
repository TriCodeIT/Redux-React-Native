import React, {Component} from 'react';
import {createStore} from 'redux';
import Counter from './src/Counter';
import {Provider} from 'react-redux';

const initialState = {
  count: 5,
};

const reducer = (state = initialState, action) => {
  console.log(action);
  const payload = action.payload || 1;
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + payload,
      };
    case 'DECREMENT':
      return {
        count: state.count - payload,
      };
  }
  return state;
};

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}

export default App;
