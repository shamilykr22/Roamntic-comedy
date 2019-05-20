import { connect } from 'react-redux';
import HeaderComponent from './header';


const mapDispatchToProps = dispatch => ({
  search: (searchText) => {
    dispatch({ type: 'MOVIE:LIST:SEARCH', searchText });
  }
});

export default connect(null, mapDispatchToProps)(HeaderComponent);
