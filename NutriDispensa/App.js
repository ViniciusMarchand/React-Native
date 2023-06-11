import * as React from 'react';
import { StyleSheet, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto';



import Home from './src/telas/home';
import PaginaCadastro from './src/telas/paginaCadastro';

const Stack = createStackNavigator();

function App() {

  const [fontCarregada] = useFonts({
    "RobotoRegular": Roboto_400Regular,
    "RobotoBold": Roboto_700Bold,
  });
  
  if(!fontCarregada){
    return <View/>
  }

  return (


    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>

        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='PaginaCadastro' component={PaginaCadastro} />

      </Stack.Navigator>
    </NavigationContainer>
    

  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
