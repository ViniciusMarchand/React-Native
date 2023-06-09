import { StatusBar, Text, SafeAreaView, View } from 'react-native';
import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta';

import AppLoading from 'expo-app-loading';
import {useFonts, Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat';

export default function App() {
  const [fontCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if(!fontCarregada){
    return<AppLoading/>
  }
  return (
    <SafeAreaView>
        <StatusBar/>
        <Cesta {...mock}/>
    </SafeAreaView>
  );
}


