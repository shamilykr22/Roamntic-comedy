import { connect } from 'react-redux';
import MovieList from './movieList';

export { default as reducers } from './reducers';

const mapStateToProps = state => ({
  data: state.movieList.get('data')
});

const mapDispatchToProps = dispatch => ({
  init: () => {
    dispatch({ type: 'MOVIE:LIST:FETCH' });
  },
  getNextData: () => {
    dispatch({ type: 'MOVIE:MOVIE:NEXT:FETCH' });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
