import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebaseConfig';
// import GoogleAuthentication from '../auth/googleAuthentication'


const Register = ({ navigation }) => {
    const [name, setName] = useState({ value: '', error: '' })
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })

    const onSignUpPressed = async () => {
        const nameError = nameValidator(name.value)
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)
        if (emailError || passwordError || nameError) {
            setName({ ...name, error: nameError })
            setEmail({ ...email, error: emailError })
            setPassword({ ...password, error: passwordError })
            return
        }


        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((res) => {
                const user = res.user
                console.log('User account created & signed in!', user);

                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Configurations' }],
                })
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }

    // async function onAppleButtonPress() {
    //     // Start the sign-in request
    //     const appleAuthRequestResponse = await appleAuth.performRequest({
    //         requestedOperation: appleAuth.Operation.LOGIN,
    //         requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    //     });
    //
    //     // Ensure Apple returned a user identityToken
    //     if (!appleAuthRequestResponse.identityToken) {
    //         throw new Error('Apple Sign-In failed - no identify token returned');
    //     }
    //
    //     // Create a Firebase credential from the response
    //     const { identityToken, nonce } = appleAuthRequestResponse;
    //     const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce);
    //
    //     // Sign the user in with the credential
    //     return auth().signInWithCredential(appleCredential);
    // }


    return (
        <Background>
            <BackButton goBack={navigation.goBack} />

            <Logo />

            <Paragraph>Create Account</Paragraph>

            <TextInput
                label="Email"
                returnKeyType="next"
                value={email.value}
                onChangeText={(text) => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />

            <TextInput
                label="Password"
                returnKeyType="done"
                value={password.value}
                onChangeText={(text) => setPassword({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
            />

            <Button mode="contained" onPress={onSignUpPressed} style={{ marginTop: 24 }}>Sign Up</Button>

            <View style={styles.row}>
                <Text>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.replace('Login')}>
                    <Text style={styles.link}>Login</Text>
                </TouchableOpacity>
            </View>

            {/*<View><GoogleAuthentication /></View>*/}
        </Background>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
})

export default Register