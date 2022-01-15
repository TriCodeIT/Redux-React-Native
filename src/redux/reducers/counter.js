import { INCREMENT, DECREMENT, RESET} from '../actions/types'

const initialState = {
  count: 0,
};

const counter = (state = initialState, action) => {
  console.log(action);
  const payload = action.payload || 1
  
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + payload
      };
    case DECREMENT:
      return {
        count: state.count - payload
      };
    case RESET: 
    return {
        count: 0
    }
  }
  return state;
};

export default counter
