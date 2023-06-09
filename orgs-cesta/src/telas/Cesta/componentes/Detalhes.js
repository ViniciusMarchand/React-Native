import React from 'react-native';
import { StyleSheet, Image, View} from 'react-native';
import Texto from '../../../componentes/Texto';
import logo from '../../../../assets/logo.png';


export default function Detalhes(){
    return <>
      <Texto style={estilos.nome}>Cesta de verduras</Texto>
        <View style={estilos.fazenda}>
        <Image source={logo} style={estilos.imagemFazenda}/>
        <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
        </View>
        <Texto style={estilos.descricao}>Uma cesta com produtos slecionados cuidadosamente da fazendo direto para sua cozinha</Texto>
        <Texto style={estilos.preco}>R$40,00</Texto>
    
    </>
}



const estilos = StyleSheet.create({
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

})