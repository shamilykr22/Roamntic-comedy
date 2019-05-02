import Immutable from 'seamless-immutable';
import appReducer from '../app';

describe('reducers/app', () => {
  const defaultState = Immutable.flatMap(
    {
      headerMenu: [],
      menuItemCategory: null,
      isOnInit: false,
      showDrawer: true
    }
  );

  describe('state', () => {
    it('should return the default state', () => {
      expect(
        appReducer(undefined, {})).toEqual(defaultState);
    });

    it('should return the same state', () => {
      const startState = Immutable.set(defaultState, 'anotherValue', 'someValue');
      const expectedState = startState;
      expect(appReducer(startState, {})).toEqual(expectedState);
    });
  });

  describe('actions', () => {
    it('should handle APP:INIT', () => {
      expect(Immutable.asMutable(appReducer(undefined, { type: 'APP:INIT' })).isOnInit)
        .toBeTruthy();
    });

    it('should handle APP:INIT:SUCCESS', () => {
      expect(Immutable.asMutable(appReducer(undefined, { type: 'APP:INIT:SUCCESS' })).isOnInit)
        .toBeFalsy();
    });

    it('should handle APP:INIT:FAIL', () => {
      expect(Immutable.asMutable(appReducer(undefined, { type: 'APP:INIT:FAIL' })).isOnInit)
        .toBeFalsy();
    });

    it('should handle APP:CHANGE_MENU_ITEM_CATEGORY', () => {
      const menuItemCategory = Immutable.flatMap();
      expect(Immutable.asMutable(appReducer(undefined,
        { type: 'APP:CHANGE_MENU_ITEM_CATEGORY', menuItemCategory })).menuItemCategory)
        .toBe(menuItemCategory);
    });

    it('should handle APP:LEFT_NAV:TOGGLE', () => {
      const resultState = appReducer(undefined, { type: 'APP:LEFT_NAV:TOGGLE' });
      expect(Immutable.asMutable(resultState).showDrawer)
        .toBeFalsy();
      expect(Immutable.asMutable(appReducer(resultState, { type: 'APP:LEFT_NAV:TOGGLE' })).showDrawer)
        .toBeTruthy();
    });

    it('should handle APP:LEFT_NAV:OPEN', () => {
      expect(Immutable.asMutable(appReducer(undefined, { type: 'APP:LEFT_NAV:OPEN' })).showDrawer)
        .toBeTruthy();
    });

    it('should handle APP:LEFT_NAV:CLOSE', () => {
      expect(Immutable.asMutable(appReducer(undefined, { type: 'APP:LEFT_NAV:CLOSE' })).showDrawer)
        .toBeFalsy();
    });

    it('should handle APP:HEADER_MENU:SET', () => {
      const headerMenu = Immutable.flatMap();
      expect(Immutable.asMutable(appReducer(undefined, { type: 'APP:HEADER_MENU:SET', headerMenu })).headerMenu)
        .toBe(headerMenu);
    });
  });
});
