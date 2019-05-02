import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Header from '../containers/header';
import MovieListPage from '../pages/movieList';

import { contentWrapperStyle, style } from './styles';

class MainLayout extends React.Component {
  render() {
    return (
      <div {...style}>
        <Header />
        <div {...contentWrapperStyle}>
          <Route path="/" component={MovieListPage} />
        </div>
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainLayout;
