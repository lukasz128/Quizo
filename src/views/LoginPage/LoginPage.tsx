import React from 'react';
import {Image, Text, View} from 'react-native';
import {Button} from '../../components/Button';
import tw from '../../lib/tailwind';
import SocialButton from './components/SocialButton';

export default function LoginPage() {
  return (
    <>
      <View style={tw`flex justify-between  bg-primary h-screen`}>
        <View style={tw`mt-50`}>
          <Image source={require('./assets/title.png')} style={tw`m-auto`} />
        </View>
        <View style={tw`bg-white rounded-t-[70px] h-1/2`}>
          <Text
            style={tw`text-center text-[30px] text-primary italic font-medium border-b border-primary w-3/4 m-auto pb-3`}>
            Zaloguj się
          </Text>

          <View style={tw`m-10`}>
            <SocialButton type="fb" style={'my-4'}></SocialButton>
            <SocialButton type="google" style={'my-4'}></SocialButton>
            <Button
              variant="raised"
              style={'my-4'}
              content="Zaloguj się jako gość"></Button>
          </View>
        </View>
      </View>
    </>
  );
}
