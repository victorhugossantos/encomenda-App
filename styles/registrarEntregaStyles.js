import { StyleSheet } from 'react-native';

const registrarEntregaStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderBottomWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    buttonContainer: {
        marginBottom: 16,
    },
    image: {
        width: 100,
        height: 100,
        marginTop: 8,
        resizeMode: 'cover',

    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
});

export default registrarEntregaStyles;
