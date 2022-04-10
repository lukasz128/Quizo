import {View} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import {Button} from './components/Button';

export default function Main() {
  const tailwind = useTailwind();

  return (
    <>
      <View style={tailwind('flex justify-center items-center m-10')}>
        <Button variant="stroked" content="Zaloguj się jako gość"></Button>
        <Button
          style={'my-5'}
          variant="stroked"
          color="fb"
          icon={require('./assets/icons/fb-logo.png')}
          content="Zaloguj się przez facebooka"></Button>
        <Button variant="raised" content="Zaloguj się jako gość"></Button>
      </View>
    </>
  );
}
