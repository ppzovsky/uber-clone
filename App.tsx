import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/Home/Index';
import { ListasProvider } from './src/components/context/ListasContext';


export default function App() {
  return (
    <View>
      <ListasProvider>
      <Home />
      </ListasProvider>
    </View>
  );
}
