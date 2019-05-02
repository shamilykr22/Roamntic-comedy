import React from 'react';

describe('components/divWrapper/index', () => {
  it('should exist', () => {
    class FauxDivWrapper extends React.Component {
      render () {
        return (<div>FauxDivWrapper</div>);
      }
    }

    jest.mock('../divWrapper', () => FauxDivWrapper);

    const DivWrapper = require('../index').default; // eslint-disable-line global-require
    expect(DivWrapper).toEqual(FauxDivWrapper);
  });
});
