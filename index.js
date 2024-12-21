const http = require('http');

const indexHtml = require('./views/home/index.html');
const siteCss = require('./content/styles/site.css');
const addBreed = require('./views/addBreed.html');
const addCat = require('./views/addCat.html');
//const catHtml = require('./views/cat.html')

const cats = [
    {
        id: 1,
        imageUrl: 'https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.jpg?s=612x612&w=0&k=20&c=vvM97wWz-hMj7DLzfpYRmY2VswTqcFEKkC437hxm3Cg=',
        name: 'Pretty Kitty',
        breed: 'Bombay Cat',
        description: 'Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.',
    },
    {
        id: 2,
        imageUrl: 'https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.jpg?s=612x612&w=0&k=20&c=vvM97wWz-hMj7DLzfpYRmY2VswTqcFEKkC437hxm3Cg=',
        name: 'Navcho',
        breed: 'Bombay Cat',
        description: 'Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.',
    },
    {
        id: 3,
        imageUrl: 'https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.jpg?s=612x612&w=0&k=20&c=vvM97wWz-hMj7DLzfpYRmY2VswTqcFEKkC437hxm3Cg=',
        name: 'Sisa',
        breed: 'Bombay Cat',
        description: 'Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.',
    },
    {
        id: 4,
        imageUrl: 'https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.jpg?s=612x612&w=0&k=20&c=vvM97wWz-hMj7DLzfpYRmY2VswTqcFEKkC437hxm3Cg=',
        name: 'Garry',
        breed: 'Bombay Cat',
        description: 'Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.',
    },
];

const server = http.createServer((req, res) => {

    if ( req.url === '/styles/site.css.js'){
        res.writeHead(200, {
            'content-type': 'text/css',
        });
        res.write(siteCss);
        return res.end();
    }
    
    res.writeHead(200, {
        "content-type": 'text/html',
    });

    switch (req.url) {
        case '/':
            res.write(indexHtml);
            break;
        case '/cats/add-breed':
            res.write(addBreed);
            break;
        case '/cats/add-cat':
            res.write(addCat);
            break;
    
        default:
            res.write(`<h1>Page Not Found!</h1>`);
            break;
    }

    res.end();
});

server.listen(1000, console.log('Server is listening on port 1000'));