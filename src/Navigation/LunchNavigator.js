import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LunchScreen from '../Container/LunchScreen';

const Stack = createStackNavigator();
import { StackName, ScreenName } from './AppRoute';

const LunchNavigator = () => (
  <Stack.Navigator
    initialRouteName={ScreenName.lunchScreen}
    headerMode={'none'}
  >
    <Stack.Screen name={ScreenName.lunchScreen} component={LunchScreen} />
  </Stack.Navigator>
);

export default LunchNavigator;
