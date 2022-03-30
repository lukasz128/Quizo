import {View} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import {Button} from './components/Button';
import {Icon} from './models/icon';

export default function Main() {
  const tailwind = useTailwind();
  const icon: Icon = new Icon('assets/icons/fb-logo.svg', 'facebook logo');

  return (
    <>
      <View style={tailwind('flex justify-center items-center m-10')}>
        <Button variant="raised" content="Zaloguj się jako gość"></Button>
        <Button variant="stroked" content="Zaloguj się jako gość"></Button>
        <Button
          variant="raised"
          icon={icon}
          content="Zaloguj się jako gość"></Button>
      </View>
    </>
  );
}
