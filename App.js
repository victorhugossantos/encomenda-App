import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import RegistroEncomendaScreen from "./screens/RegistroEncomenda";
const Stack = createStackNavigator();

export default function App(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                {/* Tela de Login */}
                <Stack.Screen 
                    name="Login"
                    component={LoginScreen}
                    options={{ title: 'Login'}}
                />
                <Stack.Screen 
                    name='Home'
                    component={HomeScreen}
                    options={{ title: 'Home'}}
                />
                <Stack.Screen 
                    name='RegistrarEncomenda'
                    component={RegistroEncomendaScreen}
                    options={{ title: 'Registrar Encomenda'}}
                />
                {/* <Stack.Screen 0
                    name='BarcodeScanner'
                    component={BarcodeScannerScreen}
                    options={{title: 'Scanner'}}
                /> */}

            </Stack.Navigator>
        </NavigationContainer>
    );
}