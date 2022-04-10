import {Style, useTailwind} from 'tailwind-rn/dist';
import {TouchableOpacity, Image, View, ImageSourcePropType} from 'react-native';
import {Text} from 'react-native';
import {shadow} from './Button.style';

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
  const tailwind = useTailwind();

  const disabledStyle: string = 'pointer-events-none bg-disabled';
  const basicStyle: string = `rounded-2xl w-full p-4 text-center overflow-hidden relative`;
  const iconButtonStyle: string = 'flex flex-row items-center p-4';
  const raisedStyle: Style = tailwind(
    `${basicStyle} bg-${color} 
    ${disabled ? disabledStyle : ''} 
    ${style}
    ${icon ? iconButtonStyle : ''}`,
  );
  const strokedStyle: Style = tailwind(
    `${basicStyle} 
    border-2 border-${color}
    ${disabled ? disabledStyle : ''} ${style} 
    ${icon ? iconButtonStyle : ''}`,
  );
  const buttonStyle: Style = variant === 'raised' ? raisedStyle : strokedStyle;
  const contentColor: string =
    variant === 'raised' ? 'text-white' : `text-${color}`;
  const contentWidth: string = icon ? 'w-full' : 'w-full';

  return (
    <TouchableOpacity style={[buttonStyle, shadow]} onPress={onClick}>
      {icon && (
        <View
          style={tailwind(
            `absolute top-0 left-0 h-full inline bg-${color} rounded-r-full h-full`,
          )}>
          <Image source={icon} style={{width: 45, height: 45}} />
        </View>
      )}
      <Text
        style={tailwind(
          `${contentColor} ${contentWidth} font-bold text-center`,
        )}>
        {content}
      </Text>
    </TouchableOpacity>
  );
}
