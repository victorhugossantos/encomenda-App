import React, { useEffect, useState } from "react";
import { Button, View, TextInput, Text, Alert, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import registroEncomendaStyles from "../styles/registroEncomendasStyle";
import * as FileSystem from 'expo-file-system'

const FILE_URI = FileSystem.documentDirectory + 'encomendas.json';

export default function RegistroEncomendaScreen({ route, navigation }) {
    const [scannedData, setScannedData] = useState('');
    const [bloco, setBloco] = useState('');
    const [unidade, setUnidade] = useState('');
    const [nome, setNome] = useState('');
    const [hasPermission, setHasPermission] = useState(null);
    const [scanning, setScanning] = useState(false);
    const [encomendas, setEncomendas] = useState([]);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    useEffect(() => {
        if (route.params?.scannedData) {
            setScannedData(route.params.scannedData);
        }
    }, [route.params?.scannedData]);

    const handleBarCodeScanned = ({ type, data }) => {
        setScannedData(data);
        setScanning(false);
    };

    const handleRegister = () => {
        if (!scannedData || !bloco || !unidade || !nome) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos e faça a leitura do código de barras');
            return;
        }

        
        // Limpar os campos após o registro
        setScannedData('');
        setBloco('');
        setUnidade('');
        setNome('');
    };
    // solicita permissao de camera parao usuario

    if (hasPermission === null) {
        return <Text>Solicitando permissão para a câmera</Text>;
    }
    if (hasPermission === false) {
        return <Text>Sem acesso à câmera</Text>;
    }

    return (
        <View style={registroEncomendaStyles.container}>
            {scanning ? (
                <BarCodeScanner
                    onBarCodeScanned={handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
            ) : (
                <>
                    <TextInput
                        style={registroEncomendaStyles.InputField}
                        placeholder="Código de Barras"
                        value={scannedData}
                        onChangeText={setScannedData}
                        keyboardType="numeric"
                    />
                    <Button
                        title="Escanear Código"
                        onPress={() => setScanning(true)}
                        color="#007bff"
                    />
                    <TextInput
                        style={registroEncomendaStyles.InputField}
                        placeholder="Nome"
                        value={nome}
                        onChangeText={setNome}
                    />
                    <TextInput
                        style={registroEncomendaStyles.InputField}
                        placeholder="Bloco"
                        value={bloco}
                        onChangeText={setBloco}
                    />
                    <TextInput
                        style={registroEncomendaStyles.InputField}
                        placeholder="Unidade"
                        value={unidade}
                        onChangeText={setUnidade}
                        keyboardType="numeric"
                    />
                    <Button
                        title="Receber"
                        onPress={handleRegister}
                        color="#DC143C"
                    />
                </>
            )}
        </View>
    );
}
