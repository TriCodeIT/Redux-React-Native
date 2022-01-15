import React, {Component} from 'react';
import Counter from './src/Counter';
import {Provider} from 'react-redux';
import store from './src/redux/store'

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
