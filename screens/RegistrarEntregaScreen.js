import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, Alert, ActivityIndicator, Switch, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { atualizarEncomenda } from "../api/encomendas.js";
import registrarEntregaStyles from "../styles/registrarEntregaStyles.js";

export default function RegistrarEntregaScreen({ route, navigation }) {
    const [codigoBarras, setCodigoBarras] = useState(route.params?.codigo_barras || '');
    const [retirado, setRetirado] = useState(false);
    const [loading, setLoading] = useState(false);
    const [scanning, setScanning] = useState(false);
    const [hasPermission, setHasPermission] = useState(null);

    // Solicita permissão de uso da câmera
    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setCodigoBarras(data);
        setScanning(false);
    };

    const handleRegister = async () => {
        if (!codigoBarras) {
            Alert.alert('Erro', 'Código de barras não fornecido.');
            return;
        }

        setLoading(true);
        try {
            await atualizarEncomenda(codigoBarras, { retirado });
            Alert.alert('Sucesso', 'Entrega registrada com sucesso');
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível registrar a entrega.');
        } finally {
            setLoading(false);
        }
    };

    if (hasPermission === null) {
        return <Text>Solicitando permissão para a câmera...</Text>;
    }

    if (hasPermission === false) {
        return <Text>Sem acesso à câmera</Text>;
    }

    return (
        <View style={registrarEntregaStyles.container}>
            {scanning ? (
                <BarCodeScanner
                    onBarCodeScanned={handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
            ) : (
                <>
                    {loading ? (
                        <ActivityIndicator size="large" color="#0000ff" />
                    ) : (
                        <View style={registrarEntregaStyles.innerContainer}>
                            <TextInput
                                style={registrarEntregaStyles.input}
                                placeholder="Código de Barras"
                                value={codigoBarras}
                                onChangeText={setCodigoBarras}
                            />

                            <View style={registrarEntregaStyles.buttonContainer}>
                                <Button
                                    title="Escanear Código de Barras"
                                    onPress={() => setScanning(true)}
                                    color="#007bff"
                                />
                            </View>

                            <View style={registrarEntregaStyles.switchContainer}>
                                <Text>Entregue:</Text>
                                <Switch
                                    value={retirado}
                                    onValueChange={setRetirado}
                                />
                            </View>

                            <View style={registrarEntregaStyles.buttonContainer}>
                                <Button
                                    title="Registrar Entrega"
                                    onPress={handleRegister}
                                    color="#DC143C"
                                />
                            </View>
                        </View>
                    )}
                </>
            )}
        </View>
    );
}
