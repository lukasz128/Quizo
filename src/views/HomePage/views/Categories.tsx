import React from 'react';
import {View} from 'react-native';
import tw from '../../../lib/tailwind';
import CategoriesFilter from './components/CategoriesFilter';
import CategoriesHeader from './components/CategoriesHeader';

export default function Categories() {
  return (
    <View>
      <CategoriesHeader />
      <View style={tw`mx-10 my-8`}>
        <CategoriesFilter />
      </View>
    </View>
  );
}
