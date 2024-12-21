const http = require('http');

const indexHtml = require('./views/home/index.html');
const siteCss = require('./content/styles/site.css');
const addBreed = require('./views/addBreed.html')

const server = http.createServer((req, res) => {

    if ( req.url === '/styles/site.css'){
        res.write(200, {
            'content-type': 'text/css'
        });
        res.write(siteCss);
        return res.end();
    }
    
    res.writeHead(200, {
        "content-type": 'text/html'
    });

    switch (req.url) {
        case '/':
            res.write(indexHtml);
            break;
        case '/cats/add-breed':
            res.write(addBreed);
            break;
    
        default:
            break;
    }

    res.end();
});

server.listen(1000, console.log('Server is listening on port 1000'));