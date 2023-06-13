import React, { useState } from 'react'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import Logo from '../components/Logo'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { emailValidator } from '../helpers/emailValidator'
import Container from "../components/Container";

export default function ResetPassword({ navigation }) {
    const [email, setEmail] = useState({ value: '', error: '' })

    const sendResetPasswordEmail = () => {
        const emailError = emailValidator(email.value)
        if (emailError) {
            setEmail({ ...email, error: emailError })
            return
        }
        //sendPasswordResetEmail(email: string, actionCodeSettings?: ActionCodeSettings): Promise<void>;
        navigation.navigate('Login')
    }

    return (
        <Container>
            <Background>
                <BackButton goBack={navigation.goBack} />
                <Logo />
                <Header>Restore Password</Header>
                <TextInput
                    label="E-mail address"
                    returnKeyType="done"
                    value={email.value}
                    onChangeText={(text) => setEmail({ value: text, error: '' })}
                    error={!!email.error}
                    errorText={email.error}
                    autoCapitalize="none"
                    autoCompleteType="email"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    description="You will receive email with password reset link."
                />
                <Button
                    mode="contained"
                    onPress={sendResetPasswordEmail}
                    style={{ marginTop: 16 }}
                >
                    Send Instructions
                </Button>
            </Background>
        </Container>
    )
}