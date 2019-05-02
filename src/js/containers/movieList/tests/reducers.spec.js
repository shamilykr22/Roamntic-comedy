import Immutable from 'immutable';
import reducers from '../reducers';

const defaultState = Immutable.fromJS({
  error: Immutable.Map({
    message: '',
    isError: false
  }),
  data: {},
  pageNumber: 0
});

describe('containers/movieList/reducers', () => {
  describe('state', () => {
    it('should export `reducers`', () => {
      expect(reducers)
        .toBeDefined();
    });

    it('should return the same state', () => {
      const startState = defaultState.set('anotherValue', 'someValue');
      const expectedState = startState;

      expect(
        reducers(startState, {}).toJSON()
      ).toEqual(expectedState.toJSON());
    });
  });

  describe('actions', () => {
    it('should handle MOVIE:LIST:INIT', () => {
      const resultState = reducers(
        defaultState
          .set('data', defaultState.get('data')),
        { type: 'MOVIE:LIST:INIT' }
      ).toJSON();

      expect(resultState.data)
        .toEqual({});
    });
  });
});
