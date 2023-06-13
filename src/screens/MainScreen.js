import React from 'react';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import {Camera, CameraType} from 'expo-camera';
import Container from '../components/Container';
import Sidebar from '../components/Sidebar';
import {aislesData, dietRestrictionsData} from '../data/preferencesData';
import {faWheatAwnCircleExclamation} from '@fortawesome/free-solid-svg-icons/faWheatAwnCircleExclamation';
import {faStore} from '@fortawesome/free-solid-svg-icons/faStore';

const MainScreen = () => {
  // const [type, setType] = React.useState(CameraType.back);
  // const [hasPermission, setHasPermission] = React.useState(null);

  // React.useEffect(() => {
  //   (async () => {
  //     const {status} = await Camera.requestCameraPermissionsAsync();
  //     setHasPermission(status === 'granted');
  //   })();
  // }, []);

  // if (hasPermission === null) {
  //   return <View />;
  // }
  //
  // if (hasPermission === false) {
  //   return <Text>No access to camera</Text>;
  // }

  return (
    <Container>
      <View style={styles.container}>
        {/*<Camera style={styles.camera} type={type} ratio="16:9">*/}
        <View style={styles.buttonContainer}>
          <Sidebar
            title="Diet Restrictions"
            data={dietRestrictionsData}
            icon={faWheatAwnCircleExclamation}
            iconPosition={1}
          />

          <Sidebar
            title="Aisles"
            data={aislesData}
            type="radio"
            icon={faStore}
            iconPosition={2}
          />

          {/*<TouchableOpacity*/}
          {/*    style={styles.button}*/}
          {/*    onPress={() => {*/}
          {/*        setType(type === CameraType.back ? CameraType.front : CameraType.back);*/}
          {/*    }}>*/}
          {/*    <Text style={styles.text}> Flip </Text>*/}
          {/*</TouchableOpacity>*/}
        </View>
        {/*</Camera>*/}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },

  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 0,
    width: 550,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});

MainScreen.propTypes = {};

export default MainScreen;
