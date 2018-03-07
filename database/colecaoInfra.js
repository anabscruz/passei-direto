module.exports = function(connection){
    return function(connection){
    	this.list = function(callback){
            connection.query('SELECT idcolecao, nome, descricao FROM colecao', callback);
        }

        this.get = function(colecao_id, callback){
            connection.query('SELECT idcolecao, nome, descricao FROM colecao WHERE idcolecao = ' + colecao_id, callback);
        }

        this.insert = function(colecao, callback){
            connection.query('INSERT INTO colecao (nome, descricao) VALUES ("' + colecao.nome + '", "' + colecao.descricao + '")', callback);
        }

        this.update = function(colecao, callback){
            connection.query('UPDATE colecao SET nome = "' + colecao.nome + '", descricao = "' + colecao.descricao + '" WHERE id = ' + colecao.id , callback);
        }

        this.addDisco = function(colecao_id, callback){
            connection.query('INSERT INTO colecao_discos VALUES (' + colecao_id + ', (SELECT max(id) FROM discos))', callback);
        }

        this.listDiscos = function(colecao_id, callback){
            connection.query('select * from colecao_discos c, discos d where d.id = c.iddisco and idcolecao=' + colecao_id, callback)
        }
    }
}