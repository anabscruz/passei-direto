var mysql = require('mysql');

module.exports = function(app){

	app.get('/', function(req, res){
        // res.sendFile(path.join(__dirname, 'views/index.html'));
        res.render("home");
    });

    app.get('/novo-disco/:idcolecao', function(req, res){
        
    	var connection = new app.database.connectionFactory();
    	var colecaoBanco = new app.database.colecaoInfra(connection);

    	colecaoBanco.list(function(err_list, res_list){
    		if(err_list)
    		{
    			res.send(err_list);
    		}else{
    			res.render("cadastro-disco", {lista_colecoes: res_list, idcolecao: req.params.idcolecao});
    		}
    	});

        
    });

    app.post('/novo-disco/:idcolecao', function(req, res){

    	var connection = new app.database.connectionFactory();
    	var discoBanco = new app.database.discoInfra(connection);

    	var disco = {
    		titulo: req.body.nome,
    		interprete: req.body.interprete,
    		ano: req.body.ano
    	}

    	discoBanco.insert(disco, function(err_disco, res_disco){
    		if(err_disco)
    		{
    			res.send(err_disco);
    		}else{
    			if(req.body.idcolecao){
    				var colecaoBanco = new app.database.colecaoInfra(connection);

    				colecaoBanco.addDisco(req.body.idcolecao, function(err_col, req_col){
    					if(err_col)
    					{
    						res.send(err_col)
    					}else{
    						res.redirect("/detalhe-colecao/" + req.body.idcolecao);
    					}
    				});
    			}

    			
    		}

    	});
    });


    app.get('/editar-disco/:iddisco', function(req, res){ 
    	var connection = new app.database.connectionFactory();
    	var discoBanco = new app.database.discoInfra(connection);

    	discoBanco.get(req.params.iddisco, function(err_disco, res_disco){
    		if(err_disco)
    		{
    			res.send(err_disco);
    		}else{
    			res.render("editar-disco", {disco: res_disco[0]});
    		}
    	});
    });

    app.post('/editar-disco/:iddisco', function(req, res){ 
    	var connection = new app.database.connectionFactory();
    	var discoBanco = new app.database.discoInfra(connection);

    	var disco = {
    		id: req.params.iddisco,
    		titulo: req.body.nome,
    		interprete: req.body.interprete,
    		ano: req.body.ano
    	}

    	discoBanco.update(disco, function(err_disco, res_disco){
    		if(err_disco)
    		{
    			res.send(err_disco);
    		}else{
    			res.redirect("/colecoes");
    		}
    	});
    });


    app.get('/colecoes', function(req, res){

    	var connection = new app.database.connectionFactory();
    	var colecaoBanco = new app.database.colecaoInfra(connection);

    	colecaoBanco.list(function(err_lista, res_lista){
    		if(err_lista)
    		{
    			res.send(err_lista);
    		}else{
    			res.render("colecoes", {colecao: res_lista});
    		}
    	});
        
    });

    app.get('/detalhe-colecao/:idcolecao', function(req, res){

    	var connection = new app.database.connectionFactory();
    	var colecaoBanco = new app.database.colecaoInfra(connection);

    	colecaoBanco.get(req.params.idcolecao, function(err_lista, res_lista){
    		if(err_lista)
    		{
    			res.send(err_lista);
    		}else{

    			colecaoBanco.listDiscos(req.params.idcolecao, function(err_discos, res_discos){
    				if(err_discos){
    					res.send(err_discos);
    				}else{
    					console.log(res_discos);
    					res.render("detalhe-colecao", {colecao: res_lista[0], lista_discos: res_discos});
    				}
    			});
    			
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