import React from 'react-native';
import { StyleSheet, Image, View } from 'react-native';
import Texto from '../../../componentes/Texto';


export default function Detalhes({ nome, logoFazenda, nomeFazenda, descricao, preco }) {
    return <>
        <Texto style={estilos.nome}>{nome}</Texto>
        <View style={estilos.fazenda}>
            <Image source={logoFazenda} style={estilos.imagemFazenda} />
            <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
        </View>
        <Texto style={estilos.descricao}>{descricao}</Texto>
        <Texto style={estilos.preco}>{preco}</Texto>

    </>
}



const estilos = StyleSheet.create({
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: "bold",
    },
    fazenda: {
        flexDirection: "row",
        paddingHorizontal: 12,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        fontFamily: "MontserratRegular",

    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
        fontFamily: "MontserratRegular",

    },
    preco: {
        fontWeight: "bold",
        color: "#2A9F85",
        fontSize: 26,
        marginTop: 8,
        lineHeight: 42,
    },

})