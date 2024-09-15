import * as FileSystem from 'expo-file-system';

const FILE_NAME = 'encomendas.json';
const FILE_URI = FileSystem.documentDirectory + FILE_NAME;

export async function readJSON() {
    try {
        const fileInfo = await FileSystem.getInfoAsync(FILE_URI);
        if (!fileInfo.exists) {
            await FileSystem.writeAsStringAsync(FILE_URI, JSON.stringify([]));
            return [];
        }
        const jsonString = await FileSystem.readAsStringAsync(FILE_URI);
        return JSON.parse(jsonString);
    } catch (error) {
        console.error('Erro ao ler o arquivo JSON', error)
        return [];
    }
}

export async function writeJSON(data) {
    try {
        await FileSystem.writeAsStringAsync(FILE_URI, JSON.stringify(data));
    } catch (error) {
        console.error('Erro ao escrever no arquivo JSON', error);
    }
}