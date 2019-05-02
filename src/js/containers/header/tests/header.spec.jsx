import React from 'react';
import renderer from 'react-test-renderer';

describe('containers/header/header', () => {
  it('has correct default options', () => {
    const Header = require('../header').default; // eslint-disable-line global-require
    const component = renderer.create(
      <Header />
    );
    const divWrapperComponent = component.toJSON();
    expect(divWrapperComponent).toMatchSnapshot();
  });
});
