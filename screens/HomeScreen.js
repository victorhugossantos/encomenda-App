import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import homeStyles from '../styles/homeStyles';


export default function HomeScreen ({navigation}) {
    return(
        <View style={homeStyles.container}>
            <Text style={homeStyles.welcomeText}>Bem-Vindo Usuario</Text>
            <View style={styles.buttonContainer}>
                <Button 
                    title='Registrar Encomenda'
                    onPress={() => navigation.navigate('RegistrarEncomenda')}
                    color="#007bff"
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button 
                    title='Registrar Entrega'
                    onPress={() => navigation.navigate('Encomenda')}
                    color="#007bff"
                />
            </View>

            <View style={styles.buttonContainer}>
                <Button 
                    title='Listar Encomendas'
                    onPress={() => navigation.navigate('Encomenda')}
                    color="#007bff"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginVertical: 10,
        width: '100',
        padding: 20
    }
})