import React from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner'

const QRCodeScannerComponent = ({ onScan }) => {
    return (
        <QRCodeScanner
            onRead={onScan}
            flashMode={QRCodeScanner.Constants.FlashMode.auto}
            topContent={<Text>Escanei o codigo de barras</Text>}
            bottomContent={<Button title='Cancelar' onPress={() => onScan({ data: ''})}></Button>}
            cameraProps={{ flashMode: RNCamera.Constants.FlashMode.auto}}
        />

    )
};

const styles = StyleSheet.create({
    centerText: {
        fontSize: 18,
        padding: 10,
    }
})

export default QRCodeScannerComponent;