import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import Header from './Header';
import {theme} from '../core/theme';

const Container = ({children, position}) => {
  let style;
  if (position === 'top') {
    style = styles.containerTop;
  } else {
    style = styles.container;
  }

  return (
    <View style={styles.wrapper}>
      <Header />
      <View style={style}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 40,
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.surface,
  },
  containerTop: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.surface,
  },
});
Container.defaultProps = {
  position: 'center',
};

Container.propTypes = {
  position: PropTypes.string,
};
export default Container;
