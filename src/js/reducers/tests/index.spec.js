import index from '../index';

describe('reducers/index', () => {
  const reducerNames = ['app', 'intl'];

  it('should be a module', () => {
    expect(index)
      .toBeDefined();
  });

  it('should be an object', () => {
    expect(index)
      .toBeInstanceOf(Object);
  });

  describe('exports reducers', () => {
    reducerNames.forEach((reducerName) => {
      it(`should export ${reducerName}`, () => {
        expect(index[reducerName])
          .toBeDefined();
        expect(index[reducerName])
          .toBeInstanceOf(Function);
      });
    });
  });
});
