import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PlayListsScreen from '../Container/PlayListsScreen';
import TracksScreen from '../Container/TracksScreen';
import AlbumScreen from '../Container/AlbumScreen';

const Stack = createStackNavigator();
import { StackName, ScreenName } from './AppRoute';

const MainNavigator = () => (
  <Stack.Navigator initialRouteName={ScreenName.playListsScreen}>
    <Stack.Screen
      name={ScreenName.playListsScreen}
      component={PlayListsScreen}
    />
    <Stack.Screen name={ScreenName.tracksScreen} component={TracksScreen} />
    <Stack.Screen name={ScreenName.albumScreen} component={AlbumScreen} />
  </Stack.Navigator>
);

export default MainNavigator;
