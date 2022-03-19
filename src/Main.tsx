import {Text, View} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';

export default function Main() {
  const tailwind = useTailwind();
  return (
    <>
      <View style={tailwind('flex justify-center items-center')}>
        <Text style={tailwind('my-4 text-red-600')}>Siema czerwony</Text>
        <Text style={tailwind('pt-12 text-primary-50')}>Siema test 50</Text>
        <Text style={tailwind('pt-12 text-primary-100')}>Siema test 100</Text>
        <Text style={tailwind('pt-12 text-primary-200')}>Siema test 200</Text>
        <Text style={tailwind('pt-12 text-primary-300')}>Siema test 300</Text>
        <Text style={tailwind('pt-12 text-primary-400')}>Siema test 400</Text>
        <Text style={tailwind('pt-12 text-primary')}>
          Siema test 500 (default)
        </Text>
        <Text style={tailwind('pt-12 text-primary-600')}>Siema test 600</Text>
        <Text style={tailwind('pt-12 text-primary-700')}>Siema test 700</Text>
        <Text style={tailwind('pt-12 text-primary-800')}>Siema test 800</Text>
        <Text style={tailwind('pt-12 text-primary-900')}>Siema test 900</Text>
      </View>
    </>
  );
}
