import React from 'react';
import Image from 'react-bootstrap/lib/Image';
import { logoStyle, SearchIconStyle } from './styles';

const wrapperDivStyle = {
  backgroundColor: '#171717',
  height: 500,
  display: 'flex',
  flexDirection: 'row'
};
const textStyle = { color: 'white', fontSize: 40, marginTop: 30, width: '85%', textAlign: 'start' };

export class Header extends React.Component {
  static logo = 'assets/icons/Back.png';
  static searchIcon = 'assets/icons/search.png';

  render() {
    return (
      <div style={wrapperDivStyle}>
        <div style={{ width: '10%' }}>
          <Image
            src={Header.logo}
            {...logoStyle}
          />
        </div>
        <div style={textStyle}>
        Romatic comedy
        </div>
        <div style={{ width: '5%' }}>
          <Image
            src={Header.searchIcon}
            {...SearchIconStyle}
          />
        </div>
      </div>
    );
  }
}
Header.displayName = 'Header';

export default Header;
