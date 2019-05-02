import React from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';

class DivWrapper extends React.Component {
  render () {
    const { children, ...rest } = this.props;
    return (
      <Scrollbars
        renderThumbVertical={({ style, ...props }) => (<div
          {...props}
          style={{ ...style,
            backgroundColor: 'black',
            width: '7px',
            color: 'black',
            borderRadius: 'inherit' }}
          onScrollStop={this.props.onScrollStop}
        />)}
        renderThumbHorizontal={() => (<div style={{ display: 'none' }} />)}
        {...rest}
      >{children}
      </Scrollbars>
    );
  }
}

DivWrapper.propTypes = {
  children: PropTypes.node,
  onScrollStop: PropTypes.func
};

DivWrapper.defaultProps = {
  children: null,
  onScrollStop: e => e
};

export default DivWrapper;
