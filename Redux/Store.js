import { createStore } from 'redux'
​

const defaultState={

}
function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state;
    default:
      return state;
  }
}
​
const store = createStore(reducer);
​