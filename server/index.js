const http = require('http');
const fs = require('fs');
const path = require('path');

// Porta do servidor
const port = 3000;

const server = http.createServer((req, res) => {
    let filePath;

    // Verifica a URL e define o caminho correto para os arquivos
    console.log("req.url", req.url);
    if (req.url === '/') {
        filePath = path.resolve(__dirname, '../client/views/index.html');
        // console.log("filePath", filePath);
    } else if (req.url.startsWith('/client/public/')) {
        filePath = path.resolve(__dirname, `..${req.url}`);
        // console.log("filePathPublic", filePath);

    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Arquivo não encontrado');
        return;
    }

    const extname = path.extname(filePath);
    // console.log("ext: ", extname)
    let contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'application/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            console.log("css")
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Lê e serve o arquivo solicitado
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Arquivo não encontrado');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
});

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
