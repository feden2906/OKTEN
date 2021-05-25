import {createStore} from "redux";

  let initialState = {
    counter: 0
  }

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {...state, counter: state.counter + action.payload};
      case 'DECREMENT':
        return {...state, counter: state.counter - action.payload};
      case 'RESET':
        return {...state, counter: 0};
      default:
        return state;
    }
  }

 export const store = createStore(reducer);


