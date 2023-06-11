import React from 'react';

import {View, Button, StyleSheet} from 'react-native';
import Texto from '../../componentes/Texto';
export default function Home({navigation}){
return <>

        <View>
            <Texto style={estilos.frase}>
                Home teste para saber se está funcionando a font
            </Texto>
            <Button
                title='Sobre'
                onPress={() => navigation.navigate('PaginaCadastro')}/>
        </View>

       </>
    
}

const estilos = StyleSheet.create({
    frase:{
    }
})