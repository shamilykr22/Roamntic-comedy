import React from 'react';
import Immutable from 'immutable';

describe('js/containers/movieList/index', () => {
  let wrapWithConnect;
  let connect;
  const expectedContainerElement = {};

  beforeEach(() => {
    jest.resetModules();
    jest.unmock('immutable');
    wrapWithConnect = jest.fn(() => expectedContainerElement);
    connect = jest.fn(() => wrapWithConnect);

    jest.mock('react-redux', () => ({ connect }));
    jest.mock('../movieList', () => (<div />));
  });

  it('should call connect', () => {
    require('../index'); // eslint-disable-line global-require
    expect(connect).toBeCalled();
  });

  describe('connect function', () => {
    describe('mapStateToProps function', () => {
      beforeEach(() => {
        require('../index'); // eslint-disable-line global-require
      });
      it('should be an argument', () => {
        const mapStateToProps = connect.mock.calls[0][0];

        expect(mapStateToProps).toBeDefined();
        expect(mapStateToProps).toBeInstanceOf(Function);
      });
      it('should be fired', () => {
        const mapStateToProps = connect.mock.calls[0][0];

        const state = {
          movieList: Immutable.Map({
            data: {}
          })
        };

        const result = mapStateToProps(state);
        expect(result).toEqual({
          data: {}
        });
      });
    });

    describe('mapDispatchToProps function', () => {
      beforeEach(() => {
        require('../index'); // eslint-disable-line global-require
      });
      it('should be an argument', () => {
        const mapDispatchToProps = connect.mock.calls[0][1];

        expect(mapDispatchToProps).toBeDefined();
        expect(mapDispatchToProps).toBeInstanceOf(Function);
        expect(mapDispatchToProps.name).toBe('mapDispatchToProps');
      });
      it('should be fired getNextData', () => {
        const mapDispatchToProps = connect.mock.calls[0][1];
        const dispatch = jest.fn();
        const props = mapDispatchToProps(dispatch);

        expect(props).toBeDefined();
        expect(props.getNextData).toBeDefined();
        expect(props.getNextData).toBeInstanceOf(Function);

        props.getNextData();

        expect(dispatch).toHaveBeenCalledWith({ type: 'MOVIE:MOVIE:NEXT:FETCH' });
      });
    });
  });
});
