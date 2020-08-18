import heroReducer from '../reducers/heroReducer';
import {
  UPDATE_HEROES,
  ADD_CURRENT_HERO,
  ADD_CURRENT_OPTION,
} from '../actions/index';

describe('heroReducer', () => {
  it('should return the initial state', () => {
    expect(heroReducer(undefined, {})).toEqual({
      heroResults: [],
      currentHero: null,
      option: null,
    });
  });

  it('should handle UPDATE_HEROES', () => {
    expect(
      heroReducer(undefined, {
        type: UPDATE_HEROES,
        payload: [{ hero1: 'hero1' }, { hero2: 'hero2' }],
      }),
    ).toEqual({
      heroResults: [{ hero1: 'hero1' }, { hero2: 'hero2' }],
      currentHero: null,
      option: null,
    });
  });

  it('should handle ADD_CURRENT_HERO', () => {
    expect(
      heroReducer(undefined, {
        type: ADD_CURRENT_HERO,
        payload: [{ currentHero: 'superman' }],
      }),
    ).toEqual({
      heroResults: [],
      currentHero: [{ currentHero: 'superman' }],
      option: null,
    });
  });

  it('should handle ADD_CURRENT_OPTION', () => {
    expect(
      heroReducer(undefined, {
        type: ADD_CURRENT_OPTION,
        payload: 'biography',
      }),
    ).toEqual({
      heroResults: [],
      currentHero: null,
      option: 'biography',
    });
  });
});
