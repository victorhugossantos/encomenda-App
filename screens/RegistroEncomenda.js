import React, { useEffect, useState} from "react";
import { Button, View } from "react-native";
import registroEncomendaStyles from "../styles/registroEncomendasStyle";
import { BarCodeScanner } from "expo-barcode-scanner";
import { ScreenStackHeaderCenterView } from "react-native-screens";

export default function registroEncomendaScreen() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(null);
    const [scannedData, setScannedData] = useState('');
    const [bloco, setBloco] = useState('');
    const [unidade, setUnidade] = useState('');
    const [timestamp, setTimestamp] = useState('');

    // Pedindo permissao para usar a camera
    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted')
        })();
    }, []);

    const handleBarCodeScanned = ({ data }) => {
        setScanned(true);
        setScannedData(data);
        setTimestamp(moment().format('YYYY-MM-DD HH:mm:ss'));
    }

    const handleRegister = () => {
        if (!scannedData || !bloco || !unidade) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos e faca a leitura do codigo de barras')
            return;

        }

        // simulacao aqui ficara o backend
        Alert.alert('Sucesso', 'Por favor, Encomenda Registrada')

        // limpar os campos apos o registro

        setScanned(false)
        setScannedData('');
        setBloco('');
        setUnidade('');
        setTimestamp('');

    };

    return (
        <View style={registroEncomendaStyles.container}>
            {!scanned ? (
                <BarCodeScanner 
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={{ height: 400, width: 400}}
                />
            ):(
            <>
                <InputField 
                    value={bloco}
                    onChangeText={setBloco}
                    placeholder="Bloco"
                />
                <InputField 
                    value={unidade}
                    onChangeText={setUnidade}
                    placeholder="Unidade"
                />
                <View style={registroEncomendaStyles.buttonContainer}>
                    <Button title ="Registrar Encomendada" onPress={handleRegister}/>
                    <Button title="Escanear Novamente" onPress={() => setScanned(false)}/>
                </View>
            </>
            )}
        </View>
    )
}