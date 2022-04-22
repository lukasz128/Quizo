import tw from './lib/tailwind';
import {View} from 'react-native';
import {Button} from './components/Button';
import React from 'react';
import SocialButton from './views/login-page/components/SocialButton';

export default function Main() {
  return (
    <>
      <View style={tw`flex justify-center items-center m-10`}>
        <Button variant="stroked" content="Zaloguj się jako gość"></Button>
        <SocialButton type="fb" style={'my-5'}></SocialButton>
        <SocialButton type="google" style={'my-5'}></SocialButton>
        <Button variant="raised" content="Zaloguj się jako gość"></Button>
      </View>
    </>
  );
}
