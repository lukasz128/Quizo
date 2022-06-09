import React from 'react';
import {ImageSourcePropType} from 'react-native';
import {Button} from '../../../components/Button';

interface Props {
  type: 'fb' | 'google';
  disabled?: boolean;
  style?: string;
  onClick?: () => void;
}

export default function SocialButton({
  type,
  disabled = false,
  style,
  onClick,
}: Props) {
  const icon: ImageSourcePropType =
    type === 'fb'
      ? require('../../../assets/icons/fb-logo2.png')
      : require('../../../assets/icons/google-logo.png');

  return (
    <Button
      variant="stroked"
      color={type}
      icon={icon}
      disabled={disabled}
      style={style}
      onClick={onClick}
      content={`Zaloguj sie przez ${
        type === 'fb' ? 'facebook' : 'google'
      }`}></Button>
  );
}
