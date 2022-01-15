/*
increment: () => dispatch({type: 'INCREMENT'}),
  decrement: () => dispatch({type: 'DECREMENT'}),
  //   increment5: () => dispatch({type: 'INCREMENT', payload: 5}),
  //   decrement5: () => dispatch({type: 'DECREMENT', payload: 5}),
  reset: () => dispatch({type: 'RESET'}),
*/

import {INCREMENT, DECREMENT, RESET} from './types';

export const increment = payload => ({
  type: INCREMENT,
  payload,
});

export const decrement = payload => ({
  type: DECREMENT,
  payload,
});

export const reset = () => ({
  type: RESET,
});
