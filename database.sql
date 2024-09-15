CREATE TABLE IF NOT EXISTS encomendas (
    id SERIAL PRIMARY KEY,
    codigo_barras TEXT,
    nome TEXT,
    bloco TEXT,
    unidade INTEGER,
    retirado BOOLEAN DEFAULT FALSE,
    timestamp TIMESTAMPTZ DEFAULT NOW()
);