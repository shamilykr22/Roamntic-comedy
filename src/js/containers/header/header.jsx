import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/lib/Image';
import Input from '@material-ui/core/Input';
import { logoStyle, SearchIconStyle } from './styles';

const wrapperDivStyle = {
  backgroundColor: '#171717',
  height: 400,
  display: 'flex',
  flexDirection: 'row'
};
const textStyle = { color: 'white', fontSize: 40, marginTop: 30, width: '85%', textAlign: 'start' };

export class Header extends React.Component {
  static logo = 'assets/icons/Back.png';
  static searchIcon = 'assets/icons/search.png';
  constructor(props) {
    super(props);
    this.state = {
      search: false,
      searchText: ''
    };
    this.enableSearch = this.enableSearch.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.disableSearch = this.disableSearch.bind(this);
  }
  enableSearch() {
    this.setState({ search: true });
  }
  handleSearch(event) {
    this.setState({ searchText: event.target.value });
    this.props.search(event.target.value);
  }
  disableSearch() {
    if (this.state.search) {
      this.setState({ search: false });
    }
  }
  render() {
    return (
      <div style={wrapperDivStyle}>
        <div style={{ width: '10%' }}>
          <Image
            src={Header.logo}
            onClick={this.disableSearch}
            {...logoStyle}
          />
        </div>
        { !this.state.search &&
        <div style={textStyle}>
        Romatic comedy
        </div>}
        { this.state.search &&
        <div style={textStyle}>
          <Input
            placeholder="Search..."
            type="text"
            disableUnderline={true}
            value={this.state.searchText}
            style={{ width: '80%', height: 40, paddingTop: 20, color: 'white', fontSize: 40 }}
            onChange={this.handleSearch}
          />
        </div>}
        { !this.state.search &&
        <div style={{ width: '5%' }}>
          <Image
            src={Header.searchIcon}
            onClick={this.enableSearch}
            {...SearchIconStyle}
          />
        </div>}
      </div>
    );
  }
}
Header.propTypes = {
  search: PropTypes.func
};

Header.defaultProps = {
  search: e => e
};
Header.displayName = 'Header';

export default Header;
