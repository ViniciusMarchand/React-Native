import { StatusBar, Text, SafeAreaView, View } from 'react-native';
import Cesta from './src/telas/Cesta';

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
    <SafeAreaView>
        <StatusBar/>
        <Cesta />
    </SafeAreaView>
  );
}


