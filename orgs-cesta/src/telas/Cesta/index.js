import React from 'react';
import { Image, StyleSheet, Dimensions, Text, View } from 'react-native';

import Texto from '../../componentes/Texto';

//IMAGENS
import topo from '../../../assets/topo.png';
import logo from '../../../assets/logo.png';

const width = Dimensions.get('screen').width;

export default function cesta(){
    return <>
        <Image source={topo} style={estilos.topo}/>
        <Texto style={estilos.titulo}>Detalhe da cesta</Texto>
        <View style={estilos.cesta}>
            <Texto style={estilos.nome}>Cesta de verduras</Texto>
            <View style={estilos.fazenda}>
            <Image source={logo} style={estilos.imagemFazenda}/>
            <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
            </View>
            <Texto style={estilos.descricao}>Uma cesta com produtos slecionados cuidadosamente da fazendo direto para sua cozinha</Texto>
            <Texto style={estilos.preco}>R$40,00</Texto>

        </View>
    </>
}


const estilos = StyleSheet.create({
    topo:{
      width: "100%",
      height: 578 / 768 * width,
    },
    titulo:{
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color:"white",
        padding: 16,
        fontWeight: "bold",

    },
    cesta:{
        paddingVertical:8,
        paddingHorizontal:16,
    },
    nome:{
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight:"bold",
    },
    fazenda:{
        flexDirection:"row",
        paddingHorizontal: 12,
    },
    nomeFazenda:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        fontFamily: "MontserratRegular",

    },
    imagemFazenda:{
        width: 32,
        height: 32,
    },
    descricao:{
        color:"#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
        fontFamily: "MontserratRegular",

    },
    preco:{
        fontWeight: "bold",
        color: "#2A9F85",
        fontSize: 26,
        marginTop:8,
        lineHeight: 42,
    },

    
  });