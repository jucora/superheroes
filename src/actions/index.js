export const UPDATE_HEROES = 'UPDATE_HEROES';
export const ADD_CURRENT_HERO = 'ADD_CURRENT_HERO';
export const ADD_CURRENT_OPTION = 'ADD_CURRENT_OPTION';

export const updateHeroes = results => ({
  type: UPDATE_HEROES,
  payload: results,
});

export const addCurrentHero = hero => ({
  type: ADD_CURRENT_HERO,
  payload: hero,
});

export const addCurrentOption = option => ({
  type: ADD_CURRENT_OPTION,
  payload: option,
});
