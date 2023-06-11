import React from 'react';

import {View, Text, Button} from 'react-native';

export default function Home({navigation}){
return <>

        <View>
            <Text>
                Home
                <Button
                title='Sobre'
                onPress={() => navigation.navigate('PaginaCadastro')}/>
            </Text>
        </View>

       </>
    
}