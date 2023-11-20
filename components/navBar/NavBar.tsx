import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartButton from '../StartButton/StartButton';
import BarCode from '../BarCodeScanner/BarCode';
import BarCodeList from '../BarCodeList/BarCodeList';

  const Stack = createNativeStackNavigator();

  function NavBar() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={StartButton}/>
          <Stack.Screen name="Voltar" component={BarCode}/>
          <Stack.Screen name="Lista" component={BarCodeList}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default NavBar;