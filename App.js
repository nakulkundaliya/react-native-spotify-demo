/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';

import AppNavigator from './src/Navigation';
import {
  AuthProvider,
  PlayListProvider,
  TracksProvider,
  AlbumProvider,
} from './src/Redux/Reducer';
const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <AuthProvider appContext={{}}>
        <PlayListProvider appContext={{}}>
          <TracksProvider appContext={{}}>
            <AlbumProvider appContext={{}}>
              <AppNavigator />
            </AlbumProvider>
          </TracksProvider>
        </PlayListProvider>
      </AuthProvider>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
