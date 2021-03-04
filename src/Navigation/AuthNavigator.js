import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Container/LoginScreen';

const Stack = createStackNavigator();
import { StackName, ScreenName } from './AppRoute';

const AuthNavigator = () => (
  <Stack.Navigator
    initialRouteName={ScreenName.loginScreen}
    headerMode={'none'}
  >
    <Stack.Screen name={ScreenName.loginScreen} component={LoginScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
