import React from 'react';
import {View} from 'react-native';
import tw from '../../lib/tailwind';
import NavigationBar from './components/NavigationBar';
import Categories from './views/Categories';

export default function HomePage() {
  return (
    <View style={tw`h-screen bg-white`}>
      <View style={tw`h-[100vh] bg-white`}>
        <Categories />
      </View>
      <NavigationBar />
    </View>
  );
}
