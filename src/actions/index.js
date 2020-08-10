export const UPDATE_HEROES = 'UPDATE_HEROES';
export const UPDATE = 'UPDATE';

export const updateHeroes = results => ({
  type: UPDATE_HEROES,
  payload: results,
});

export const updateFromReduxStore = () => ({
  type: UPDATE,
});
