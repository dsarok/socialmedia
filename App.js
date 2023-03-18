/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Headers from './Components/Headers';
import ParentHeader from './Components/ParentHeader';

function App() {
  return (
    <SafeAreaView style={{backgroundColor: '#283072', color: 'white'}}>
      <StatusBar barStyle="light-content" />

      <ParentHeader />
      <Headers />
    </SafeAreaView>
  );
}

export default App;
