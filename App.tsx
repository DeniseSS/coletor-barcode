import Title from './components/title/index.js';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';
import NavBar from './components/navBar/NavBar';

export default function App() {

  return ( 
    <View style={styles.container}>
         <NavBar/>
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
