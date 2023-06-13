import React from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from '../../firebaseConfig';
import {StyleSheet, View, Text} from 'react-native';

const StartScreen = ({navigation}) => {
  onAuthStateChanged(auth, user => {
    if (!user) {
      console.log('user not exists');
      navigation.navigate('Login');
    } else {
      navigation.reset({
        index: 0,
        routes: [{name: 'Configurations'}],
      });
    }
  });

  return (
    // <View>
    //   <Text>test</Text>
    // </View>
    <Background>
      <Logo />
      <Paragraph>Hello</Paragraph>

      <Paragraph>
        The easiest way to start with your amazing application.
      </Paragraph>
      <Button mode="contained" onPress={() => navigation.navigate('Login')}>
        Login
      </Button>
      <Button mode="outlined" onPress={() => navigation.navigate('Register')}>
        Sign Up
      </Button>
    </Background>
  );
};

export default StartScreen;
