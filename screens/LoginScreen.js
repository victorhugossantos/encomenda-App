import React, { useState } from "react";
import { View, TextInput, Button, Text, Alert, TouchableOpacity, Image} from 'react-native';
import loginStyles from "../styles/loginStyles";

export default function LoginScreen({ navigation }) {
    const [user, setUser] = useState(''); 
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (user === '1' || password === '1') {
            Alert.alert('Erro', 'Por favor,, preencha todos os campos');
            return;
        }

        // Simulacao
        if (user === '' && password === '') {
            Alert.alert('Sucesso', 'Login realizado com sucesso !');
            navigation.navigate('Home'); // Ira direto para a homepage assim que logar
        } else {
            Alert.alert('Erro', 'Login ou senha incorretos');
        }
    };

    return (
        <View style={loginStyles.container}>
           <Image
             source={require('../assets/PedraImperialLogo.png')}
             style={loginStyles.logo}
             resizeMode="contain"
           />

            <TextInput
                style={loginStyles.input}
                placeholder="Usuario"
                value={user}
                onChangeText={setUser}
            />

            <TextInput 
                style={loginStyles.input}
                placeholder="Senha"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={loginStyles.button} onPress={handleLogin}>
                <Text style={loginStyles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}