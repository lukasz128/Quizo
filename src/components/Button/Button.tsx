import tw from '../../lib/tailwind';
import {TouchableOpacity, Image, View, ImageSourcePropType} from 'react-native';
import {Text} from 'react-native';

interface Props {
  content: string;
  variant: 'raised' | 'stroked';
  onClick?: () => void;
  disabled?: boolean;
  color?: string;
  icon?: ImageSourcePropType;
  style?: string;
}

export default function Button({
  content,
  variant,
  onClick,
  disabled = false,
  color = 'primary',
  icon,
  style = '',
}: Props) {
  const disabledStyle: string = 'pointer-events-none bg-disabled';
  const basicStyle: string = `rounded-2xl w-full p-4 text-center overflow-hidden relative min-h-[55px] shadow-lg bg-white`;
  const iconButtonStyle: string = 'flex flex-row items-center p-0';
  const raisedStyle = tw.style(
    `${basicStyle} bg-${color} 
    ${disabled ? disabledStyle : ''} 
    ${style}
    ${icon ? iconButtonStyle : ''}`,
  );
  const strokedStyle = tw.style(
    `${basicStyle} 
    border-2 border-${color}
    ${disabled ? disabledStyle : ''} ${style} 
    ${icon ? iconButtonStyle : ''}`,
  );
  const buttonStyle = variant === 'raised' ? raisedStyle : strokedStyle;
  const contentColor: string =
    variant === 'raised' ? 'text-white' : `text-${color}`;
  const contentWidth: string = icon ? 'w-[80%]' : 'w-full';

  return (
    <TouchableOpacity style={buttonStyle} onPress={onClick}>
      {icon && (
        <View
          style={tw.style(
            `bg-${color} absolute h-full w-[50px] rounded-br-full rounded-tr-full`,
          )}>
          <Image source={icon} style={tw.style('m-auto')} />
        </View>
      )}
      <Text
        style={tw.style(
          `${contentColor} ${contentWidth} font-bold text-center m-auto`,
        )}>
        {content}
      </Text>
    </TouchableOpacity>
  );
}
