import reducers from '../reducers';

const defaultState = {
  locale: 'en',
  messages: {},
  languages: [
    {
      name: 'Dutch',
      locale: 'nl'
    }
  ]
};

describe('translation/reducers', () => {
  describe('state', () => {
    it('should export `reducers`', () => {
      expect(reducers)
        .toBeDefined();
    });

    it('should return the default state', () => {
      const result = reducers(undefined, {});
      expect(result)
        .toBeDefined();
    });

    it('should return the same state', () => {
      const startState = Object.assign({}, defaultState, { anotherValue: 'someValue' });

      expect(
        reducers(startState, {})
      ).toEqual(startState);
    });
  });
});
