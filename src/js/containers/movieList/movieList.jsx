import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/lib/Image';
import DivWrapper from '../../components/divWrapper';

const imageStyle = { marginBottom: 16,
  paddingTop: 30,
  display: 'block',
  height: '81%',
  width: '90%',
  marginLeft: 10
};
const WrapperDivStyle =
{ paddingLeft: 25, paddingRight: 15, display: 'flex', width: '100%', flexWrap: 'wrap', height: '100%' };
class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
    this.getNextData = this.getNextData.bind(this);
  }

  componentDidMount() {
    if (this.props.init) {
      this.props.init();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data) {
      this.setState({
        data: nextProps.data
      });
    }
  }

  getNextData() {
    this.props.getNextData();
  }
  render() {
    const { data } = this.state;
    return (
      <DivWrapper style={{ height: '100%', backgroundColor: '#171717' }} onScrollStop={this.getNextData}>
        <div style={WrapperDivStyle}>
          { data.content &&
            data.content.map(item => (<div style={{ width: '32.333%', height: '33.33%', marginTop: 30 }}>
              <Image
                src={`assets/posters/${item.posterimage}`}
                style={imageStyle}
              /><div style={{ color: 'white', fontSize: 26, marginTop: 24, marginLeft: 10 }}>
                {item.name}
              </div>
            </div>))}
        </div>
      </DivWrapper>
    );
  }
}

MovieList.propTypes = {
  data: PropTypes.shape({}),
  getNextData: PropTypes.func,
  init: PropTypes.func
};

MovieList.defaultProps = {
  data: {},
  init: e => e,
  getNextData: e => e
};

export default MovieList;
