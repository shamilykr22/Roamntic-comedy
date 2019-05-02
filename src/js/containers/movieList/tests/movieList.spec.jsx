import React from 'react';
import renderer from 'react-test-renderer';

describe('container/movieList/movieList', () => {
  beforeEach(() => {
    class ReactComponent extends React.Component {
      render () {
        return (<div />);
      }
    }
    jest.mock('react-custom-scrollbars', () => ({ Scrollbars: ReactComponent }));
  });

  it('has correct default options', () => {
    const MovieList = require('../movieList').default; // eslint-disable-line global-require
    const component = renderer.create(
      <MovieList />
    );
    const divWrapperComponent = component.toJSON();
    expect(divWrapperComponent).toMatchSnapshot();
  });
});
