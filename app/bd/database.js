const {Pool, Client} = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'cont.ie',
    password: 'senha',
    port: 5432
});

client.connect();

process.on('SIGINT', function() {
    client.end(function() {
        console.log('Banco! Desconectado pelo término da aplicação');
        // 0 indica que a finalização ocorreu sem erros
        process.exit(0);
    });
});

module.exports = client;
