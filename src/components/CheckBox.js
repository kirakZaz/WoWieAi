import React from 'react';
import _ from 'lodash';
import {Pressable, StyleSheet, Text, View} from 'react-native';
// import {MaterialCommunityIcons} from '@expo/vector-icons';
import {theme} from '../core/theme';
// import Icon from 'react-native-vector-icons/MaterialIcons';

const CheckBox = ({title, onPress, isChecked}) => {
  const iconName = isChecked ? 'checkbox-marked' : 'checkbox-blank-outline';

  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        {/*<Icon*/}
        {/*  name={'keyboard-arrow-down'}*/}
        {/*  size={30}*/}
        {/*  color={theme.colors.white}*/}
        {/*/>*/}
        {/*<MaterialCommunityIcons name={iconName} size={24} color="#000" />*/}
        {/*<Icon*/}
        {/*  name={'keyboard-arrow-down'}*/}
        {/*  size={30}*/}
        {/*  color={theme.colors.white}*/}
        {/*/>*/}
      </Pressable>
      <Text style={styles.title}>{_.startCase(title)}</Text>
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: 150,
    marginTop: 5,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 16,
    color: theme.colors.text,
    marginLeft: 5,
    fontWeight: '600',
  },
});
