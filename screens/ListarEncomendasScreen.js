import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import axios from 'axios';
import listarEncomendasStyles from "../styles/listaEncomendasStyles";

const API_URL = 'http://192.168.0.7:3000/encomendas'; 

export default function ListarEncomendasScreen() {
    const [encomendas, setEncomendas] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const loadEncomendas = async () => {
            try {
                const response = await axios.get(API_URL);
                setEncomendas(response.data);
            } catch (error) {
                setError('Erro ao carregar encomendas');
                console.error('Erro ao carregar encomendas:', error.message);
            } finally {
                setLoading(false);
            }
        };
        loadEncomendas();
    }, []);

    const renderItem = ({ item }) => (
        <View style={listarEncomendasStyles.itemContainer}>
            <Text style={listarEncomendasStyles.itemText}>Código de Barras: {item.codigo_barras}</Text>
            <Text style={listarEncomendasStyles.itemText}>Nome: {item.nome}</Text>
            <Text style={listarEncomendasStyles.itemText}>Bloco: {item.bloco}</Text>
            <Text style={listarEncomendasStyles.itemText}>Unidade: {item.unidade}</Text>
            <Text style={listarEncomendasStyles.itemText}>Retirado: {item.retirado ? 'Sim' : 'Não'}</Text>
            <Text style={listarEncomendasStyles.itemText}>Data Recebido: {item.data_recebido ? new Date(item.data_recebido).toLocaleString() : 'Não disponível'}</Text>
            <Text style={listarEncomendasStyles.itemText}>Data Retirado: {item.data_retirado ? new Date(item.data_retirado).toLocaleString() : 'Não disponível'}</Text>
        </View>
    );

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return <Text style={listarEncomendasStyles.emptyText}>{error}</Text>;
    }

    return (
        <View style={listarEncomendasStyles.container}>
            <FlatList 
                data={encomendas}
                renderItem={renderItem}
                keyExtractor={(item) => item.codigo_barras}
                ListEmptyComponent={<Text style={listarEncomendasStyles.emptyText}>Nenhuma encomenda encontrada</Text>}
            />
        </View>
    );
}
