var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    fs.appendFile('mynewfile1.txt', 'Hello content!', function () {
        fs.readFile('mynewfile1.txt', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    });

    fs.open('mynewfile2.txt', 'w', function (err, file) {
        if (err) throw err;
        console.log('Saved!');
    });

    fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}).listen(8080);
