var app = require("./config/custom-express")();
app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function(){
	console.log("Servidor Rodando na porta " + app.get('port'));
});

