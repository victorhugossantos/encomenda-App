import { StyleSheet } from "react-native";

const listarEncomendasStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    itemContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    itemText: {
        fontSize: 16,
        marginBottom: 4,
    },
    emptyText: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
    }
});

export default listarEncomendasStyles;