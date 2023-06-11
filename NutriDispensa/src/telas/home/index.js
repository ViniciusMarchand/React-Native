import React from 'react';

import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Texto from '../../componentes/Texto';
export default function Home({navigation}){
return <>

        <Texto style={estilos.welcome}>
            Olá, como poderei te ajduar hoje?
        </Texto>
        <View style={estilos.funcoesDiv}>
            <View style={estilos.row}>
                <TouchableOpacity style={estilos.funcoes} onPress={() => navigation.navigate('PaginaCadastro')}></TouchableOpacity>
                <TouchableOpacity style={estilos.funcoes}></TouchableOpacity>
            </View>
            <View style={estilos.row}>
                <TouchableOpacity style={estilos.funcoes}></TouchableOpacity>
                <TouchableOpacity style={estilos.funcoes}></TouchableOpacity>
            </View>




        </View>
    
            {/* <Button
                title='Sobre'
                onPress={() => navigation.navigate('PaginaCadastro')}/> */}
       </>
    
}

const estilos = StyleSheet.create({
    welcome:{
        fontWeight: "bold",
        fontSize:40,
        paddingHorizontal: 16,
        marginVertical: 20
    },
    funcoesDiv:{
        width:"100%",
        height:500,
        justifyContent:"center",
        alignItems:"center",

    },
    funcoes:{
        width:160,
        height:160,
        backgroundColor:"blue",
    },
    row:{
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-around",
        marginBottom: 25
    }

})