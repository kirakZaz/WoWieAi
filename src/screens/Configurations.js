import React from 'react';
import {View, StyleSheet, ImageBackground, ScrollView} from 'react-native';

import Paragraph from '../components/Paragraph';
import Accordion from '../components/Accordion';
import {dietRestrictionsData} from '../data/preferencesData';
import {auth} from '../../firebaseConfig';
import Container from '../components/Container';
import {theme} from '../core/theme';
import Button from '../components/Button';

const Configurations = ({navigation}) => {
  const user = auth.currentUser;

  React.useEffect(() => {
    if (!user) {
      navigation.navigate('Login');
    }

    console.log('User email: ', user.email);
  }, [user]);

  const onSavePreferences = () => {
    navigation.navigate('MainScreen');
  };

  return (
    <Container position="top">
      <ImageBackground
        source={require('../assets/background_dot.png')}
        resizeMode="repeat"
        style={styles.background}
      >
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.innerContainer}>
              <Paragraph bold>Let’s start {user.email}</Paragraph>

              <Paragraph>Choose your preferences.</Paragraph>
              <Accordion data={dietRestrictionsData} />
            </View>
          </View>
        </ScrollView>
        <View style={[styles.innerContainer, styles.button]}>
          <Button mode="contained" onPress={onSavePreferences}>
            Save and Go
          </Button>
        </View>
      </ImageBackground>
    </Container>
  );
};

const styles = StyleSheet.create({
  background: {
    height: '100%',
  },
  container: {
    padding: 20,
    paddingBottom: 100,
    height: '87%',
    width: '100%',
    // maxWidth: 340,
    alignSelf: 'flex-start',
    alignItems: 'center',
    overflow: 'hidden',
    // justifyContent: 'space-between'
  },
  innerContainer: {
    width: '100%',
  },
  button: {
    position: 'absolute',
    bottom: -20,
    padding: 20,
  },
});
export default Configurations;
