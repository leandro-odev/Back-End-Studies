const fs = require('fs')
const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    const pathName = req.url

    if(pathName === '/overview' || pathName === '/') {
        res.end('This is the OVERVIEW')
    } else if(pathName === '/product') {
        res.end('This is the PRODUCT')
    }
    else if(pathName === '/api') {

        fs.readFile('./dev-data/data.json', 'utf-8')



        res.end('This is the API')
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
            res.writeHead(200, {'Content-Type': 'text/html', myOwnHeader: 'Hello World'});
            res.end(data);
        })
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Server is running on port 8000')
})