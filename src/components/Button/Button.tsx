import {Style, useTailwind} from 'tailwind-rn/dist';
import {TouchableOpacity} from 'react-native';
import {Text} from 'react-native';
import {style} from './Button.style';
import {Icon} from '../../models/icon';

interface Props {
  onClick?: () => void;
  disabled?: boolean;
  variant: 'raised' | 'stroked';
  content: string;
  icon?: Icon;
}

export default function Button({
  onClick,
  disabled = false,
  variant,
  content,
  icon,
}: Props) {
  const tailwind = useTailwind();

  const disabledStyle: string = 'pointer-events-none bg-disabled';
  const basicStyle: string = `rounded-2xl w-full p-4 text-center`;
  const raisedStyle: Style = tailwind(
    `${basicStyle} bg-primary text-white ${disabled ? disabledStyle : ''}`,
  );
  const strokedStyle: Style = tailwind(
    `${basicStyle} 
    border-2 border-primary text-primary 
    ${disabled ? disabledStyle : ''}`,
  );
  const buttonStyle: Style = variant === 'raised' ? raisedStyle : strokedStyle;

  return (
    <TouchableOpacity style={[buttonStyle, style.shadow]} onPress={onClick}>
      {icon && <img src={icon.source} alt={icon.alternate}></img>}
      <Text style={tailwind('text-inherit font-semibold')}>{content}</Text>
    </TouchableOpacity>
  );
}
