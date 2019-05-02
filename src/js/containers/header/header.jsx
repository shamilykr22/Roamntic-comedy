import React from 'react';
import Image from 'react-bootstrap/lib/Image';
import { logoStyle, SearchIconStyle } from './styles';


export class Header extends React.Component {
  static logo = 'assets/icons/Back.png';
  static searchIcon = 'assets/icons/search.png';

  render() {
    return (
      <div style={{ backgroundColor: 'black', height: 400, display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: '20%' }}>
          <Image
            src={Header.logo}
            {...logoStyle}
          />
        </div>
        <div style={{ color: 'white', fontSize: 30, marginTop: 10, width: '60%' }}>
        Romatic comedy
        </div>
        <div style={{ width: '20%' }}>
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
