import React from 'react';
import PropTypes from 'prop-types';
import {Image} from 'react-native';

export default function Logo({width, height, marginTop}) {
  return (
    <Image
      source={require('../assets/wowie.png')}
      style={{width: width, height: height, marginTop: marginTop}}
    />
  );
}

Logo.defaultProps = {
  width: 110,
  height: 110,
  marginTop: 0,
};

Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  marginTop: PropTypes.number,
};
