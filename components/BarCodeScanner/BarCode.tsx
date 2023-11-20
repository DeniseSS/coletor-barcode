import React, { useState, useEffect, Component } from 'react';
import { Text, View, StyleSheet, Button, TouchableHighlight } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';


export default function BarCode() {

  const [hasPermission, setHasPermission] = useState<any|null>(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };
   
    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }:any) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
 
  };

  if (hasPermission === null) {
    return alert(`Permissão de acesso a câmera`);
  }
  if (hasPermission === false) {
    return alert(`Acesso a câmera negado!`);
  }

  return ( 
    <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

      {scanned && <Button title={'Clique para escanear novamente'} onPress={() => setScanned(false)} />}    
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
