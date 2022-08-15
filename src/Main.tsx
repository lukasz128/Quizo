import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomePage from './views/HomePage/HomePage';
import LoginPage from './views/LoginPage/LoginPage';

export default function Main() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="HomePage" component={HomePage} />
    </Stack.Navigator>
  );
}
