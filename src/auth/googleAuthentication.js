import React from 'react';
import {Button, View} from 'react-native';
import * as q from 'firebase/app';
import 'firebase/auth';
import {getAuth, signInWithRedirect, GoogleAuthProvider} from 'firebase/auth';
const provider = new GoogleAuthProvider();
import {auth} from '../../firebaseConfig';

const IOS_CLIENT_ID = 'YOUR_IOS_CLIENT_ID';
const ANDROID_CLIENT_ID = 'YOUR_ANDROID_CLIENT_ID';

const GoogleAuthentication = props => {
  // console.log('signInWithPopup', q)
  // console.log('auth', auth)
  // console.log('provider', provider)
  const signInWithGoogle = () => {
    auth
      .signInWithRedirect(auth, provider)
      .then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch(error => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <View>
      <Button title="Sign In with Google" onPress={() => signInWithGoogle()} />
    </View>
  );
};

GoogleAuthentication.propTypes = {};

export default GoogleAuthentication;
