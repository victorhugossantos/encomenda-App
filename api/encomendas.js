import axios from 'axios';

const API_URL = 'http://192.168.0.7:3000/encomendas';

// Função para registrar encomenda
export const registrarEncomenda = async (encomendaData) => {
    try {
        const response = await axios.post(API_URL, encomendaData, {
            timeout: 10000 // Aumentando o tempo limite para 10 segundos
        });
        console.log('Encomenda registrada:', response.data);
        return response.data;
    } catch (error) {
        console.error('Erro ao registrar encomenda:', error.response ? error.response.data : error.message);
        throw error;
    }
};

// Função para atualizar encomenda
export const atualizarEncomenda = async (codigo_barras, updates) => {
    try {
        const response = await axios.put(`${API_URL}/${codigo_barras}`, updates, {
            timeout: 10000 // Aumentando o tempo limite para 10 segundos
        });
        console.log('Encomenda atualizada:', response.data);
        return response.data;
    } catch (error) {
        console.error('Erro ao atualizar encomenda:', error.response ? error.response.data : error.message);
        throw error;
    }
};
