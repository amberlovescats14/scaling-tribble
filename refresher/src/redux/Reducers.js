import {combineReducers} from 'redux';

const testing = (state = "", action) => {
  const {type} = action
  switch (type) {
    default: return state;
  }
}

const designPrinciplesState = {
  principles : [],
  loading: true
}

export const getPrinciples = (state = designPrinciplesState, action) => {
  const {payload, type} = action
  switch(type) {
    case 'GET_PRINCIPLES':
      return {
        ...state,
        principles: payload,
        loading: false
      }
      // case add principle
      // case update principle
      // case delete principle
    default: return state
  }
}

export default combineReducers({
  test: testing,
  principlesObject: getPrinciples
})