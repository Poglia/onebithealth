import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Title from "./src/components/Title/index.js";
import Form from "./src/components/Form/";
import ResultIMC from './src/components/Form/ResultIMC/index.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#e0e5e5',
  }
});
