const express = require('express'); // importo o express, que o framework back do node
const app = express(); // chamo o metodo express e coloco na variavel app 
const http = require('http'); // import o http que é padrão do 
const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send('<h1>Pega</h1>');
});

server.listen(3000, () => {
    console.log('listening on *: 3000')
})