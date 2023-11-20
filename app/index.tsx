
//import BarCode from './components/BarCodeScanner/BarCode.js';
import StartButton from '../components/StartButton/StartButton.js';
import Title from '../components/title/index.js';
import React from 'react';
import { useRouter } from 'expo-router';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';



export default function App() {
 const navigation = useRouter();
  return ( 
    <View style={styles.container}>
        <StartButton/>
        <Title/>
        <Button title="Click here" onPress={() => navigation.push("../BarCode")} />
    </View>
      
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  }
});
