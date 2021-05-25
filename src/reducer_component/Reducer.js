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
      case '100_UP':
        return {...state, counter: state.counter + action.payload};
      case '100_DOWN':
        return {...state, counter: state.counter - action.payload};
      case 'USER_INC':
        return {...state, counter: state.counter + action.payload};
      case 'USER_DEC':
        return {...state, counter: state.counter - action.payload};
      case 'RESET':
        return {...state, counter: 0};
      default:
        return state;

    }

  }

 export const store = createStore(reducer);


