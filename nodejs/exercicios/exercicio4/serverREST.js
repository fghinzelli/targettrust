var date = (new Date()).toJSON();

const http = require('http')
    , SUCCESS = {
        version     : 1.0,
        name        : 'TargetTrust',
        created_at  : new Date()
    }
    , ERROR = {
        message     : 'Recurso não Encontrado',
        code        : 404
    }

    http.createServer(function(req, res) {
        let url = req.url, 
            method = req.method;

        function return_404(res){
            res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
            res.write(JSON.stringify(ERROR));
        }

        switch (url) {
            case "/api/target/cadastra":
                if (method === "POST"){
                    res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});
                    res.write(JSON.stringify(SUCCESS));
                } else {
                    return_404(res);
                }
                break;
            case "/api/target/cadastra":
                if (method === "GET"){
                    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                    res.write(JSON.stringify(SUCCESS));
                } else {
                    return_404(res);
                }
                break;
            case "/api/target/altera":
                if(method === "PUT") {
                    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                    res.write(JSON.stringify(SUCCESS));
                } else {
                    return_404(res);
                }
                break;
            case "/api/target/exclui":
                if(method === "DELETE") {
                    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                    res.write(JSON.stringify(SUCCESS));
                } else {
                    return_404(res);
                }
                break;
            default:
                return_404(res);

        }

        res.end();
    })
    .listen(3009, function(){
        console.log("Escutando porta 3009");
    });