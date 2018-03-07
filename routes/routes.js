var mysql = require('mysql');

module.exports = function(app){

	app.get('/', function(req, res){
        // res.sendFile(path.join(__dirname, 'views/index.html'));
        res.render("home");
    });

    app.get('/novo-disco', function(req, res){
        
    	var connection = new app.database.connectionFactory();
    	var colecaoBanco = new app.database.colecaoInfra(connection);

    	colecaoBanco.list(function(err_list, res_list){
    		if(err_list)
    		{
    			res.send(err_list);
    		}else{
    			res.render("cadastro-disco", {lista_colecoes: res_list});
    		}
    	});

        
    });

    app.post('/novo-disco', function(req, res){

    	var connection = new app.database.connectionFactory();
    	var discoBanco = new app.database.discoInfra(connection);

    	var disco = {
    		titulo: req.body.titulo,
    		interprete: req.body.interprete,
    		ano: req.body.ano
    	}

    	discoBanco.insert(disco, function(err_disco, res_disco){
    		if(err_disco)
    		{
    			res.send(err_disco);
    		}else{
    			res.send("salvo");
    		}

    	});
    });


    app.get('/nova-colecao', function(req, res){
        res.render("cadastro-colecao");
    });

    app.post('/nova-colecao', function(req, res){

    	var connection = new app.database.connectionFactory();
    	var colecaoBanco = new app.database.colecaoInfra(connection);

    	var colecao = {
    		nome: req.body.nome,
    		descricao: req.body.descricao
    	}

    	colecaoBanco.insert(colecao, function(err_colecao, res_colecao){
    		if(err_colecao)
    		{
    			res.send(err_colecao);
    		}else{
    			res.send("salvo");
    		}

    	});
    });
}