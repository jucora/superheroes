import {
  UPDATE_HEROES,
  updateHeroes,
  ADD_CURRENT_HERO,
  addCurrentHero,
  ADD_CURRENT_OPTION,
  addCurrentOption,
} from '../actions/index';

describe('actions', () => {
  it('should create an action to update heroes', () => {
    const payload = [];
    const expectedAction = {
      type: UPDATE_HEROES,
      payload,
    };
    expect(updateHeroes(payload)).toEqual(expectedAction);
  });

  it('should create an action to add a current hero to show its information', () => {
    const payload = [];
    const expectedAction = {
      type: ADD_CURRENT_HERO,
      payload,
    };
    expect(addCurrentHero(payload)).toEqual(expectedAction);
  });

  it('should create an action to add a current option to show hero information for a selected area(Appearance, Biography, Powerstats', () => {
    const payload = [];
    const expectedAction = {
      type: ADD_CURRENT_OPTION,
      payload,
    };
    expect(addCurrentOption(payload)).toEqual(expectedAction);
  });
});
