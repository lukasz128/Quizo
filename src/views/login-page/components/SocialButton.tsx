import {Button} from 'components/Button';
import {ImageSourcePropType} from 'react-native';

interface Props {
  type: 'fb' | 'google';
  disabled?: boolean;
  onClick?: () => void;
}

export default function SocialButton({type, disabled = false, onClick}: Props) {
  const icon: ImageSourcePropType =
    type === 'fb'
      ? require('./assets/icons/fb-logo.png')
      : require('./assets/icons/google-logo.png');

  return (
    <Button
      variant="stroked"
      color={type}
      icon={icon}
      disabled={disabled}
      onClick={onClick}
      content={`Zaloguj sie przez ${
        type === 'fb' ? 'facebook' : 'google'
      }`}></Button>
  );
}
