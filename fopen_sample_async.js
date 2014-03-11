var fs = require('fs'),
    async = require('async');

function load_file_contents(path, callback) {
    var f;
    //executes each function in a sequence passing callback params
    async.waterfall([
        function (cb) {
            fs.open(path, 'r', cb);
        },
        function (handle, cb) {
            f = handle;
            fs.fstat(f, cb);
        },
        function (stats, cb) {
            if (stats.isFile()) {
                var b = new Buffer(10000);
                fs.read(f, b, 0, 10000, null, cb);
            } else {
                cb(make_error('not_a_file', "can't read it"));
            }
        },
        function (bytes_read, buffer, cb) {
            fs.close(f, function (err) {
                if (err) {
                    callback(err);
                } else {
                    callback(null, buffer.toString('utf-8', 0, bytes_read));
                }
            });
        }
    ],
        function (err, results) {
            callback(err, results);
        });
}

load_file_contents(
    'test.txt',
    function (err, contents) {
        if (err) {
            console.log(err);
        } else {
            console.log(contents);
        }
    }
);

function make_error(err, msg) {
    var e = new Error(msg);
    e.code = msg;
    return e;
}
