import React, {useEffect, useState} from "react";
import { readJSON } from "../utils/jsonUtils";
import { View, Text, FlatList } from "react-native";
import listarEncomendasStyles from "../styles/listaEncomendasStyles";

export default function ListarEncomendasScreen() {
    const [encomendas, setEncomendas] = useState([]);
    
    useEffect(() => {
        // Carregar as encomendas do JSON
        const loadEncomendas = async () => {
            try {
                const data = await readJSON();
                setEncomendas(data);
            } catch (error) {
                console.error('Erro ao carregar encomendas', error)
            }
        };
        loadEncomendas();
    }, [])

    // renderiza cada item da lista
    const renderItem = ({item}) => (
        <View style={listarEncomendasStyles.itemContainer}>
            <Text style={listarEncomendasStyles.itemText}>Encomenda: {item.codigo_barras}</Text>
            <Text style={listarEncomendasStyles.itemText}>Nome: {item.nome}</Text>
            <Text style={listarEncomendasStyles.itemText}>Bloco: {item.bloco}</Text>
            <Text style={listarEncomendasStyles.itemText}>Unidade: {item.unidade}</Text>
            <Text style={listarEncomendasStyles.itemText}>Retirado: {item.retirada ? 'Sim' : 'Não'}</Text>
            <Text style={listarEncomendasStyles.itemText}>Data: {item.timestamp}</Text>
        </View>
    );

    return (
        <View style={listarEncomendasStyles.container}>
            <FlatList 
                data={encomendas}
                renderItem={renderItem}
                keyExtractor={(item) => item.codigo_barras}
                ListEmptyComponent={<Text style={listarEncomendasStyles.emptyText}>Nenhuma encomenda encontrada</Text>}
            />
        </View>
    )
}