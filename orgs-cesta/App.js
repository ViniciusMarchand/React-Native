import { StatusBar, Text, SafeAreaView, View } from 'react-native';
import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta';

import {useFonts, Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat';

export default function App() {
  const [fontCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if(!fontCarregada){
    return<View/>
  }
  return (
    <SafeAreaView style = {{flex:1}}>
        <StatusBar/>
        
        <Cesta {...mock}/>
    </SafeAreaView>
  );
}


