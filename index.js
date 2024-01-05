const fs = require('fs')
const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    const pathName = req.url

    if(pathName === '/overview') {
        res.end('This is the OVERVIEW')
    } else if(pathName === '/product') {
        res.end('This is the PRODUCT')
    }
    else {
        fs.readFile('pnf.html', (err, data) => {
            if(err) {
                {
                    res.writeHead(500, {'Content-Type': 'text/plain'});
                    res.end('Erro interno do servidor');
                    return;
                }
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        })
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Server is running on port 8000')
})