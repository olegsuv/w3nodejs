var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    fs.writeFile('mynewfile3.txt', 'This is my text', function () {
        fs.readFile('mynewfile3.txt', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    });
}).listen(8080);
