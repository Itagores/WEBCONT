const {Pool, Client} = require('pg');

module.exports = function (uri) {

    const client = new Client({
       user: 'postgres',
       host: 'localhost',
       database: 'cont.ie',
       password: 'senha',
       port: 5432
    });

    client.connect();
/*
    client.query("select * from usuario;", function (err, res) {
       if(err){
           console.log(err.stack);
       } else{
           console.log(res.rows);
       }
    });*/



    process.on('SIGINT', function() {
        client.end(function() {
            console.log('Banco! Desconectado pelo término da aplicação');
            // 0 indica que a finalização ocorreu sem erros
            process.exit(0);
        });
    });
};