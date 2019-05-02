import Immutable from 'immutable';
import page1 from './PAGE1.json';
import page2 from './PAGE2.json';
import page3 from './PAGE3.json';

const defaultState = Immutable.fromJS({

  actionError: Immutable.Map({
    message: '',
    isError: false
  }),
  data: {},
  pageNumber: 0
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'MOVIE:LIST:INIT':
      return state.set('actionError', defaultState.get('actionError'))
        .set('data', defaultState.get('data'))
        .set('pageNumber', defaultState.get('pageNumber'));
    case 'MOVIE:LIST:FETCH': {
      return state.set('actionError', defaultState.get('actionError'))
        .set('data', page1.page.contentitems)
        .set('pageNumber', 1);
    }
    case 'MOVIE:MOVIE:NEXT:FETCH': {
      let newData = {};
      if (state.get('pageNumber') === 1) {
        newData = page2;
      } else if (state.get('pageNumber') === '2') {
        newData = page3;
      } else {
        return state.set('actionError', defaultState.get('actionError'))
        .set('data', state.get('data'))
        .set('pageNumber', state.get('pagenumrequested'));
      }
      const array = state.get('data').content;
      const array2 = newData.page.contentitems.content;

      const array1 = array.concat(array2);
      return state.set('actionError', defaultState.get('actionError'))
        .set('data', { content: array1 })
        .set('pageNumber', newData.page.pagenumrequested);
    }
    default:
      return state;
  }
};
