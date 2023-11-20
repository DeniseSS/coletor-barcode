import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  item: {
    padding: 10,
    fontSize: 16,
    height: 64,
  },
});



const FlatListBasics = () => {
  
  return (
    <View style={styles.container}>
   
        <Text>Valor </Text>
     
    </View>
  );
};

export default FlatListBasics;