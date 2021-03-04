import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../Redux/Reducer';
import commnStyle from './Styles/CommonStyle';
import style from './Styles/LoginStyle';

const LoginScreen = () => {
  const navigation = useNavigation();
  const { state, actions } = useContext(AuthContext);

  const loginWithSpofity = async () => {
    await actions.login({ navigation });
  };

  return (
    <View style={commnStyle.container}>
      <TouchableOpacity style={style.loginButton} onPress={loginWithSpofity}>
        <Text style={style.loginButtonText}>Login with Spotify</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
