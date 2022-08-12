import React from 'react';
import {Text, View} from 'react-native';
import tw from '../../../../lib/tailwind';

export default function CategoriesHeader() {
  return (
    <View style={tw`bg-primary-900 p-6 pt-10`}>
      <Text style={tw`text-white text-[40px]`}>Kategorie</Text>
      <Text style={tw`text-white text-base`}>
        Wybierz kategorię i zagraj ze znajomymi
      </Text>
    </View>
  );
}
