import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/lib/Image';
import DivWrapper from '../../components/divWrapper';

const imageStyle = { marginBottom: 16,
  paddingTop: 30,
  display: 'block',
  height: '81%',
  width: '90%',
  marginLeft: 30
};
class MovieList extends React.Component {
  static poster1 = 'assets/posters/poster1.jpg';
  static poster2 = 'assets/posters/poster2.jpg';
  static poster3 = 'assets/posters/poster3.jpg';
  static poster4 = 'assets/posters/poster4.jpg';
  static poster5 = 'assets/posters/poster5.jpg';
  static poster6 = 'assets/posters/poster6.jpg';
  static poster7 = 'assets/posters/poster7.jpg';
  static poster8 = 'assets/posters/poster8.jpg';
  static poster9 = 'assets/posters/poster9.jpg';
  static missingPoster = 'assets/posters/placeholder_for_missing_posters.png';
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
    this.getPoster = this.getPoster.bind(this);
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
  // eslint-disable-next-line class-methods-use-this
  getPoster(image) {
    switch (image) {
      case 'poster1.jpg':
        return MovieList.poster1;
      case 'poster2.jpg':
        return MovieList.poster2;
      case 'poster3.jpg':
        return MovieList.poster3;
      case 'poster4.jpg':
        return MovieList.poster4;
      case 'poster5.jpg':
        return MovieList.poster5;
      case 'poster6.jpg':
        return MovieList.poster6;
      case 'poster7.jpg':
        return MovieList.poster7;
      case 'poster8.jpg':
        return MovieList.poster8;
      case 'poster9.jpg':
        return MovieList.poster9;

      default:
        return MovieList.missingPoster;
    }
  }
  getNextData() {
    this.props.getNextData();
  }
  render() {
    const { data } = this.state;
    return (
      <DivWrapper style={{ height: '100%' }} onScrollStop={this.getNextData}>
        <div style={{ display: 'flex', width: '100%', alignContent: 'space-around', flexWrap: 'wrap' }}>
          { data.content &&
            data.content.map(item => (<div style={{ width: '33.33%', backgroundColor: 'black', height: 550 }}>
              <Image
                src={this.getPoster(item.posterimage)}
                style={imageStyle}
              /><div style={{ color: 'white', fontSize: 22, marginLeft: 30, marginTop: 24 }}>
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
  prevLocation: '/privacyrecords',
  init: e => e,
  getNextData: e => e
};

export default MovieList;
