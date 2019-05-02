import appReducer from './app';
import intl from '../translation/reducers';
import movieList from '../containers/movieList/reducers';


export default {
  app: appReducer,
  intl,
  movieList
};
