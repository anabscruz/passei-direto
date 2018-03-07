var mysql = require('mysql');

/* Conexão com banco de dados local */
function createDBConnection() {
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '!Nh4ND5',
        database : 'desafio-passei-direto'
    });
}


// Wrapper
module.exports = function(){
    return createDBConnection;
}