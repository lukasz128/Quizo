import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {View} from 'react-native';
import {useDeviceContext} from 'twrnc';
import tw from './src/lib/tailwind';
import Main from './src/Main';

export default function App() {
  useDeviceContext(tw);
  return (
    <View>
      <Main />
      <StatusBar style="light" />
    </View>
  );
}
