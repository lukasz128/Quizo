import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {View} from 'react-native';
import {useDeviceContext} from 'twrnc';
import tw from './src/lib/tailwind';
import Main from './src/Main';

export default function App() {
  useDeviceContext(tw);
  return (
    <NavigationContainer>
      <View style={tw`flex h-screen`}>
        <Main />
        <StatusBar style="light" />
      </View>
    </NavigationContainer>
  );
}
