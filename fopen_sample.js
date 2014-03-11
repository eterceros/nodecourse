var fs = require('fs');

function load_file_contents(path, callback) {
    fs.open(path, 'r', function (err, f) {
        if (err) {
            callback(err);
            return;
        } else if (!f) {
            callback(make_error("invalid_handle",
                "bad file handle from fs.open"));
            return;
        }
        fs.fstat(f, function (err, stats) {
            if (err) {
                callback(err);
                return;
            }
            if (stats.isFile()) {
                var b = new Buffer(10000);
                fs.read(f, b, 0, 10000, null, function (err, br, buf) {
                    if (err) {
                        callback(err);
                        return;
                    }
                    fs.close(f, function (err) {
                        if (err) {
                            callback(err);
                            return;
                        }
                        callback(null, b.toString('utf-8', 0, br));
                    });
                });
            } else {
                callback(make_error('not_file', "Can't load directory"));
                return;
            }
        });
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
