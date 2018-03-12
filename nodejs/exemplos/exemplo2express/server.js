var express = require('express');
app = express();

app.use(express.static(__dirname + '/public'));

app.get('/produtos', (req, res) => {
    res.send("<html><h1>Produtos</h1></html>");
});

console.log(`Listen port 8080`);

app.listen(8080);