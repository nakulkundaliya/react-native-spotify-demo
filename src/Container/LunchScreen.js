import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackName } from '../Navigation/AppRoute';
import commnStyle from './Styles/CommonStyle';

const LunchScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const redirect = async () => {
      const token = await AsyncStorage.getItem('@save_token');
      console.log('token of data', token);
      let stackName = StackName.authStack;
      if (token) {
        stackName = StackName.homeStack;
      }
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: stackName }],
        })
      );
    };
    redirect();
  }, []);

  return (
    <View style={commnStyle.splashScreenContainer}>
      <ActivityIndicator color="black" size={50} />
    </View>
  );
};

export default LunchScreen;
