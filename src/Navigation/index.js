import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import LunchNavigator from './LunchNavigator';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import { StackName, ScreenName } from './AppRoute';

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName={StackName.lunchStack}
      headerMode={'none'}
    >
      <Stack.Screen name={StackName.lunchStack} component={LunchNavigator} />
      <Stack.Screen name={StackName.authStack} component={AuthNavigator} />
      <Stack.Screen name={StackName.homeStack} component={MainNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
