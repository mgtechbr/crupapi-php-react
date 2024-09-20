import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonWeight
} from './styles';

import { UserContext } from '../../contexts/UserContext';
import Api from '../../Api';

import BarberLogo from '../../assets/barber.svg';
import SignInput from '../../components/SignInput';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => { 

    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    const [ emailField, setEmailField ] = useState('');
    const [ passwordField, setPasswordField ] = useState('');

    const handleSignIn = async () => {
        if(emailField != '' && passwordField != '') {

            let json = await Api.signIn(emailField, passwordField);

            if( json.token ) {
                await AsyncStorage.setItem('token', json.token);

                userDispatch({
                    type:'setAvatar',
                    payload:{
                        avatar: json.data.avatar
                    }
                });

                navigation.reset({
                    routes:[{name:'MainTab'}]
                });
            }else {
                alert('E-mail e ou Senha errados!');
            }

        }else {
            alert( 'Preencha os campos' );
        }
    }

    const handleMessageSignUp = () => {
        navigation.reset({
            routes:[{ name: 'SignUp' }]
        });
    }

    return (
        <Container>
            <BarberLogo width="100%" height="160" />

            <InputArea>

                <SignInput 
                    IconSvg={EmailIcon}
                    placeHolder="Digite seu e-mail"  
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />
                <SignInput 
                    IconSvg={LockIcon} 
                    placeHolder="Digite sua senha"  
                    value={passwordField}  
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                />

                <CustomButton onPress={handleSignIn} >
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleMessageSignUp} >
                <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                <SignMessageButtonWeight>Cadastre-se!</SignMessageButtonWeight>
            </SignMessageButton>

        </Container>
    );
}