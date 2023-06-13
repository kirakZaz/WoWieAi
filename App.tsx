/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-native-paper';

import Login from './src/screens/Login';
import Register from './src/screens/Register';
import ResetPassword from './src/screens/ResetPassword';
import Configurations from './src/screens/Configurations';
import StartScreen from './src/screens/StartScreen';
import MainScreen from './src/screens/MainScreen';

const Stack = createNativeStackNavigator();

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {theme} from './src/core/theme';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}
      >
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{headerShown: true}}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Configurations" component={Configurations} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen name="MainScreen" component={MainScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {/*<ScrollView*/}
      {/*  contentInsetAdjustmentBehavior="automatic"*/}
      {/*  style={backgroundStyle}*/}
      {/*>*/}
      {/*  <Header />*/}
      {/*  <View*/}
      {/*    style={{*/}
      {/*      backgroundColor: isDarkMode ? Colors.black : Colors.white,*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <Section title="Step One">*/}
      {/*      Edit <Text style={styles.highlight}>App.tsx</Text> to change this*/}
      {/*      screen and then come back to see your edits. xsfdgsdfg*/}
      {/*    </Section>*/}
      {/*  </View>*/}
      {/*</ScrollView>*/}
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
