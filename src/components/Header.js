import React from 'react';
import {StyleSheet, View} from 'react-native';
import {theme} from '../core/theme';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons/faArrowRightFromBracket';
import {IconButton, MD3Colors, Button} from 'react-native-paper';
import Logo from './Logo';
import {auth} from '../../firebaseConfig';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  const onLogOut = () => {
    console.log('121212');
    auth.signOut().then(() => navigation.navigate('Login'));
  };

  return (
    <View style={styles.header}>
      <Logo width={50} height={25} marginTop={8} />
      <IconButton
        onPress={onLogOut}
        size={10}
        icon={({size, color}) => {
          return (
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              color={theme.colors.primary}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 21,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: theme.colors.headerColor,
    position: 'absolute',
    width: '100%',
  },
});

export default Header;
