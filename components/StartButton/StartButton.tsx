import { Button, View } from "react-native";
//import { useState } from 'react';
import BarCode from "../BarCodeScanner/BarCode";
import NavBar from "../navBar/NavBar";

export default function StartButton({ navigation }:any) {
 
  return (
    <View>
       <Button
        title="Iniciar Leitura"
        onPress={() => navigation.navigate('Voltar')}
      />
      <Button
        title="Visualizar histórico"
        onPress={() => navigation.navigate('Lista')}
      />
    </View> 
  );
}