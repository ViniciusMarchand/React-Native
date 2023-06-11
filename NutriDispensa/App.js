import * as React from 'react';
import { View, Text , StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import Home from './src/telas/home';
import PaginaCadastro from './src/telas/paginaCadastro';

const Stack = createStackNavigator();

function App() {
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
