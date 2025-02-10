const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }
    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});
/*
const server = http.createserver();
 server.on ('connection',(socket)=>{ 
console.log('new connection')});*/ //we have to run on google localhost::3000 it will give new connection in the console

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
