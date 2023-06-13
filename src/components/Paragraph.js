import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {theme} from '../core/theme';

const Paragraph = props => {
  const {bold, color} = props;
  return (
    <Text
      style={[
        styles.text,
        {
          fontWeight: bold ? '600' : '400',
          color: color,
        },
      ]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
    color: theme.colors.text,
  },
});

export default Paragraph;
