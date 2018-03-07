module.exports = function(connection){
    return function(connection){
    	this.list = function(callback){
            connection.query('SELECT id, titulo, interprete, ano FROM discos', callback);
        }

        this.get = function(disco_id, callback){
            connection.query('SELECT id, titulo, interprete, ano FROM discos WHERE id = ' + disco_id, callback);
        }

        this.insert = function(disco, callback){
            connection.query('INSERT INTO discos (titulo, interprete, ano) VALUES ("' + disco.titulo + '", "' + disco.interprete + '", "' + disco.ano + '")', callback);
        }

        this.update = function(disco, callback){
            connection.query('UPDATE discos SET titulo = "' + disco.titulo + '", interprete = "' + disco.interprete + '", ano = "' + disco.ano + '" WHERE id = ' + disco.id , callback);
        }
    }
}