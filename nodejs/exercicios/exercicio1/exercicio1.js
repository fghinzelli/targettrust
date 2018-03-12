const http = require('http');

const hostname = '127.0.0.1';
const port = 3002;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    
    //res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    //res.setHeader('Content-Type', 'text/json');
    //res.end('{"nome": "Fernando Ghinzelli", "nascimento": "14/08/1985", "email": "fghinzelli@mprs.mp.br"}');

    res.setHeader('Content-Type', 'text/html');
    res.end(`<html>
                <body>
                    <table>
                        <tr><td>Nome:</td><td>Fernando Ghinzeli</td></tr>
                        <tr><td>Data de Nascimento:</td><td>14/08/2018</td></tr>
                        <tr><td>Email:</td><td>fghinzelli@mprs.mp.br</td></tr>
                    </table>
                </body>
            </html>`)
});

server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});