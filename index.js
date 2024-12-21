const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Hello my first Node.js project');

    res.end();
});

server.listen(1000, console.log('Server is listening on port 1000'));