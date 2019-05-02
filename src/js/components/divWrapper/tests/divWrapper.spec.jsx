import React from 'react';
import renderer from 'react-test-renderer';

describe('components/divWrapper/component', () => {
  beforeEach(() => {
    class ReactComponent extends React.Component {
      render () {
        return (<div />);
      }
    }
    jest.mock('react-custom-scrollbars', () => ({ Scrollbars: ReactComponent }));
  });

  it('has correct default options', () => {
    const DivWrapper = require('../divWrapper').default; // eslint-disable-line global-require
    const component = renderer.create(
      <DivWrapper />
    );
    const divWrapperComponent = component.toJSON();
    expect(divWrapperComponent).toMatchSnapshot();
  });
});
