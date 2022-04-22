import {StatusBar} from 'expo-status-bar';
import {ScrollView} from 'react-native';
import Main from './src/Main';
import tw from './src/lib/tailwind';
import {useDeviceContext} from 'twrnc';

export default function App() {
  useDeviceContext(tw);
  return (
    <ScrollView>
      <Main />
      <StatusBar />
    </ScrollView>
  );
}
