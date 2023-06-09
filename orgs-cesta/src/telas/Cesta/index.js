import React from 'react';
import {StyleSheet,  View } from 'react-native';


//IMAGENS
import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';


export default function cesta(){
    return <>
        <Topo/>
        <View style={estilos.cesta}>
        <Detalhes/>

        </View>
    </>
}


const estilos = StyleSheet.create({
    cesta:{
        paddingVertical:8,
        paddingHorizontal:16,
    },
    
  });