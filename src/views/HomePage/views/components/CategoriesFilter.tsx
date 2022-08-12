import React, {useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import tw from '../../../../lib/tailwind';

export default function CategoriesFilter() {
  const searchIconSource: ImageSourcePropType = require('../../../../assets/icons/search-icon.png');
  const [filter, onChangeFilter] = useState('');
  const [isFocus, setFocusState] = useState(false);
  let inputRef: TextInput | null = null;

  return (
    <View style={tw`relative w-full`}>
      <TextInput
        value={filter}
        onChangeText={onChangeFilter}
        onFocus={() => setFocusState(true)}
        onBlur={() => setFocusState(false)}
        style={tw`border-b border-primary`}
        ref={ref => (inputRef = ref)}
      />

      <Pressable
        onPress={() => inputRef?.focus()}
        style={tw`absolute left-1 top-2 font-thin ${
          isFocus || filter.length ? '-top-3 left-0 font-bold' : ''
        }`}>
        <Text style={tw`text-primary`}>Szukaj kategorię</Text>
      </Pressable>

      <Pressable
        onPress={() => inputRef?.focus()}
        style={tw`absolute right-1 top-2`}>
        <Image source={searchIconSource} />
      </Pressable>
    </View>
  );
}
