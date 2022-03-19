import {StatusBar} from 'expo-status-bar';
import {TailwindProvider} from 'tailwind-rn';
import Main from './src/Main';
import utilities from './tailwind.json';

export default function App() {
  return (
    <TailwindProvider utilities={utilities} colorScheme="light">
      <Main />
      <StatusBar />
    </TailwindProvider>
  );
}
