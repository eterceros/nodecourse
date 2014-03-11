var http = require('http');

function handle_incoming_request(req, res) {
    console.log('Incoming request: (' + req.method + ') ' + req.url);
    console.log('\n\n\n');
    console.log(req);
    console.log('\n\n\n');
    console.log(res);
    console.log('\n\n\n');
    res.end('Thanks for calling');
}

var s = http.createServer(handle_incoming_request);
s.listen(8080);

/*

 */

