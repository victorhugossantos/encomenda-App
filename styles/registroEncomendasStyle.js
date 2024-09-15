import { StyleSheet } from "react-native";

const registroEncomendaStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff'
    },
    scanner: {
        height: 200,
        width: '100%',
        Margin: 20,
    },
    InputField: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        width: '100%',
        paddingHorizontal: 15,
        margin: 15,
        fontSize: 16,
        backgroundColor: '#f8f8f8'
    },
    buttonContainer: {
        width: '100%',
        margin: 20,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
    }
});

export default registroEncomendaStyles