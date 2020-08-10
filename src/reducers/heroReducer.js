import { UPDATE_HEROES, UPDATE } from '../actions/index';

const initialState = {
  heroResults: [],
};

const heroReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_HEROES:
      return {
        heroResults: action.payload,
      };
    case UPDATE:
      return state;
    default:
      return state;
  }
};

export default heroReducer;
