var http = require('http');
var querystring = require('querystring');
var PythonShell = require('python-shell');

var server = http.createServer().listen(3000);

server.on('request', function (req, res) {
    if (req.method == 'POST') {
        var body = '';
    }
    req.on('data', function (data) {
        body += data;
    });
    req.on('end', function() {
        var post = querystring.parse(body);
        console.log(post)
		var options = {
			args: [post.msg]
		};
		PythonShell.run('test.py', options, function (err){
        	if (err) throw err;
        	console.log('finished');
		});
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World\n');
    });
});

console.log('Listening on port 3000');

