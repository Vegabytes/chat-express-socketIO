const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const morgan = require('morgan');


app.set('port', 3000);
app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));


server.listen(app.get('port'),function() {
    console.log('servidor iniciado');
});

require('./sockets')(server);



