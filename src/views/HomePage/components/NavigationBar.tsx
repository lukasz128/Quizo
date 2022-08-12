import React from 'react';
import {Text, View} from 'react-native';
import tw from '../../../lib/tailwind';

export default function NavigationBar() {
  return (
    <View style={tw`border-4 border-b-0 border-primary rounded-t-full mx-1`}>
      {<Text>test</Text>}
    </View>
  );
}
