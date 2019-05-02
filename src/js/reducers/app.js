import Immutable from 'seamless-immutable';

const defaultState = Immutable.flatMap(
  {
    menuItemCategory: null,
    isOnInit: false,
    showDrawer: true,
    headerMenu: []
  }
);

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'APP:INIT':
      return Immutable.set(state, 'isOnInit', true);

    case 'APP:INIT:SUCCESS':
      return Immutable.set(state, 'isOnInit', false);

    case 'APP:INIT:FAIL':
      return Immutable.set(state, 'isOnInit', false);

    case 'APP:CHANGE_MENU_ITEM_CATEGORY':
      return Immutable.set(state, 'menuItemCategory', action.menuItemCategory);

    case 'APP:LEFT_NAV:TOGGLE':
      return Immutable.set(state, 'showDrawer', !Immutable.asMutable(state).showDrawer);

    case 'APP:LEFT_NAV:OPEN':
      return Immutable.set(state, 'showDrawer', true);

    case 'APP:LEFT_NAV:CLOSE':
      return Immutable.set(state, 'showDrawer', false);

    case 'APP:HEADER_MENU:SET':
      return Immutable.set(state, 'headerMenu', action.headerMenu);

    default :
      return state;
  }
};
