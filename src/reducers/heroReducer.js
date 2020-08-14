import {
  UPDATE_HEROES,
  ADD_CURRENT_HERO,
  ADD_CURRENT_OPTION,
} from "../actions/index";

export const initialState = {
  heroResults: [],
  currentHero: null,
  option: null,
};

const heroReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_HEROES:
      console.log("action payload", action.payload);
      return {
        ...state,
        heroResults: action.payload,
      };

    case ADD_CURRENT_HERO:
      return {
        ...state,
        currentHero: action.payload,
      };
    case ADD_CURRENT_OPTION:
      return {
        ...state,
        option: action.payload,
      };

    default:
      return state;
  }
};

export default heroReducer;
