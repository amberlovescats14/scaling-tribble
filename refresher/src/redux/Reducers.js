import { combineReducers } from 'redux'

const test = (state = "", action) => {
  const {type} = action
  switch (type) {
    default: return state;
  }
}

// const test = {
//   principles : [],
//   loading: true
// }

export const getPrinciples = (state = {}, action) => {
  const {payload, type} = action
  console.log(`PAYLOAD: ${action.payload}`);
  switch(type) {
    case 'GET_PRINCIPLES':
      console.log("inside ");
      return {
        ...state,
        principles: payload,
        loading: false
      }
      // case add principle
      // case update principle
      // case delete principle
    default: {
      console.log("default");
      return state
    }
  }
}

export default combineReducers({
  test,
  principlesObject: getPrinciples
})